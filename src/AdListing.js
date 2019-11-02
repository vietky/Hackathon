import React, { Component } from 'react';
import './App.css';
import PlayMusic from './components/PlayMusic.js';
import Listing from './components/Listing.js';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <br />
          <Row>
            <Col>
              <div>
                <img className="banner" src="https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1571887346831.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
          </Row>
          <br />
          <Row>
            <Col>
              {
                <Listing />
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
