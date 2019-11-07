import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayMusic from './PlayMusic';
import { Link } from "react-router-dom";

class Ad extends Component {
  constructor(props) {
    super(props);
    this.onPlayClicked = this.onPlayClicked.bind(this);
  }

  onPlayClicked(e) {
    console.log('this ne', this.props.aindex);
    this.props.onPlayClicked(this.props.aindex);
  }
  render() {
    return (
      <div className="Ad ps-relative">
        <Link to={"/adview/" + this.props.item.id} className="flex-nowrap row ad-itemx">
          <div className="ad-itemx__image col-4">
            <img src={this.props.item.images.length > 0 ? this.props.item.images[0] : '/images/no_images.jpeg'} alt="" />
          </div>
          <div className="ad-itemx__detail col-8">
            <p className="ad-itemx__detail__title">
              {this.props.item.title}
            </p>
            <div className="ad-itemx__detail-bottom">
              <div className="ad-itemx__detail__price text-dred fmt-price">
                {Number(this.props.item.price).toLocaleString('en')}
              </div>
              <div className="ad-itemx__detail__tilo">
                <img width="20" src="/images/icon-bag.svg" alt="icon-bag" />
                &nbsp;
                  <span className="just-a-slice"></span>
                &nbsp;
                  <span className="ad-itemx__detail__timestamp">10 minutes ago</span>
                &nbsp;
                  <span className="just-a-slice"></span>
                &nbsp;
                  <span className="ad-itemx__detail__location">Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </Link>
        <div>
        {
          <PlayMusic onPlayClicked={this.onPlayClicked} playing={this.props.item.voice_description && this.props.item.id === this.props.playingTrack.id } />
        }
        </div>
      </div>
    )
  }
}

Ad.propTypes = {
  item: PropTypes.object,
  playingTrack: PropTypes.object,
  onPlayClicked: PropTypes.func,
  aindex: PropTypes.number, // int
}
export default Ad;