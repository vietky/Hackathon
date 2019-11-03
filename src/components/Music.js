import React, { Component } from 'react';
import { Button } from "reactstrap";

class Music extends Component {
  state = {
    play: false
  }
  audioList = this.props.urls;
  audioPlayer = null;

  progressValue = 0;
  progressBar = (duration, element) => {

    var increment = duration > 0 ? 10 / duration : 0;
    var percent = Math.min(increment * element.currentTime * 10, 100);
    this.progressValue = percent;
    console.log(duration);
    // console.log(percent);
    // console.log(this.progressValue);
  }

  togglePlay = () => {
    var currentPlayIndex = 0;
    this.audioPlayer = new Audio(this.props.url[currentPlayIndex]);

    // this.audioPlayer.addEventListener('durationchange', (_event) => {
    //   setTimeout(() => {
    //     console.log(this.audioPlayer.duration);
    //     console.log(_event);
    //     var audioDuration = _event.target.duration;
    //     if (audioDuration != Infinity) {
    //       console.log(audioDuration);
    //       this.progressBar(audioDuration, this.audioPlayer);
    //     }
    //   }, 1000);
    // }, false);

    this.audioPlayer.addEventListener('ended', () => {
      currentPlayIndex = currentPlayIndex + 1;
      currentPlayIndex > this.audioList.length ? this.audioPlayer.pause() : this.audioPlayer = new Audio(this.props.url[currentPlayIndex]).play();
    }, false);


    this.setState({ play: !this.state.play }, () => {
      // this.state.play ? this.audioPlayer.play() : this.audioPlayer.pause();
      if (this.state.play) {
        this.audioPlayer.play();
      } else {
        this.audioPlayer.pause();
      }
      // setTimeout(() => {
      //   this.audioPlayer.pause();
      // }, 3000);
    });
  }

  render() {
    return (
      <div className={`Music ` + this.props.styles}>
        <Button color="primary" className="round" onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</Button>{' '}
        {/* <Progress value={this.progressValue} /> */}
      </div>
    )
  }
}

export default Music;
