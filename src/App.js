import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import Glider from 'react-glider';
import './glider-js/glider.min.css';


function App() {
  return (
    <div className="App">
        <div>
        <Glider
          draggable
          hasArrows
          hasDots
          slidesToShow={1}
          slidesToScroll={1}
        >
          
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        
        </Glider>
    </div>
    </div>
  );
}

export default App;
