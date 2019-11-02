const React = require('react');

class Recorder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange(event) {

  }

  async record(e) {
    e.preventDefault();
  }

  async stop(e) {
    e.preventDefault();
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
            <button onClick={this.stop}>Stop</button>
          </div>
          <div className="row">
            <audio></audio>
          </div>
        </div>
      </div>
    );
  }
}
export default Recorder