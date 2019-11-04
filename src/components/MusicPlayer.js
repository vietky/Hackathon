import React from 'react';
import PropTypes from 'prop-types';
import Audio from './Audio';
import './css/adlix.css';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.propTypes = {
      track: PropTypes.object,
      onTrackEnded: PropTypes.func,
    }
    this.onTrackEnded = this.onTrackEnded.bind(this);
  }

  componentDidMount() {
    // console.log('didmount', this.props.track);
    if (this.props.track.id > -1) {
      this.player.audioEl.play()
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.track.id !== prevProps.track.id) {
      this.player.audioEl.play();
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

export default MusicPlayer