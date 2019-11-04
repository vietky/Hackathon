import React from 'react';
import PropTypes from 'prop-types';
import Audio from './Audio';
import './css/adlix.css';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.onTrackEnded = this.onTrackEnded.bind(this);
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
      if (this.props.track && this.props.track.voice_description) {
        this.player.audioEl.play();
      } else {
        this.props.onTrackEnded();
      }
    }
  }

  onTrackEnded(e) {
    this.props.onTrackEnded(e)
  }

  render() {
    return (
      <div id="player" className="container-fluid bg-main">
        <div className="row flex-nowrap">
          <div id="player__buttons" className="col-4">
            <div className="just-center-middle">
              <img alt="" src="/images/icon-player-backward.svg" height="20" />
              <img alt="" src="/images/icon-player-pause.svg" height="40" />
              <img alt="" src="/images/icon-player-forward.svg" height="20" />
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
  onTrackEnded: PropTypes.func,
}

export default MusicPlayer