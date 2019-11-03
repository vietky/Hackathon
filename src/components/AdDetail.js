import React, { Component } from "react";
import './css/advue.css';
import './css/main.css';

class AdDetail extends Component {
    render() {
        return (
            <div className="AdDetail">

                {/* AD PHOTOS */}
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={require("./images/xe-dap.jpg")} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={require("./images/xe-dap-1.jpg")} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={require("./images/xe-dap-2.jpg")} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                {/* AD CONTENT */}
                <div id="ad-content">
                    {/* AD HIGHLIGHT */}
                    <div id="ad-highlight">
                        {/* <!-- AD TITLE --> */}
                        <h3 id="ad-title">XE ĐẠP CUỘC 700C CỔ ĐIỂN - AZI BIKE 2019</h3>
                        {/* <!-- AD PRICE --> */}
                        <span id="ad-price" class="text-dred">1.990.000 đ</span>
                        {/* <!-- AD SAVE --> */}
                        <button id="ad-save" class="btn btn-light text-dred" type="button">
                            Lưu tin
                             <img width="20" src={require("./images/heart.png")} alt="like" />
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
                        <div class="card">
                            <div class="row no-gutters">
                                <div class="col-2">
                                    <div class="text-center">
                                        <img id="owner-avatar" src={require("./images/avatar.jpg")} class="card-img" />
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div id="owner-detail" class="card-body">
                                        <h5 id="owner-detail__name">NGUYÊN</h5>
                                        <p id="owner-detail__active" class="card-text">
                                            <span>●</span>
                                            <small>Hoạt động 2 ngày trước</small>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <button id="owner-shop-view" class="btn btn-warn text-dred" type="button">
                                        Xem&nbsp;trang
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- OWNER PROS --> */}
                        <div id="owner-block" class="row text-center">
                            <div class="col-4">
                                Bán chuyên
                                <span><img src={require("./images/icon-bag.png")} height="16" /></span>
                            </div>
                            <div class="col-4">
                                Đánh giá
                                <span>---</span>
                            </div>
                            <div class="col-4">
                                Phản hồi chat
                                <span>91%</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- AD DESCRIPTION --> */}
                    <div id="ad-description">
                        <p itemprop="description" class="col-xs-12 text-justify _1No0Ndy5xkVdszNItBaiuv">
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