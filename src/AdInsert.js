import React, { Component } from 'react';
import Upload from './components/Upload';
import Recorder from './components/Recorder';
import SugarService from './services/SugarService';

import './App.css';

const DefaultMessage = 'Find your ad insert status here';

class App extends Component {
  constructor() {
    super();
    this.onPriceChanged = this.onPriceChanged.bind(this);
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onImagesSelected = this.onImagesSelected.bind(this);
    this.onDescriptionRecorded = this.onDescriptionRecorded.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: 'random title',
      description: 'auto-generated',
      descriptionRecordUrl: null,
      images: [],
      price: '1000000',
      category: 5010,
      message: DefaultMessage,
      errorMessage: ''
    }
  }

  onPriceChanged(e) {
    this.setState({
      price: e.target.value
    });
  }

  onTitleChanged(e) {
    this.setState({
      title: e.target.value
    });
  }

  onImagesSelected(selectedImages) {
    let fileList = Array.from(selectedImages);
    const promiseList = [];
    for (var i in fileList) {
      promiseList.push(SugarService.upload('images', fileList[i]));
    }
    return Promise.all(promiseList)
      .then((results) => {
        const images = this.state.images;
        for (var i in results) {
          images.push(results[i].url);
        }
        this.setState({
          images,
          message: `Uploaded ${images.length} images`
        });
      })
      .catch((err) => {
        this.setState({
          message: '',
          errorMessage: err
        });
      })
  }

  async onDescriptionRecorded(record) {
    try {
      const result = await SugarService.upload('records', record.getBlob());
      console.log('onDescriptionRecorded ne', result);
      this.setState({
        descriptionRecordUrl: result.url,
        message: 'Done recording',
      });
    }
    catch (err) {
      console.log('onDescriptionRecorded', err)
      this.setState({
        message: '',
        errorMessage: err
      });
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    try {
      const result = await SugarService.submit({
        title: this.state.title,
        description: this.state.description,
        voice_description: this.state.descriptionRecordUrl,
        price: this.state.price,
        category: this.state.category,
        images: this.state.images,
      });
      this.setState({
        message: 'Done!',
        errorMessage: '',
        descriptionRecordUrl: null,
        images: [],
      });
      console.log('AdInsert result ne', result);
    }
    catch (err) {
      console.log('err AdInsert', err);
      this.setState({
        message: '',
        errorMessage: err
      });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal form-input">
          {this.state.message.length > 0 &&
            (<div className="alert alert-primary" role="alert">
              {this.state.message}
            </div>)
          }
          {this.state.errorMessage.length > 0 &&
            (<div className="alert alert-primary" role="alert">
              {this.state.errorMessage}
            </div>)
          }
          <Upload data={this.state.images} onSelected={this.onImagesSelected} />
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="inputTitle" className="control-label">Title</label>
              </div>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle" placeholder="Title"
                  value={this.state.title} onChange={this.onTitleChanged} />
              </div>
            </div>
          </div>
          <Recorder data={this.state.descriptionRecordUrl} onRecorded={this.onDescriptionRecorded} />
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="inputPrice" className="control-label">Price</label>
            </div>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputPrice" placeholder="Price"
                value={this.state.price} onChange={this.onPriceChanged} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
