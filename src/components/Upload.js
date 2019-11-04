import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.propTypes = {
      onSelected: PropTypes.func,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange(event) {
    this.props.onSelected(event.target.files);
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
      <div className="form-group" >
        <div className="thumbnail-container">
          <ul className="thumbnail-list">
            {imageList}
          </ul>
        </div>
        <input className="" type="file" onChange={this.handleChange} multiple accept="image/png" />
      </div>
    );
  }
}

export default Upload