import React, { Component } from "react";
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import PlayMusic from './PlayMusic.js';
import './css/listing.css';
import MusicPlayer from './MusicPlayer';

class Listing extends Component {
  state = {
    listitems: []
  }

  componentDidMount() {
    fetch('https://dev-racer-252811.appspot.com/api/ads/get-all')
      .then(res => res.json())
      .then((data) => {
        this.setState({ listitems: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="Listing">
        <MusicPlayer />
        <br />
        <ListGroup>
          {this.state.listitems.map((listitem, index) => (
            <ListGroupItem className="listing__group" key={index}>
              <Media>
                <div className="listing__image">
                  <Media left href="#">
                    {listitem.images[0] &&
                      <img className="image" alt="abc" src={listitem.images[0]} />
                    }
                    <PlayMusic styles={"play__button"} url={listitem.voice_description} />
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