import React from 'react'

import { Link } from 'react-router-dom'

import logoF8 from '../assets/images/f8.jpg'
import logoMixi from '../assets/images/mixigaming.jpg'
import logoMasew from '../assets/images/masew.jpg'

function SliderBar() {
    return (
        <div className="slider_bar bar-active">
            <div className="slider_bar-content">
                <div className="slider_bar-list-first">
                    <ul className="slider_bar-list">
                        <Link to="/">
                            <li className="slider_bar-item active">
                                <i className="bx bxs-home bxf-home" />
                                <p className="slider_bar-description">Trang chủ</p>
                            </li>
                        </Link>
                        <li className="slider_bar-item">
                            <i className="bx bxs-compass bxf-compass" />
                            <p className="slider_bar-description">Khám phá</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxl-youtube bxf-youtube " />
                            <p className="slider_bar-description">Kênh đăng kí</p>
                        </li>
                    </ul>
                </div>
                <div className="slider_bar-list-second">
                    <ul className="slider_bar-list">
                        <li className="slider_bar-item">
                            <i className="bx  bxs-videos" />
                            <p className="slider_bar-description">Thư viện</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bx-history" />
                            <p className="slider_bar-description">Video đã xem</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bx-caret-right-square" />
                            <p className="slider_bar-description">Video của bạn</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxs-time-five" />
                            <p className="slider_bar-description">Xem sau</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxs-like" />
                            <p className="slider_bar-description">Video đã thích</p>
                        </li>
                    </ul>
                </div>
                <div className="slider_bar-list-third">
                    <h4 className="slider_bar-list-title">Kênh đăng ký</h4>
                    <ul className="slider_bar-list slider_bar-list-pd">
                        <li className="slider_bar-item">
                            <img src={logoF8} alt="channel-avatar" className="slider_channel-avt"/>
                            <p className="slider_bar-description">F8 Official</p>
                        </li>
                        <li className="slider_bar-item">
                            <div className="slider_bar-live">
                                <i className="bx bx-station" />
                            </div>
                            <img src={logoMixi} alt="channel-avatar" className="slider_channel-avt"/>
                            <p className="slider_bar-description">MixiGaming</p>
                        </li>
                        <li className="slider_bar-item">
                            <div className="slider_bar-live">
                                <i className="bx bx-station" />
                            </div>
                            <img src={logoMasew} alt="channel-avatar" className="slider_channel-avt"/>
                            <p className="slider_bar-description">Masew</p>
                        </li>
                        <li id="item-js" className="slider_bar-item">
                            <i className="bx bx-chevron-down" />
                            <p className="slider_bar-description btn_click-htt">Hiển thị thêm</p>
                        </li>
                    </ul>
                </div>
                <div className="slider_bar-list-fourth">
                    <h4 style={{maxWidth: '180px'}} className="slider_bar-list-title">Dịch vụ khác của youtube</h4>
                    <ul className="slider_bar-list slider_bar-list-pd">
                        <li className="slider_bar-item">
                            <i className="bx  bx-code-alt" />
                            <p className="slider_bar-description">Lập trình</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bx-station bxf-station bxf-ml-station" />
                            <p className="slider_bar-description">Sự kiện trực tiếp</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxs-medal" />
                            <p className="slider_bar-description">Thể thao</p>
                        </li>
                    </ul>
                </div>
                <div className="slider_bar-list-fifth">
                    <ul className="slider_bar-list">
                        <li className="slider_bar-item">
                            <i className="bx  bxs-cog" />
                            <p className="slider_bar-description">Cài đặt</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxs-flag" />
                            <p className="slider_bar-description">Lịch sử báo cáo</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxs-help-circle" />
                            <p className="slider_bar-description">Trợ giúp</p>
                        </li>
                        <li className="slider_bar-item">
                            <i className="bx bxs-message-error" />
                            <p className="slider_bar-description">Gửi phản hồi</p>
                        </li>
                    </ul>
                </div>
                <div className="slider_bar-list-sixth">
                    <div className="slider_bar-item-info">
                        <p>Giới thiệu</p>
                        <p>Báo chí</p>
                        <p>Bản quyền</p>
                        <p>Liên hệ với chúng tôi</p>
                        <p>Người sáng tạo</p>
                        <p>Quảng cáo</p>
                        <p>Nhà phát triển</p>
                    </div>
                    <div style={{marginTop: '12px'}} className="spacee" />
                    <div className="slider_bar-item-info">
                        <p>Điều khoản</p>
                        <p>Quyền riêng tư</p>
                        <p>Chính sách và an toàn</p>
                        <p>Cách Youtube hoạt động</p>
                        <p>Thử các tính năng mới</p>
                    </div>
                    <span className="info-bar-copyright">
                        <i className="bx bx-copyright bxf-copyright" />
                        <p>2021 - Bùi Nghiêm Trang</p>
                    </span>
                </div>
            </div>
      </div>
    )
}

export default SliderBar
