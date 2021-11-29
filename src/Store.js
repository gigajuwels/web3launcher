import logo from './logo.svg';
import './Store.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Navbar, Container, NavDropdown, Nav, Offcanvas, Button, Card, Image } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import Glider from 'react-glider';
import FormCheck from 'react-bootstrap/FormCheck'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './glider-js/glider.min.css';
import { ethers } from 'ethers';
import ReactDOM from "react-dom";
import Web3Modal from "web3modal";
import swal from 'sweetalert';
import chart from './images/gamedevblockchain.png';
import gamerwallet from './images/walletsblockchain.png';
import Blockies from 'react-blockies';
import { Redirect } from 'react-router-dom';
import useWeb3 from './hooks/useWeb3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FiguraAddress = "0xbAe6Ac958D08F8CD2EEFf161acC40A8E0C622e09";
const FiguraABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameId","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"buyGame","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"ethToUsdFeed","outputs":[{"internalType":"contract AggregatorV3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"gameBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameDirectory","outputs":[{"internalType":"contract IGameDirectory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_directoryAddress","type":"address"},{"internalType":"address","name":"_chainlinkFeed","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdGameMapping","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
function Store() {
  const { connected, signer, loading, address, connect } = useWeb3();

  async function buy() {
    let signerToUse = signer;
    if (!connected) {
      signerToUse = await connect();
    }

    const figuraContract = new ethers.Contract(FiguraAddress,FiguraABI,signerToUse);  

    const gameId = "0"

    try {
          swal({
            title: "Loading...",
            text: "Please wait",
            button: false,
            closeOnClickOutside: false
          });
          let purchase = await figuraContract.buyGame(gameId, await signerToUse.getAddress(), {value: ethers.utils.parseEther("0.045")});
          let depositr = await purchase.wait(1);
          let tx = depositr.transactionHash;
          if (depositr.status) {
              var elem = document.createElement("div");
              elem.innerHTML = "<p style=\"color: black\">This game has been purchased.<br><br><a href=\"https://testnet.snowtrace.io//tx/" + tx + "\">View Transaction</a></p>";
              swal({
                  title: "Purchase Successful",
                  content: elem,
                  icon: "success"
              });
          } else {
              swal("Submission Failed", "Your Submission could not be processed, we're sorry :( Please provide the transaction hash to the devs to help figure out what went wrong.\nTransaction Hash: " + tx, "error");
          }
      } catch (e) {
          if (e.message.includes('User denied')) {
              swal.close();
          } else {
              console.log(e);
              let errstr = e.message
              if (e.error && e.error.message) {
                errstr = e.error.message.split(':')[1].trim()
              }
              swal("Submission Failed", "Your Submission could not be processed, we're sorry :( Please provide the error to the devs to help figure out what went wrong.\nError: " + errstr, "error");
          }
      }
  }

  //If we aren't connected and we're not loading
  //Then go back to the homepage
  if (!connected && !loading) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <div>
      <div className="templatebackground"></div>
      <div className="templateflex">
        <div className="header">FIGURA MARKETPLACE</div>
        <div className="templateup">
          <Navbar bg="#373440" className="navbarcolor" expand={false}>
            <Container fluid>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Figura"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              {/*                     <Nav.Link href="#link">Library</Nav.Link>
                  <Nav.Link href="#link">Marketplace</Nav.Link> */}
              <Blockies
                seed={address}
                size={10}
                scale={4}
                className="identicon"
              />
              {/*  <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  backdrop={false}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Account</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Wallet</Nav.Link>
                      <Nav.Link href="#action2">Transaction History</Nav.Link>
                      <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown"> 
                         <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action4"></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  
                  </Offcanvas.Body>
                </Navbar.Offcanvas> */}
            </Container>
          </Navbar>
          {/* main content */}
          <div className="gamesection">
            <div>

              <div className="focusedgame">
                <div className="gamecover">
                  <Image src="https://warriders.com/wr_uploads/2018/04/site-icon.jpg" fluid />
                </div>

                
                <div className="focusgametext">
                <div className="gametextbg">
                  <h1 className="gamename">War Riders</h1>
                  <p className="fordemo">The first MMO game of earning cryptocurrency and blowing up cars.</p>

                  <div className="gamestoredemobutts">
                    <button className="gamewebpagebut" onClick={buy}>
                      BUY GAME
                    </button>
                    <button className="openseabut" onClick={""}>
                      VIEW OPENSEA <br /> COLLECTION
                    </button>
                    </div>
                  </div>
                </div>
              </div>


              {/* CAROUSEL STARTS HERE */}
              <Carousel responsive={responsive}>
                <div className="cards card1">
                    <h4 class ="card-title">Alien Worlds</h4>
                    {/* <p class ="card-text">Description of Game 1</p> */}
                </div>
                <div className="cards card2">
                    <h4 class ="card-title">AnRKey X</h4>
                   {/*  <p class ="card-text">Description of Game 2</p> */}
                </div>
                <div className="cards card3">
                    <h4 class ="card-title">Gods Unchained</h4>
                   {/*  <p class ="card-text">Description of Game 3</p> */}
                </div>
                <div className="cards">
                    <h4 class ="card-title">Placeholder Game 4</h4>
                    {/* <p class ="card-text">Description of Game 4</p> */}
                </div>
              </Carousel>
              {/* CAROUSEL ENDS HERE */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Store;
