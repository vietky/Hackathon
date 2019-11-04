import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Ad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    }
  }

  render() {
    this.item = this.props.item
    return (
      <div className="Ad">
        <Link to={"/adview/" + this.item.id} >
          <div className="ad-itemx flex-nowrap row">
            <div className="ad-itemx__image col-4">
              <img src={this.item.images[0]} alt="" />
              <svg className="ad-itemx__image-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z" /></svg>
            </div>

            <div className="ad-itemx__detail col-8">
              <p className="ad-itemx__detail__title">
                {this.item.title}
              </p>
              <div className="ad-itemx__detail-bottom">
                <div className="ad-itemx__detail__price text-dred">
                  {this.item.price}
                </div>
                <div className="ad-itemx__detail__tilo">
                  <img width="20" src="/images/icon-bag.svg" alt="icon-bag" />
                  &nbsp;
                    <span className="just-a-slice"></span>
                  &nbsp;
                    <span className="ad-itemx__detail__timestamp">1 minute ago</span>
                  &nbsp;
                    <span className="just-a-slice"></span>
                  &nbsp;
                    <span className="ad-itemx__detail__location">HoChiMinh</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Ad;