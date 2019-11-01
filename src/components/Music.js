import React, { Component, useState, useEffect } from 'react';
import { Button } from "reactstrap";

class Music extends Component {
  state = {
    play: false
  }
  audio = new Audio(this.props.url)

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div className="Music">
        <Button color="primary" onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</Button>{' '}
      </div>
    )
  }
}

export default Music;
