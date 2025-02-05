import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayMusic extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay = (e) => {
    e.preventDefault();
    this.props.onPlayClicked(e);
  }

  render() {
    if (this.props.playing) {
      return (
        // show pause icon
        <div onClick={this.togglePlay}>
          <svg className="ad-itemx__detail-player active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zM375.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"></path></svg>
        </div>
      )
    } else {
      // show play icon
      return (
        <div onClick={this.togglePlay}>
          <svg className="ad-itemx__detail-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"></path></svg>
        </div>
      )
    }
  }
}

PlayMusic.propTypes = {
  playing: PropTypes.bool,
  onPlayClicked: PropTypes.func,
}

export default PlayMusic;