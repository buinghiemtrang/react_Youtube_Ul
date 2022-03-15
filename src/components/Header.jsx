import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import keyboard from '../assets/images/keyboard.gif'
import avatar from '../assets/images/avt.jpg'

function Header() {

    const [userMenu, setUserMenu] = useState(false)

    const showUserMenu = () => {
        return setUserMenu(!userMenu)
    }

    return (
        <div className="header">
            <ul className="header_list-left">
                <li className="list_left-item">
                    <i className="header_list-icon ti-menu" />
                </li>
                <li className="list_left-item">
                    <Link to="/">
                        <img src={logo} alt="Youtube VN" className="header_logo" />
                    </Link>
                </li>
            </ul>
            <form>
                <ul className="header_list-center hide-on-m">
                    <li className="list_center-item">
                        <input type="text" className="input-search" placeholder="Tìm kiếm" />
                    </li>
                    <li className="list_center-item list_center-item-keyboard">
                        <Link to="/SearchVideo">
                            <button className="btn-search">
                                <i className="btn_search-icon ti-search" />
                            </button>
                        </Link>
                        <div className="btn-keyboard">
                            <img src={keyboard} alt="keyboard" className="icon-keyboard" />
                        </div>
                    </li>
                    <li className="list_center-item">
                        <div className="header_microphone item-mic">
                                <i className="bx bxs-microphone"/>
                        </div>
                    </li>
                </ul>
            </form>
            <ul className="header_list-right">
                <li className="list_right-item item-videos">
                    <i className="icon-videos bx bxs-video-plus" />
                </li>
                <li className="list_right-item item-grid">
                    <i className="bx bxs-grid icon-grid" />
                </li>
                <li className="list_right-item item-bell">
                    <i className="bx bxs-bell" />
                </li>
                <li className="list_right-item item-user">
                    <img src={avatar} alt="User-login" className="user-avatar" onClick={showUserMenu} />
                    <div className={userMenu ? "user_down" : "hidden"}>
                        <ul className="user_down-header">
                            <li className="user_down-item-header">
                            <img src={avatar} alt="Channel Avatar" className="user_down-img" />
                            <div className="user_down-profile">
                                <p className="user_profile-title">Nghiêm Trang</p>
                                <span className="user_profile-description">Quản lý Tài khoản Google của ...</span>
                            </div>
                            </li>
                        </ul>
                        <ul className="user_down-content-first">
                            <li className="user_down-content-item">
                                <i className="bx bxs-user-rectangle bxf-user-rectangle" />                          
                                <p className="user_icon-description">Kênh của bạn</p>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bxs-dollar-circle" />                     
                                <p className="user_icon-description">Giao dịch và mua gói hội viên</p>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bxs-user-account" />
                                <p className="user_icon-description">Chuyển đổi tài khoản</p>
                                <div className="sub-arrow-right">
                                    <i className="bx bx-chevron-right bxf-chevron-right" />
                                </div>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bx-log-in" />
                                <p className="user_icon-description">Đăng xuất</p>
                            </li>
                        </ul>
                        <ul className="user_down-content-second">
                            <li className="user_down-content-item">
                                <i className="bx bxs-adjust" />                          
                                <p className="user_icon-description">Giao diện: Giao diện của thiế...</p>
                                <div className="sub-arrow-right">
                                    <i className="bx bx-chevron-right bxf-chevron-right-1" />
                                </div>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bx-font-family" />                     
                                <p className="user_icon-description">Ngôn ngữ: Tiếng Việt</p>
                                <div className="sub-arrow-right">
                                    <i className="bx bx-chevron-right bxf-chevron-right-2" />
                                </div>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bx-world" />
                                <p className="user_icon-description">Địa điểm: Việt Nam</p>
                                <div className="sub-arrow-right">
                                    <i className="bx bx-chevron-right bxf-chevron-right-3" />
                                </div>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bxs-cog user-btn-fix" />
                                <p className="user_icon-description">Cài đặt</p>                             
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bx-shield-quarter" />
                                <p className="user_icon-description">Dữ liệu của bạn trong Youtube</p>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bxs-help-circle user-btn-fix" />
                                <p className="user_icon-description">Trợ giúp</p>
                            </li>
                            <li className="user_down-content-item">
                                <i className="bx bxs-keyboard user-btn-fix" />
                                <p className="user_icon-description">Phím tắt</p>
                            </li>
                        </ul>
                        <ul className="user_down-content-third">
                            <li className="user_down-content-item-third">
                                <p className="user_third-description">Chế độ hạn chế: Đã tắt</p>
                                <div className="sub-arrow-right">
                                    <i className="bx bx-chevron-right bxf-chevron-right-4" />
                                </div>                              
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header
