import React, { Component } from 'react';
import Upload from './components/Upload';
import Recorder from './components/Recorder';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [];
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal form-input">
          <Upload />
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="inputTitle" className="control-label">Title</label>
              </div>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" />
              </div>
            </div>
          </div>
          <Recorder />
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="inputPrice" className="control-label">Price</label>
            </div>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputPrice" placeholder="Price" defaultValue="1000000" />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary center-object">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
