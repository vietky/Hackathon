import React, { Component } from "react";
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import Music from './Music.js';

class Listing extends Component {
  state = {
    listitems: [
      {
        image: "iphone11new.jpg",
        title: "Iphone 11",
        decription: "Tôi cần bán iphone 11 fullbox",
        url: "http://streaming.tdiradio.com:8000/house.mp3"
      },
      {
        image: "iphoneXnew.png",
        title: "Iphone X",
        decription: "Tôi cần bán iphone X fullbox",
        url: "http://streaming.tdiradio.com:8000/house.mp3"
      }
    ]
  };

  render() {
    return (
      <div className="Listing">
        <ListGroup>
          {this.state.listitems.map((listitem, index) => (
            <ListGroupItem key={index}>
              <Media>
                <Media left href="#">
                  <img alt="abc" src={require("./images/" + listitem.image)} />
                </Media>
                <Media body>
                  <Media heading>
                    {listitem.title}
                  </Media>
                  {listitem.decription}
                  <br />
                  <Music url={listitem.url} />
                </Media>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default Listing;