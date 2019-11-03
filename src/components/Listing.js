import React, { Component } from "react";
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import PlayMusic from './PlayMusic.js';
import PlayList from './PlayList.js';
import './listing.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from "reactstrap";




class Listing extends Component {
  state = {
    listitems: []
  }

  componentDidMount() {
    fetch('https://dev-racer-252811.appspot.com/ads/get-all')
      .then(res => res.json())
      .then((data) => {
        this.setState({ listitems: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="Listing">
        <div className="play__list">
          <Row>
            <Button color="link">Previ</Button>
            <PlayList url={"http://streaming.tdiradio.com:8000/house.mp3"} />
            <Button color="link">Next</Button>
          </Row>
        </div>
        <br />
        <ListGroup>
          {this.state.listitems.map((listitem, index) => (
            <ListGroupItem className="listing__group" key={index}>
              <Media>
                <div className="listing__image">
                  <Media left href="#">
                    {listitem.images[0] != undefined &&
                      <img className="image" alt="abc" src={listitem.images[0]} />
                    }
                    <PlayMusic styles={"play__button"} url={listitem.voice_description_url} />
                  </Media>
                </div>
                <div className="listing__body">
                  <Media body>
                    <Media heading>
                      {listitem.title}
                    </Media>
                    {listitem.description}
                    <br /><br />
                    <h5 color="red">2.990.000 đ</h5>
                  </Media>
                </div>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default Listing;