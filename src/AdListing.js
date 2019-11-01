import React, { Component } from 'react';
import './App.css';
import Music from './components/Music.js';
import Listing from './components/Listing.js';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      "Mua bim bim",
      "Di cho",
      "Do xang"
    ];
  }

  render() {
    return (
      <div className="App">
        <Container>
          <br />
          <Row>
            <Col>
              <h2>Sugar</h2>
            </Col>
          </Row>
          <br /><br />
          <br />
          <Row>
            <Col>
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col>
              <Music url={"http://streaming.tdiradio.com:8000/house.mp3"} />
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col>
              {
                // this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
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
