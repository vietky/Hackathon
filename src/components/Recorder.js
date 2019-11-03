import ReactAudioPlayer from './Audio';
import PropTypes from 'prop-types';

const React = require('react');
const RecordRTC = require('recordrtc');
const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var recorder;

async function checkMicrophone(cb) {
  let canRecord = true;
  if (typeof navigator.mediaDevices === 'undefined' || !navigator.mediaDevices.getUserMedia) {
    canRecord = false;
    // alert('This browser does not supports WebRTC getUserMedia API.');
    if (!!navigator.getUserMedia) {
      // alert('This browser seems supporting deprecated getUserMedia API.');
      canRecord = false;
    }
  }
  if (!canRecord) {
    throw new Error('The browser does not support recording audio');
  }
  const mic = await navigator.mediaDevices.getUserMedia({
    audio: isEdge ? true : {
      echoCancellation: false
    }
  });
  return cb(mic);
}

function record(microphone) {
  var options = {
    type: 'audio',
    numberOfAudioChannels: isEdge ? 1 : 2,
    checkForInactiveTracks: true,
    bufferSize: 16384
  };
  if (isSafari || isEdge) {
    options.recorderType = StereoAudioRecorder;
  }
  if (navigator.platform && navigator.platform.toString().toLowerCase().indexOf('win') === -1) {
    options.sampleRate = 48000; // or 44100 or remove this line for default
  }
  if (isSafari) {
    options.sampleRate = 44100;
    options.bufferSize = 4096;
    options.numberOfAudioChannels = 2;
  }

  if (recorder) {
    recorder.destroy();
    recorder = null;
  }
  recorder = RecordRTC(microphone, options);
  recorder.startRecording();
}

class Recorder extends React.Component {
  constructor(props) {
    super(props)

    this.propTypes = {
      onRecorded: PropTypes.func,
    }

    this.player = React.createRef();
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.record = this.record.bind(this);
    this.songEnded = this.songEnded.bind(this);

    this.state = ({
      audioMuted: true,
      recording: false,
      playing: false,
      errorMessage: '',
    });
  }

  async record(e) {
    e.preventDefault();

    try {
      await checkMicrophone((microphone) => {
        this.setState({
          recording: true,
          audioSrc: null,
          playing: false,
        })
        record(microphone);
      })
    }
    catch (e) {
      this.setState({
        errorMessage: e,
      })
    }
  }

  async stop(e) {
    e.preventDefault();
    const self = this;

    recorder.stopRecording(() => {
      self.props.onRecorded(recorder);
      self.setState({
        audioSrc: URL.createObjectURL(recorder.getBlob()),
        recording: false,
        playing: false,
      });
    });
  }

  async play(e) {
    e.preventDefault();
    // console.log('play ne', this.props.audioSrc);
    this.setState({
      playing: true,
    });
    this.player.audioEl.play();
  }

  async songEnded(e) {
    // console.log('stop ne');
    this.setState({
      playing: false,
    });
  }

  render() {
    return (
      <div className="form-group" >
        <div className="row">
          <div className="col-sm-2">
            Description
          </div>
          <div className="col-sm-10">
            <button onClick={this.record}>Record</button>
            <button onClick={this.stop} disabled={!this.state.recording}>Stop</button>
            <button onClick={this.play} disabled={this.state.recording}>Play</button>
            <ReactAudioPlayer src={this.props.audioSrc} ref={c => (this.player = c)}
              onEnded={this.songEnded}
              muted={this.state.recording}
            />
          </div>
        </div>
      </div >
    );
  }
}
export default Recorder