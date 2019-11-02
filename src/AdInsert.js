import React, { Component } from 'react';
import Upload from './components/Upload';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      "Mua bim bim",
      "Di cho",
      "Do xang"
    ];
  }

  render() {
    return (
      <div className="container">
        <form className="formInput">
          <Upload />
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input type="text" className="form-control" id="titleInput" placeholder="Title" />
          </div>
          <div className="form-group">
            <label htmlFor="imageUploadInput">Upload Image</label>
            <input type="file" id="imageUploadInput" />
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
