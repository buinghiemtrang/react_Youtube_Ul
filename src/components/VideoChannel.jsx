import React from 'react'

import logoMasew from '../assets/images/masew.jpg'

import { Link } from 'react-router-dom'


function VideoChannel() {
    return (
        <React.Fragment>
            <div className="video__channel">
                <ul className="video__channel-main">
                    <li className="video__channel-item">
                        <img src={logoMasew} alt="Channel Avatar" className="video__channel-img" />
                    </li>
                    <li className="video__channel-item">
                        <div className="video__channel-info">
                            <p>Masew
                                <i className="bx bxs-check-circle bxf-check-circle"></i>
                            </p>
                        </div>
                        <div className="video__channel-subscribe">
                            <p>2.25 Tr người đăng ký</p>
                        </div>
                    </li>
                </ul>
                <div className="video__channel-btn">
                    <button className="video_btn-subscribe">
                        <span className="video_btn-content">Đăng ký</span>
                    </button>
                    <i className="bx bx-bell bxf-bell"></i>
                </div>
            </div>
            <div className="video__channel-desc">
                <div className="video__channel-desc--main">
                    <p>Cưới Thôi - Masew x Masiu x B Ray x TAP ( Lyrics Audio )</p>
                </div>
                <div className="video__channel-desc-sub">
                    <p>Audio NCT: 
                        <Link to="https://www.nhaccuatui.com/bai-hat/cuoi-thoi-masew-ft-masiu-ft-b-ray-ft-tap-viet-nam.SQTZSysfmPRJ.html" style={{marginLeft: '3px'}}>
                            https://www.nhaccuatui.com/bai-hat/cu...
                        </Link>
                    </p>
                    <span className="video-click-more">Hiển thị thêm</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideoChannel
