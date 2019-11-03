import React from 'react';
import PropTypes from 'prop-types';

function readFile(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      return resolve({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    // console.log('file', (event.target.files[i]));
    reader.readAsDataURL(file);
  });
}

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.propTypes = {
      onSelected: PropTypes.func,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange(event) {
    let result = [];
    // var i = 0;
    var fileList = Array.from(event.target.files);
    for (var i in fileList) {
      let image = await readFile(fileList[i]);
      result.push(image);
    }
    this.props.onSelected(result);
  }

  render() {
    let imageList = [];
    for (var i in this.props.data) {
      imageList.push(
        <li key={'li-img-upload-' + i}>
          <img className="thumbnail-image" alt={'uploaded-images-' + i} src={this.props.data[i].imagePreviewUrl} />
        </li>
      )
    }
    return (
      <div className="form-group" >
        <div className="thumbnail-container">
          <ul className="thumbnail-list">
            {imageList}
          </ul>
        </div>
        <input className="" type="file" onChange={this.handleChange} multiple />
      </div>
    );
  }
}

export default Upload