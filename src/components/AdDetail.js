import React, { Component } from "react";
import './css/advue.css';
import './css/main.css';

class AdDetail extends Component {
    render() {
        return (
            <div className="AdDetail">

                {/* AD PHOTOS */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/images/xe-dap.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/xe-dap-1.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/xe-dap-2.jpg" alt="Third slide" />
                        </div>
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
                        <h3 id="ad-title">XE ĐẠP CUỘC 700C CỔ ĐIỂN - AZI BIKE 2019</h3>
                        {/* <!-- AD PRICE --> */}
                        <span id="ad-price" className="text-dred">1.990.000 đ</span>
                        {/* <!-- AD SAVE --> */}
                        <button id="ad-save" className="btn btn-light text-dred" type="button">
                            Lưu tin
                             <img width="20" src="/images/heart.png" alt="like" />
                        </button>
                        {/* <!-- AD TIMESTAMP --> */}
                        <p>
                            <small id="ad-timestamp">4 ngày trước</small>
                        </p>

                        {/* <!-- AD PLAYER HERE --> */}
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
                                        <h5 id="owner-detail__name">NGUYÊN</h5>
                                        <p id="owner-detail__active" className="card-text">
                                            <span>●</span>
                                            <small>Hoạt động 2 ngày trước</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button id="owner-shop-view" className="btn btn-warn text-dred" type="button">
                                        Xem&nbsp;trang
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- OWNER PROS --> */}
                        <div id="owner-block" className="row text-center">
                            <div className="col-4">
                                Bán chuyên
                                <span><img alt="" src="/images/icon-bag.png" height="16" /></span>
                            </div>
                            <div className="col-4">
                                Đánh giá
                                <span>---</span>
                            </div>
                            <div className="col-4">
                                Phản hồi chat
                                <span>91%</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- AD DESCRIPTION --> */}
                    <div id="ad-description">
                        <p itemProp="description" className="col-xs-12 text-justify _1No0Ndy5xkVdszNItBaiuv">
                            jkuhbkdac
                        </p>
                        <div id="ad-tel">
                            <a href="tel:0909914999" >
                                Liên hệ ngay: 090991***
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default AdDetail;