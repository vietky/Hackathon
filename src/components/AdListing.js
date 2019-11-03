import React, { Component } from "react";
import './adlix.css';
import './main.css';


class AdListing extends Component {
    state = {
        image: ""
    }

    render() {
        return (
            <div className="AdListing">
                {/* <!-- SEARCH BAR --> */}
                <form id="search-bar">
                    <div class="form-group">
                        <div class="input-group mb-2">
                            {/* <!-- SEARCH ICON --> */}
                            <div id="search-icon" class="input-group-prepend">
                                <div class="input-group-text">
                                    <svg width="18px" height="18px" viewBox="0 0 30 30" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="List-view-msite-" transform="translate(-20.000000, -118.000000)" fill="#979797">
                                                <path
                                                    d="M31.4322828,138.019826 C26.684097,138.019826 22.8341133,134.171603 22.8341133,129.426153 C22.8341133,124.679787 26.684097,120.83248 31.4322828,120.83248 C36.1804687,120.83248 40.0309105,124.680245 40.0309105,129.426153 C40.0304524,134.171603 36.1804687,138.019826 31.4322828,138.019826 M49.3677699,145.123005 L40.5532011,136.313515 C42.0031681,134.398256 42.8645657,132.012825 42.8645657,129.425695 C42.8645657,123.115269 37.7463477,118 31.4322828,118 C25.118218,118 20,123.115269 20,129.425695 C20,135.736122 25.118218,140.85139 31.4322828,140.85139 C34.0118177,140.85139 36.3913703,139.9969 38.3040684,138.556773 L47.120928,147.368094 C47.8663374,148.113074 48.9727686,148.213504 49.5931795,147.593832 C50.2141249,146.974236 50.1127211,145.867603 49.3677699,145.123005"
                                                    id="Search"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            {/* <!-- SEARCH INPUT --> */}
                            <input id="search-input" type="text" class="form-control" id="inlineFormInputGroup" placeholder="Tìm sản phẩm mong muốn..." />
                        </div>
                    </div>
                </form>


                {/* <!-- LIST CATEGORY --> */}
                <div id="category" class="container-fluid">
                    <div class="row text-center flex-nowrap">
                        <div class="col-sm-3">
                            <div class="category-icon" class="oto__icon"></div>
                            <span class="category-label">Ô tô</span>
                        </div>
                        <div class="col-sm-3">
                            <div class="category-icon" class="xe-may__icon"></div>
                            <span class="category-label">Xe máy</span>
                        </div>
                        <div class="col-sm-3">
                            <div class="category-icon" class="xe-tai__icon"></div>
                            <span class="category-label">Xe tải</span>
                        </div>
                        <div class="col-sm-3">
                            <div class="category-icon" class="xe-dien__icon"></div>
                            <span class="category-label">Xe điện</span>
                        </div>
                        <div class="col-sm-3">
                            <div class="category-icon" class="xe-dien__icon"></div>
                            <span class="category-label">Xe đạp</span>
                        </div>
                        <div class="col-sm-3">
                            <div class="category-icon" class="xe-la__icon"></div>
                            <span class="category-label">Phương tiện khác</span>
                        </div>
                        <div class="col-sm-3">
                            <div class="category-icon" class="phu-tung__icon"></div>
                            <span class="category-label">Phụ tùng xe</span>
                        </div>
                    </div>
                </div>

                {/* <!-- PLAYER HERE --> */}
                <div id="player" class="container-fluid bg-main">
                    <div class="row flex-nowrap">
                        <div id="player__buttons" class="col-4">
                            <div class="just-center-middle">
                                <img src="/images/icon-player-backward.svg" height="20" />
                                <img src="/images/icon-player-pause.svg" height="40" />
                                <img src="/images/icon-player-forward.svg" height="20" />
                            </div>
                        </div>
                        <div id="player__content" class="col-8">
                            <p id="player__content__title">TOYOTA VIOS 2019 MỚI NHIỀU ƯU ĐÃI GIÁ CỰC SỐC</p>
                            <p id="player__content__price" class="text-dred">465.000.000 đ</p>
                        </div>
                    </div>
                </div>

                {/* <!-- AD LISTING --> */}
                <div id="ad-listing" class="container-fluid">

                    {/* <!-- AN AD --> */}
                    <div class="ad-itemx flex-nowrap row">
                        <div class="ad-itemx__image col-4">
                            <img src="/images/xe-dap.jpg" alt="" />
                            <svg class="ad-itemx__image-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z" /></svg>
                        </div>
                        <div class="ad-itemx__detail col-8">
                            <p class="ad-itemx__detail__title">
                                TOYOTA VIOS 2019 MỚI NHIỀU ƯU ĐÃI GIÁ CỰC SỐC
                            </p>
                            <div class="ad-itemx__detail-bottom">
                                <div class="ad-itemx__detail__price text-dred">
                                    465.000.000 đ
                                </div>
                                <div class="ad-itemx__detail__tilo">
                                    <img width="20" src="/images/icon-bag.svg" />
                                    &nbsp;
                                    <span class="just-a-slice"></span>
                                    &nbsp;
                                    <span class="ad-itemx__detail__timestamp">1 phút trước</span>
                                    &nbsp;
                                    <span class="just-a-slice"></span>
                                    &nbsp;
                                    <span class="ad-itemx__detail__location">Tp Hồ Chí Minh</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- AN AD --> */}
                    <div class="ad-itemx flex-nowrap row">
                        <div class="ad-itemx__image col-4">
                            <img src="/images/xe-dap.jpg" alt="" />
                            <svg class="ad-itemx__image-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z" /></svg>
                        </div>
                        <div class="ad-itemx__detail col-8">
                            <p class="ad-itemx__detail__title">
                                TOYOTA VIOS 2019 MỚI NHIỀU ƯU ĐÃI GIÁ CỰC SỐC
                            </p>
                            <div class="ad-itemx__detail-bottom">
                                <div class="ad-itemx__detail__price text-dred">
                                    465.000.000 đ
                                </div>
                                <div class="ad-itemx__detail__tilo">
                                    <img width="20" src="/images/icon-bag.svg" />
                                    &nbsp;
                                    <span class="just-a-slice"></span>
                                    &nbsp;
                                    <span class="ad-itemx__detail__timestamp">1 phút trước</span>
                                    &nbsp;
                                    <span class="just-a-slice"></span>
                                    &nbsp;
                                    <span class="ad-itemx__detail__location">Tp Hồ Chí Minh</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- AN AD --> */}
                    <div class="ad-itemx flex-nowrap row">
                        <div class="ad-itemx__image col-4">
                            <img src="/images/xe-dap.jpg" alt="" />
                            <svg class="ad-itemx__image-player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z" /></svg>
                        </div>
                        <div class="ad-itemx__detail col-8">
                            <p class="ad-itemx__detail__title">
                                TOYOTA VIOS 2019 MỚI NHIỀU ƯU ĐÃI GIÁ CỰC SỐC
                            </p>
                            <div class="ad-itemx__detail-bottom">
                                <div class="ad-itemx__detail__price text-dred">
                                    465.000.000 đ
                                </div>
                                <div class="ad-itemx__detail__tilo">
                                    <img width="20" src="/images/icon-bag.svg" />
                                    &nbsp;
                                    <span class="just-a-slice"></span>
                                    &nbsp;
                                    <span class="ad-itemx__detail__timestamp">1 phút trước</span>
                                    &nbsp;
                                    <span class="just-a-slice"></span>
                                    &nbsp;
                                    <span class="ad-itemx__detail__location">Tp Hồ Chí Minh</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default AdListing;