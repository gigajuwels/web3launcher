import logo from './logo.svg';
import './App.css';
import './index.css';
import * as React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import Glider from 'react-glider';
import FormCheck from 'react-bootstrap/FormCheck'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './glider-js/glider.min.css';
import { ethers } from 'ethers';
import ReactDOM from "react-dom";
import { Carousel } from 'react-carousel-minimal';
import Web3Modal from "web3modal";
import swal from 'sweetalert';
import chart from './images/gamedevblockchain.png';
import gamerwallet from './images/walletsblockchain.png';
import { Link } from "react-router-dom";

const GameDirectoryAddress ="0xbD28aadDD78aC3B0b9185967D68aC4EfB332C3D0"
const GameDirectoryABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"games","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"publisher","type":"string"},{"internalType":"string","name":"gameCoverURL","type":"string"},{"internalType":"string","name":"webhook","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"publisher","type":"string"},{"internalType":"string","name":"gameCoverURL","type":"string"},{"internalType":"string","name":"webhook","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct GameDirectory.GameData","name":"gamesub","type":"tuple"}],"name":"submitGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
function App() {

async function submit() {
    const web3Modal = new Web3Modal({
      network: 'fuji',
      cacheProvider: true,
      theme: "dark"
    });
  
    const provider = await web3Modal.connect();
  
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    const gamedirectorycontract = new ethers.Contract(GameDirectoryAddress,GameDirectoryABI,signer);  

    try {
          swal({
            title: "Loading...",
            text: "Please wait",
            button: false,
            closeOnClickOutside: false
          });
          let submission = await gamedirectorycontract.submitGame(await signer.getAddress(), { 
             title: "agame",
             description:"a crypto game",
             publisher: "someone cool",
             gameCoverURL: "https://c.ndtvimg.com/2021-08/jsp485jg_axie-infinity-_625x300_26_August_21.jpg",
             webhook: "",
            price: "1000000000000000000"
          });
          let depositr = await submission.wait(1);
          let tx = depositr.transactionHash;
          if (depositr.status) {
              var elem = document.createElement("div");
              elem.innerHTML = "<p style=\"color: black\">This game has been submitted.<br><br><a href=\"https://testnet.snowtrace.io//tx/" + tx + "\">View Transaction</a></p>";
              swal({
                  title: "Submission Successful",
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
/*   images */
  const data = [
    {
      image: "https://lh3.googleusercontent.com/CQn4qrBCBFmxCN2zsnE2pVh0jLY8CAbWFJoeR2hX8vH_KKSiBTW2sKk02vVqvgeiZNe5fUoJKVCixFvQowiheDwpkTw2BOnWNPelNQ=h600",
      caption: "a1 UNIVERSE 1a"
    },
    {
      image: "https://lh3.googleusercontent.com/IWCTSYtEeybLS-7Yu-gAWyN7Nr_rrXoLpTwlRGgkMKGfzB906YcFwTuHXlNTdwknYeKJL_roCfwS7urU7zsxp_Eel8GxlyDIuwMkEw=h600",
      caption: "Arcona Nobility Title"
    },
    {
      image: "https://lh3.googleusercontent.com/-NJLp6EfNsBT4lL5jKqHGJN4nw74MQA10jf_utYEru4Z0IniAKg29LmBsUjUN440F50I1lDA3Lp26FBRPoD61FvYQBggYCGY0arJQg=h600",
      caption: "[VOXEL WORLDS]"
    },
    {
      image: "https://lh3.googleusercontent.com/r44oYVAmBFhRq8uAtsAh3JHldyoIaUfapcfO9uAcR43Fd-pJvvnRSPfD-CHL7m8zi5olJeD5bjVHLhMtxEWwlZX7gD4z2EYg3qOZZVE=h600",
      caption: "Ember Sword Land"
    },
    {
      image: "https://lh3.googleusercontent.com/8HDbD-pIVYaXS2By0gH-0mvznTburs5o3tpqlHry8JTJLfGop6sF27ZZjAqMyX_pqOqC8Nu2fEmHCRotu3UKHZnlAlrPqrt3gWkFAJA=h600",
      caption: "Big Time Founders Collection"
    },
    {
      image: "https://lh3.googleusercontent.com/S6D3GIB6cMOW1U_n9_zN5qegkR-X-zb-Z5dnpkMABKo1UzROM8dDgw1l7PGL2oe-En4OsF_3IOUa3cRVcfYGkC8rW-lhXRY2Iv5sQQ=h600",
      caption: "Etherland"
    },
    {
      image: "https://lh3.googleusercontent.com/abVs7LJKsgbObY7iXIySKTUtGqfeQGtvfMbllfxQlt8oaPvM77AC5c9NNtXGcOFfiBjjYjA7c2qdwSCplHCSuQZTLji2Mw0yVQDH9Q=h600",
      caption: "Aether"
    },
    {
      image: "https://lh3.googleusercontent.com/IJ7iHMSAzpPTRy63HN1Qj03bG2FPpT1R_OFh1NnDG6rT9YhSILLDlOLrkGXF9s2rtLY5tRIobtMSOxySQLvBwN2L1ZhBInqjRtz-OA=h600",
      caption: "Influence Asteroids"
    },
    {
      image: "https://lh3.googleusercontent.com/vo_KmiLpxgRzwuJ6VfRDB5vVTEojHIzpyRANC17n1cWU-wCp9lW5LdzhDDIJdaawwel1qDXiPeIingcuCSNv9S-uswU5WCSe06l73w=h600",
      caption: "War Riders"
    }
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }





/*   end image import */





  return (
      <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
{/* FIRST PAGE */}
            <div className="section firstpage">
                <div className="firstflex firstpageheight">
                  <div>
                    <p className="hackName firstpagetext">FIGURA</p>
                    <p className="hackDescription firstpagetext">DECENTRALIZED GAME STORE</p>
                    <p className="hackabout">Figura solves an often overlooked issue that over three billion people face globally. 
There are over <a className="aboutnum" href="https://www.statista.com/statistics/293304/number-video-gamers/">3.24</a > billion gamers in the world who spend over a hundred billion USD annually on their games and game items. The major issue with centralized game stores is that they do not empower the player and can oftentimes treat indie game developers unfairly. Figura is here to change this.
</p>
                    <button className="firstpagebutton" onClick={() => fullpageApi.moveSectionDown()}>
                      EXPLORE NOW
                    </button>
                    <button className="firstpagebutton2" onClick={() => fullpageApi.moveTo(3)}>
                      SUBMIT GAME
                    </button>
                    </div>
                    <iframe src='https://my.spline.design/untitled-b12301ff620069cece76462a5e3b3ef0/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
            </div>


{/* LAUNCH PAGE */}
            <div className="section launchpage">
              <div className="submitflex">

                <div>
                        <div className="aboutLauncher">
                        <p className="launchtitle">What's Figura?</p>
                              <div className ="launchtext">
                              <p>Figura solves the problem of ______ by doing _______ which is made possible by ______</p>
                              <button className="launchpagebutton">
                                <Link className="whitetxt" to="/store">LAUNCH FIGURA</Link>
                              </button>
                            </div>
                          </div>
                </div>
                <div className="launchside">
               {/*  <img src={gamerwallet} className="launchwallet"></img> */}
                  <img src={chart} className="launchchart"></img>
                </div>
              </div>
            </div>





{/* SUMBIT PAGE */}
            <div className="section submitpage">
              <div className="subflex">
              <p className="submitTitle"> SUMBIT YOUR GAME </p>
              <div className="subfleximage">
              <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
              
                </div>
                <div className="subforum subflexform">
                      <Form onSubmit={(e) => e.preventDefault()}>
                              <Form.Group as={Col} controlId="formGridPublisher">
                                <Form.Label>Publisher Name    </Form.Label>
                                <br />
                                <Form.Control size="lg" type="text" type="publisher" placeholder="Publisher Name" style={{ width: '150%', height: '22px' }} />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Game Title    </Form.Label>
                                <br />
                                <Form.Control size="lg" type="text" type="game title" placeholder="Game Title" style={{ width: '150%', height: '22px' }} />
                              </Form.Group>


                            <Form.Group as={Col} controlId="formGridDescription">
                              <Form.Label>Game Description    </Form.Label>
                              <br />
                              <Form.Control as="textarea" rows={3}  size="lg" type="text" placeholder="Game Description" style={{ height: '100px', width: '150%' }}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridImage">
                                <Form.Label>Game Logo URL    </Form.Label>
                                <br />
                                <Form.Control size="lg" type="text" type="game image" placeholder="URL of Game Cover Art" style={{ width: '150%', height: '22px' }} />
                              </Form.Group>

                            <Form.Group as={Col} controlId="Game Price">
                              <Form.Label>Game Price (in USD)    </Form.Label>
                              <br />
                              <Form.Control size="lg" type="text" placeholder="$0.00" style={{ width: '150%' }} />
                            </Form.Group>

                              <Form.Group as={Col} controlId="Publisher Address">
                                <Form.Label>Publisher Address/Webhook    </Form.Label>
                                <br />
                                <Form.Control size="lg" type="text" placeholder="To send game payment" style={{ width: '150%', height: '22px' }}/>
                              </Form.Group>

                            <button className="submitpagebutton" onClick={() => submit()}>
                      SUMBIT
                    </button>
                          </Form>
                </div>
              </div>
              </div>

          </ReactFullpage.Wrapper>

        );
      }}
    />
  );
}

export default App;
