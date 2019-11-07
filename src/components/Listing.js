import React, { Component } from "react";
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import PlayMusic from './PlayMusic.js';
import './css/listing.css';
import MusicPlayer from './MusicPlayer';

const DefaultTrack = {
  "id": -1,
  "title": "",
  "description": "auto-generated",
  "voice_description": "https://storage.googleapis.com/sugar-maroon/records/e435a990-fe58-11e9-b9da-293c4b0d10c5",
  "price": "",
  "images": [
    "https://storage.googleapis.com/sugar-maroon/images/e1c60920-fe58-11e9-b9da-293c4b0d10c5",
    "https://storage.googleapis.com/sugar-maroon/images/e1b16fb0-fe58-11e9-b9da-293c4b0d10c5"
  ],
  "category": 5010,
  "created_date": new Date(),
  "modified_date": new Date()
}

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      selectedIndex: -1,
    }
    this.onTrackEnded = this.onTrackEnded.bind(this);
  }

  componentDidMount() {
    fetch('https://dev-racer-252811.appspot.com/api/sgar/get-all')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          tracks: data,
          selectedIndex: 0,
        });
      })
      .catch(console.log)
  }

  onTrackEnded() {
    let currentIndex = this.state.selectedIndex;
    if (currentIndex < this.state.tracks.length) {
      currentIndex += 1;
    }
    this.setState({
      selectedIndex: currentIndex,
    });
  }

  render() {
    let playingTrack = DefaultTrack;
    if (this.state.selectedIndex > -1 && this.state.selectedIndex < this.state.tracks.length) {
      playingTrack = this.state.tracks[this.state.selectedIndex]
    }
    return (
      <div className="Listing">

        <MusicPlayer track={playingTrack} onTrackEnded={this.onTrackEnded} />
        <ListGroup>
          {this.state.tracks.map((listitem, index) => (
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