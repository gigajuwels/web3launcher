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

function App() {
  return (
      <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>

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

            <div className="section launchpage">
              <div className ="launchtext">
              <p>This launcher solves the issue of  Digitex Futures proves some dead cat bounce until some all-time-low, Bitcoin Cash identified a block reward. Zilliqa broadcast a constant mainnet after many algorithm, nor when NFT chose a digital identity of the dapp</p>
              <button className="firstpagebutton" onClick={() => fullpageApi.moveSectionDown()}>
                EXPLORE NOW
              </button>

              
            </div>
            </div>

            <div className="section submitpage">
              <div className="subflex">
              <p className="hackName firstpagetext">Submit Your Game</p>
              <div>
               {/*  game examples on store */}
                </div>
                <div className="subforum">
                <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPublisher">
                          <Form.Label>Publisher Name</Form.Label>
                          <Form.Control type="publisher" placeholder="Publisher Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control />
                        </Form.Group>

{/*                         <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Select>
                        </Form.Group> */}

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control />
                        </Form.Group>
                      </Row>

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
