import React, { Component } from 'react';
import Upload from './components/Upload';
import Recorder from './components/Recorder';
import SugarService from './services/SugarService';

import './App.css';

const DefaultMessage = 'Find your ad insert status here';

class AdInsert extends Component {
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
      errorMessage: '',
      uploaded: false,
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
      this.state.uploaded = true;

      console.log('onDescriptionRecorded uploaded: ', result);
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
      <div id="ad-insert">
        <form className="form-horizontal">
          {this.state.message.length > 0 &&
            (<div className="alert alert-primary" role="alert">
              {this.state.message}
            </div>)
          }
          {this.state.errorMessage.length > 0 &&
            (<div className="alert alert-error" role="alert">
              {this.state.errorMessage}
            </div>)
          }
          <Upload data={this.state.images} onSelected={this.onImagesSelected} />
          <div className="form-group row">
            <label htmlFor="inputTitle" className="control-label col-sm-3 col-form-label">Title</label>
            <div className="col-sm-9 input-group">
              <input type="text" className="form-control no-border-right no-shadow" id="inputTitle"
                value={this.state.title} onChange={this.onTitleChanged} />
              <div className="input-group-append">
                <button type="button" className="input-group-text no-border-left bg-white no-outline">
                  <img alt="" src="./images/icon-recorder-voice.svg" width="20" />
                </button>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPrice" className="control-label col-sm-3 col-form-label">Price</label>
            <div className="col-sm-9 input-group">
              <input type="text" className="form-control no-border-right no-shadow" id="inputPrice" placeholder="$"
                value={this.state.price} onChange={this.onPriceChanged} />
              <div className="input-group-append">
                <button type="button" className="input-group-text no-border-left bg-white no-outline pr-3">
                  $
                </button>
              </div>
            </div>
          </div>
          <Recorder data={this.state.descriptionRecordUrl} onRecorded={this.onDescriptionRecorded} uploaded={this.state.uploaded} />
          <hr />
          <div className="form-group row">
            <div className="col-6">
              <button className="btn btn-light dp-block mr-auto no-shadow">Clear</button>
            </div>
            <div className="col-6">
              <button type="submit" onClick={this.onSubmit} className="btn btn-info no-shadow no-outline ml-auto dp-block">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AdInsert;
