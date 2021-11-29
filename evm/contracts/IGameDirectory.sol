

interface IGameDirectory {
    struct GameData {  
        string title;
        string slug;
        string description;
        string publisher;
        string gameCoverURL;
        string website;
        string webhook;
        uint256 price;
    }

    function gameData(uint256 gameId) external view returns (GameData memory);

    function exists(uint256 gameId) external returns (bool);

    function tokenURI(uint256 gameId) external view returns (string memory);
}