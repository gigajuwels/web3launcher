// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol';
import './IGameDirectory.sol';
import './AggregatorV3Interface.sol';

contract Figura is Initializable, ERC721Upgradeable, ERC721EnumerableUpgradeable, AccessControlUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    CountersUpgradeable.Counter private _tokenIdCounter;
    IGameDirectory public gameDirectory;
    AggregatorV3Interface public ethToUsdFeed;

    mapping(uint256 => uint256) public gameBalance;
    mapping(uint256 => uint256) public tokenIdGameMapping;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(address _directoryAddress, address _chainlinkFeed) initializer public {
        __ERC721_init('Figura', 'FIG');
        __ERC721Enumerable_init();
        __AccessControl_init();

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);

        gameDirectory = IGameDirectory(_directoryAddress);
        ethToUsdFeed = AggregatorV3Interface(_chainlinkFeed);
    }

    function buyGame(uint256 gameId, address newOwner) external payable {
        require(gameDirectory.exists(gameId), 'Game does not exist');

        uint256 etherPayment = msg.value;

        uint256 weiRequired = _convertUsdPriceToWei(gameId);

        require(etherPayment >= weiRequired, 'Did not send enough to meet payment');

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(newOwner, tokenId);
        tokenIdGameMapping[tokenId] = gameId;

        gameBalance[gameId] += weiRequired;

        if (etherPayment > weiRequired) {
            //Refund any extra
            payable(msg.sender).transfer(etherPayment - weiRequired);
        }
        //_setTokenURI(tokenId, uri);
    }

    function _convertUsdPriceToWei(uint256 gameId) internal view returns (uint256) {
        int price;

        (
            , 
            price,
            ,
            ,
        ) = ethToUsdFeed.latestRoundData();

        uint256 decimals = ethToUsdFeed.decimals();
        uint256 currentPrice = 0;

        if (decimals == 18) {
            currentPrice = uint256(price);
        } else if (decimals < 18) {
            //Convert price to wei
            uint256 factor = 10 ** (18 - decimals);
            uint256 convertedPrice = currentPrice * factor;

            currentPrice = convertedPrice;
        } else {
            revert('Feed is using unsupported decimals');
        }

        IGameDirectory.GameData memory data = gameDirectory.gameData(gameId);

        uint256 weiRequired = data.price / (currentPrice / 1e18);

        return weiRequired;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        uint256 gameId = tokenIdGameMapping[tokenId];
        return gameDirectory.tokenURI(gameId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable, AccessControlUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
