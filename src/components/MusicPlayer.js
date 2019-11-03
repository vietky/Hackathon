import React from 'react';
import './css/adlix.css';

class MusicPlayer extends React.Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
    return (
      <div id="player" className="container-fluid bg-main">
        <div className="row flex-nowrap">
          <div id="player__buttons" className="col-4">
            <div className="just-center-middle">
              <img alt="" src="/images/icon-player-backward.svg" height="20" />
              <img alt="" src="/images/icon-player-pause.svg" height="40" />
              <img alt="" src="/images/icon-player-forward.svg" height="20" />
            </div>
          </div>
          <div id="player__content" className="col-8">
            <p id="player__content__title">TOYOTA VIOS 2019 MỚI NHIỀU ƯU ĐÃI GIÁ CỰC SỐC</p>
            <p id="player__content__price" className="text-dred">465.000.000 đ</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer