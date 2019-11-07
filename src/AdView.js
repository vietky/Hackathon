import React, { Component } from 'react';
import config from './config.js';
import AudioPlayer from "react-h5-audio-player";
import './components/css/advue.css';
import './components/css/main.css';

class AdView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: {},
      images: [],
    }
  }

  componentDidMount() {
    fetch(`${config.backend_base_url}/api/sgar/` + window.location.pathname.split("adview/")[1])
      .then(res => res.json())
      .then((data) => {
        this.setState({
          ad: data,
          images: data.images,
        });
      })
      .catch(console.log)
  }

  render() {
    console.log("lang: ", config.lang)
    if (this.state.ad !== {}) {
      return (
        <div className="App">
          {/* AD PHOTOS */}
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {this.state.images.map((img, index) => (
                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index} className={index}></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {this.state.images.map((img, index) => (
                <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                  <img className="d-block w-100" src={img} alt="Second slide" />
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          {/* AD CONTENT */}
          <div id="ad-content">
            {/* AD HIGHLIGHT */}
            <div id="ad-highlight">
              {/* <!-- AD TITLE --> */}
              <h3 id="ad-title">{this.state.ad.title}</h3>
              {/* <!-- AD PRICE --> */}
              {
                this.state.ad.price ?
                  <span id="ad-price" className="text-dred fmt-price">{Number(this.state.ad.price).toLocaleString('en')}</span>
                  :
                  ''
              }
              {/* <!-- AD SAVE --> */}
              <button id="ad-save" className="btn btn-light text-dred" type="button">
                Save&nbsp;
                <img width="20" src="/images/heart.png" alt="like" />
              </button>
              {/* <!-- AD TIMESTAMP --> */}
              <p>
                <small id="ad-timestamp">4 days ago</small>
              </p>

              {/* <!-- AD PLAYER HERE --> */}
              <div>
                <AudioPlayer
                  autoPlay
                  src={this.state.ad.voice_description}
                  onPlay={e => console.log("onPlay")}
                />
              </div>

            </div>

            {/* <!-- ONWER INFO --> */}
            <div id="owner-info">
              {/* <!-- OWNER BASIC --> */}
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-2">
                    <div className="text-center">
                      <img alt="" id="owner-avatar" src="/images/avatar.jpg" className="card-img" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div id="owner-detail" className="card-body">
                      <h5 id="owner-detail__name">Sugar</h5>
                      <p id="owner-detail__active" className="card-text">
                        <span>●</span>
                        <small> Active 2 days ago</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <button id="owner-shop-view" className="btn btn-warn text-dred" type="button">
                      View&nbsp;page
                                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- OWNER PROS --> */}
              <div id="owner-block" className="row text-center">
                <div className="col-4">
                  Shop<br />
                  <span><img alt="" src="/images/icon-bag.png" height="16" /></span>
                </div>
                <div className="col-4">
                  Evaluate<br />
                  <span>---</span>
                </div>
                <div className="col-4">
                  Chat feedback<br />
                  <span>91%</span>
                </div>
              </div>
            </div>

            {/* <!-- AD DESCRIPTION --> */}
            <div id="ad-description">
              <p itemProp="description" className="col-xs-12 text-justify _1No0Ndy5xkVdszNItBaiuv">
                {this.state.ad.description}
              </p>
              <div id="ad-tel">
                <a href="tel:0909914999" >
                  Contact now: 090991***
                </a>
              </div>
            </div>

          </div>

        </div>
      );
    }
  }
}

export default AdView;
