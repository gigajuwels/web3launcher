import logo from './logo.svg';
import './App.css';
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
import ReactDOM from "react-dom";
import { Carousel } from 'react-carousel-minimal';


function App() {
/*   images */
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
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
              <p className="hackName firstpagetext">FIGURA</p>
              <p className="hackDescription firstpagetext">DECENTRALIZED GAME STORE</p>
              <p className="hackabout">When Digitex Futures proves some dead cat bounce until some all-time-low, Bitcoin Cash identified a block reward. Zilliqa broadcast a constant mainnet after many algorithm, nor when NFT chose a digital identity of the dapp, ERC721 token standard looked at lots of safe proof of authority. ERC721 token standard could be some hot orphan in many digital signature!</p>
              <button className="firstpagebutton" onClick={() => fullpageApi.moveSectionDown()}>
                EXPLORE NOW
              </button>
              <button className="firstpagebutton2" onClick={() => fullpageApi.moveTo(3)}>
                SUBMIT GAME
              </button>
            </div>


{/* LAUNCH PAGE */}
            <div className="section launchpage">
              <div className ="launchtext">
              <p>This launcher solves the issue of  Digitex Futures proves some dead cat bounce until some all-time-low, Bitcoin Cash identified a block reward. Zilliqa broadcast a constant mainnet after many algorithm, nor when NFT chose a digital identity of the dapp</p>
              <button className="firstpagebutton" onClick={() => fullpageApi.moveSectionDown()}>
                EXPLORE NOW
              </button>
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
                <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPublisher">
                          <Form.Label size="lg">Publisher Name    </Form.Label>
                          <Form.Control size="lg" type="publisher" placeholder="Publisher Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridTitle">
                          <Form.Label size="lg">Game Title    </Form.Label>
                          <Form.Control size="lg" type="game title" placeholder="Game Title" />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3 col" controlId="formGridDescription">
                        <Form.Label size="lg">Game Description    </Form.Label>
                        <Form.Control size="lg" placeholder="Game Description" />
                      </Form.Group>

                      <Form.Group className="mb-3 col" controlId="Game Price">
                        <Form.Label size="lg">Game Price (in USD)    </Form.Label>
                        <Form.Control size="lg" placeholder="$0.00" />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="Publisher Address">
                          <Form.Label size="lg">Publisher Address/Webhook    </Form.Label>
                          <Form.Control size="lg" placeholder="To send game payment"/>
                        </Form.Group>
                      </Row>
                      <button className="submitpagebutton" onClick={() => fullpageApi.moveSectionDown()}>
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
