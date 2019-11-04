import React, { Component } from "react";
import MusicPlayer from './components/MusicPlayer';
import Ad from './components/Ad';
import './components/css/adlix.css';
import './components/css/main.css';

const DefaultTrack = {
  "id": -1,
  "title": "",
  "description": "auto-generated",
  "voice_description": "",
  "price": "",
  "images": [
    "https://storage.googleapis.com/sugar-maroon/images/e1c60920-fe58-11e9-b9da-293c4b0d10c5",
    "https://storage.googleapis.com/sugar-maroon/images/e1b16fb0-fe58-11e9-b9da-293c4b0d10c5"
  ],
  "category": 5010,
  "created_date": new Date(),
  "modified_date": new Date()
}

class AdListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      selectedIndex: -1,
    }
    this.onTrackEnded = this.onTrackEnded.bind(this);
  }

  componentDidMount() {
    fetch('https://dev-racer-252811.appspot.com/api/ads/get-all')
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
      <div className="AdListing">
        {/* <!-- SEARCH BAR --> */}
        <form id="search-bar">
          <div className="form-group">
            <div className="input-group mb-2">
              {/* <!-- SEARCH ICON --> */}
              <div id="search-icon" className="input-group-prepend">
                <div className="input-group-text">
                  <svg width="18px" height="18px" viewBox="0 0 30 30" version="1.1">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="List-view-msite-" transform="translate(-20.000000, -118.000000)" fill="#979797">
                        <path
                          d="M31.4322828,138.019826 C26.684097,138.019826 22.8341133,134.171603 22.8341133,129.426153 C22.8341133,124.679787 26.684097,120.83248 31.4322828,120.83248 C36.1804687,120.83248 40.0309105,124.680245 40.0309105,129.426153 C40.0304524,134.171603 36.1804687,138.019826 31.4322828,138.019826 M49.3677699,145.123005 L40.5532011,136.313515 C42.0031681,134.398256 42.8645657,132.012825 42.8645657,129.425695 C42.8645657,123.115269 37.7463477,118 31.4322828,118 C25.118218,118 20,123.115269 20,129.425695 C20,135.736122 25.118218,140.85139 31.4322828,140.85139 C34.0118177,140.85139 36.3913703,139.9969 38.3040684,138.556773 L47.120928,147.368094 C47.8663374,148.113074 48.9727686,148.213504 49.5931795,147.593832 C50.2141249,146.974236 50.1127211,145.867603 49.3677699,145.123005"
                          id="Search"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              {/* <!-- SEARCH INPUT --> */}
              <input id="search-input" type="text" className="form-control" placeholder="Search" />
            </div>
          </div>
        </form>


        {/* <!-- LIST CATEGORY --> */}
        <div id="category" className="container-fluid">
          <div className="row text-center flex-nowrap">
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-oto.png')` }}></div>
              <span className="category-label">Car</span>
            </div>
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-may.png')` }}></div>
              <span className="category-label">Motobike</span>
            </div>
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-tai.png')` }}></div>
              <span className="category-label">Truck</span>
            </div>
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-dien.png')` }}></div>
              <span className="category-label">Tram</span>
            </div>
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-dien.png')` }}></div>
              <span className="category-label">Bicycle</span>
            </div>
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-la.png')` }}></div>
              <span className="category-label">Other vehicles</span>
            </div>
            <div className="col-sm-3">
              <div className="category-icon" style={{ backgroundImage: `url('./images/icon-xe-phutung.png')` }}></div>
              <span className="category-label">Spare parts</span>
            </div>
          </div>
        </div>

        {/* <!-- PLAYER HERE --> */}
        <div id="player" className="container-fluid bg-main">
          <div className="row flex-nowrap">
            <MusicPlayer track={playingTrack} onTrackEnded={this.onTrackEnded} />
          </div>
        </div>

        {/* <!-- AD LISTING --> */}
        <div id="ad-listing" className="container-fluid">
          {this.state.tracks.map((item, index) => (
            <Ad item={item} playingTrack={playingTrack} key={index} />
          ))}

        </div>


      </div>
    )
  }
}

export default AdListing;