import React, { Component } from 'react';
import Upload from './components/Upload';
import Recorder from './components/Recorder';
import SugarService from './services/SugarService';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onPriceChanged = this.onPriceChanged.bind(this);
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onImagesSelected = this.onImagesSelected.bind(this);
    this.onRecorded = this.onRecorded.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      images: [],
      records: [],
      title: 'random title',
      description: 'auto-generated',
      price: '1000000',
      category: 5010,
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

  onImagesSelected(images) {
    this.setState({
      images,
    });
  }

  onRecorded(record) {
    const records = this.state.records;
    records.push(record);
    this.setState({
      records
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    try {
      const result = await SugarService.submit({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        category: this.state.category,
        "voice_description_url": "https://storage.googleapis.com/sugar-maroon/records/402c8360-fc90-11e9-a051-2ff539329425",
        "images": [
          "https://cdn.chotot.com/PEcANX_34uLvxrUdQ33nXd0TwO3QMMBJpu_FPuvmbqU/preset:view/plain/a64ad0b71464d0715934a91ed1809c73-2634867474724428163.jpg",
          "https://cdn.chotot.com/PEcANX_34uLvxrUdQ33nXd0TwO3QMMBJpu_FPuvmbqU/preset:view/plain/a64ad0b71464d0715934a91ed1809c73-2634867474724428163.jpg"
        ],
      });
      console.log('AdInsert result ne', result);
    }
    catch (e) {
      console.log('err AdInsert', e);
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal form-input">
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
          <Recorder data={this.state.records} onRecorded={this.onRecorded} />
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
            <button type="submit" onClick={this.onSubmit} className="btn btn-primary center-object">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
