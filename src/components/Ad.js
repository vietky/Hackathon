import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayMusic from './PlayMusic';
import { Link } from "react-router-dom";

class Ad extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
          this.props.item.voice_description && this.props.item.id === this.props.playingTrack.id ?
            (
              <PlayMusic playList={true} url={this.props.item.voice_description}/>
              // <svg className="ad-itemx__detail-player active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zM375.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"></path></svg>
            ) :
            (
              <PlayMusic playList={false} url={this.props.item.voice_description}/>
              // <svg className="ad-itemx__detail-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"></path></svg>
            )
        }
        </div>
      </div>
    )
  }
}

Ad.propTypes = {
  item: PropTypes.object,
  playingTrack: PropTypes.object,
}
export default Ad;