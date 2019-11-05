import React from 'react';
import PropTypes from 'prop-types';
import Audio from './Audio';
import './css/adlix.css';

function stop(audio) {
  audio.pause();
  audio.currentTime = 0;
}

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.onTrackEnded = this.onTrackEnded.bind(this);
    this.onPauseClicked = this.onPauseClicked.bind(this);
    this.onPlayClicked = this.onPlayClicked.bind(this);
    this.onNextClicked = this.onNextClicked.bind(this);
    this.onPreviousClicked = this.onPreviousClicked.bind(this);
  }

  componentDidMount() {
    // console.log('didmount', this.props.track);
    if (this.props.track.id > -1) {
      if (this.player && this.player.audioEl) {
        this.player.audioEl.play();
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.track.id !== prevProps.track.id) {
      if (!this.props.playing) {
        stop(this.player.audioEl);
      } else {
        if (this.props.track && this.props.track.voice_description) {
          console.log('track', this.props.track.id)
          stop(this.player.audioEl);
          this.player.audioEl.play();
        } else {
          this.props.onTrackEnded();
        }
      }
    }
  }

  onTrackEnded(e) {
    this.props.onTrackEnded(e)
  }

  onPauseClicked(e) {
    e.preventDefault();
    this.props.onPauseClicked(e);
  }

  onPlayClicked(e) {
    e.preventDefault();
    this.props.onPlayClicked(e);
  }


  onNextClicked(e) {
    e.preventDefault();
    this.props.onNextClicked(e);
  }

  onPreviousClicked(e) {
    e.preventDefault();
    this.props.onPreviousClicked(e);
  }

  render() {
    return (
      <div id="player" className="container-fluid bg-main">
        <div className="row flex-nowrap">
          <div id="player__buttons" className="col-4">
            <div className="just-center-middle">
              <a className="clickable" onClick={this.onPreviousClicked}>
                <img alt="" src="/images/icon-player-backward.svg" height="20" />
              </a>
              {
                this.props.playing ?
                  (<a className="clickable" onClick={this.onPauseClicked}>
                    <img alt="" src="/images/icon-player-pause.svg" height="40" />
                  </a>) :
                  (<a className="clickable" onClick={this.onPlayClicked}>
                    <img alt="" src="/images/icon-player-play.svg" height="40" />
                  </a>)
              }
              <a className="clickable" onClick={this.onNextClicked}>
                <img alt="" src="/images/icon-player-forward.svg" height="20" />
              </a>
            </div>
          </div>
          <div id="player__content" className="col-8">
            <p id="player__content__title">{this.props.track.title}</p>
            <p id="player__content__price" className="text-dred">{this.props.track.price}</p>
          </div>
          <Audio src={this.props.track.voice_description} ref={c => (this.player = c)} onEnded={this.onTrackEnded} />
        </div>
      </div>
    );
  }
}

MusicPlayer.propTypes = {
  track: PropTypes.object,
  playing: PropTypes.bool,
  onTrackEnded: PropTypes.func,
  onPauseClicked: PropTypes.func,
  onPlayClicked: PropTypes.func,
  onNextClicked: PropTypes.func,
  onPreviousClicked: PropTypes.func,

}

export default MusicPlayer