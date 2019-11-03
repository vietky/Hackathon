import React, { Component } from 'react';
import './App.css';
import AdDetail from './components/AdDetail.js';
import Listing from './components/Listing.js';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdDetail />
      </div>
    );
  }
}

export default App;
