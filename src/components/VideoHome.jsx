import React from 'react'
import { Link } from 'react-router-dom'

import dataVideoHome from '../assets/data/video-home'

function VideoHome() {

    const loadVideos = (dataVideoHome) => {
        let videos = null
        videos = dataVideoHome.map((item) => {
            return (
                <div className="col-3 col-video-mb add-video-translateX product_video-X" key={item.linkVideo}>
                    <div className="product_video">
                        <Link to="./VideoDetail" className="product_video-link">
                            <div className="product_video-img">
                                <img src={item.avatar}
                                    alt="Avatar Video" 
                                    className="product_video-img-main product_video-img-main-X" 
                                />
                                <span className="product_video-img-time">{item.time}</span>
                                <div className="videos-icon-play">
                                    <i className="bx bx-play" />
                                </div>
                                <ul className="videos_list-icon-hover">
                                    <li className="videos_item-icon-hover videos_item-icon-hover-time">
                                        <i className="bx bxs-time bxf-time" />
                                        <div className="list-icon-skiing-time">
                                            <span>Xem sau</span>
                                        </div>   
                                    </li>
                                    <li className="videos_item-icon-hover videos_item-icon-hover-list-ul">
                                        <i className="bx bx-list-ul bxf-list-ul" />
                                        <div className="list-icon-skiing-ul">
                                            <span>Thêm vào danh sách chờ</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_video_content">
                                <div className="product_video-img-user">
                                    <img 
                                        src={item.channelAvatar}
                                        alt="Avatar Channel" 
                                    />
                                </div>
                                <div className="product_video-description">
                                    <div className="product_video-title">
                                        <h4>
                                            {item.title}
                                        </h4>
                                    </div>
                                    <div className="product_video-user-channel-content">
                                        <div className="product_video_user-chanel">
                                            <span className="product_video_user-name">
                                                {item.author}
                                            </span>
                                            <span className="product_video_user-verified">
                                                <i className="bx bxs-check-circle" />
                                            </span>
                                        </div>
                                        <div className="product_video-info">
                                            <span className="product_video-info-view">
                                                {item.view}
                                            </span>
                                            <span className="product_video-info-dot">
                                                <i className="fas fa-circle" />
                                            </span>
                                            <span className="product_video-info-date">
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product_video-option">
                                        <i className="bx bx-dots-vertical-rounded bxf-dots-vertical-rounded-video" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
        return videos;
    }

    return (
        <div className="container-main">
            <div className="row g-0">
                <div className="container-videos">
                    <div className="product_videos-total product_videos-total-X">
                        <div className="render-list-videos row">
                            {loadVideos(dataVideoHome)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoHome
