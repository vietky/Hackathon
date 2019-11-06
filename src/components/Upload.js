import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange(event) {
    this.props.onSelected(event.target.files);
  }

  chooseFile() {
    const button = document.getElementById("my-unique-choose-file-btn")
    button.click();
  }

  render() {
    let imageList = [];
    for (var i in this.props.data) {
      imageList.push(
        <li key={'li-img-upload-' + i}>
          <img className="thumbnail-image" alt={'uploaded-images-' + i} src={this.props.data[i]} />
        </li>
      )
    }
    return (
      <div className="form-group">
        <div className="thumbnail-container" onClick={this.chooseFile}>
          <ul className="thumbnail-list">
            {imageList}
          </ul>
        </div>
        <div className="text-right">
          <button id="choose-file-btn" type="button" className="btn btn-dlight no-shadow" onClick={this.chooseFile}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z" /><path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z" /><path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z" /></svg>
            <span>&nbsp;Upload photo</span>
            <input id="my-unique-choose-file-btn" type="file" onChange={this.handleChange} className="btn" multiple/>
          </button>
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  onSelected: PropTypes.func,
}

export default Upload