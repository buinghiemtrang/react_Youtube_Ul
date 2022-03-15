import React from 'react'

import { Link } from 'react-router-dom'

import dataVideoHome from '../assets/data/video-home'

function ListVideoMore() {

    const loadVidesMore = (dataVideoHome) => {
        let videoMore = null

        videoMore = dataVideoHome.map((item, index) => {
            return (
                <Link to="/" key={index}>
                    <div className="video__more-link">
                        <div className="video__more-thumb">
                            <img 
                                src={item.avatar} 
                                alt="Avatar Video" 
                                className="video__more-thumb--img" 
                            />
                            <span className="video__more-time">
                                {item.time}
                            </span>
                            <div className="video__more-iconPlay">
                                <i className="bx bx-play"></i>
                            </div>
                            <ul className="video__more-listHover">
                                <li className="video__more-listHover--item hover_time">
                                    <i className="bx bxs-time bxf-times"></i>         
                                    <div className="skiing__time">
                                        <span>Xem sau</span>
                                    </div> 
                                </li>
                                <li className="video__more-listHover--item hover_list">
                                    <i className="bx bx-list-ul bxf-list-uls"></i>
                                    <div className="skiing__ul">
                                        <span>Thêm vào danh sách chờ</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="video__more-info">
                            <div className="video__more-info--content">
                                <div className="info__content-title">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="info__content-channel">
                                    <span className="info__content-channel--name">
                                        {item.author}
                                    </span>
                                    <div className="info__content-channel--icon">
                                        <i className="bx bxs-check-circle"></i>
                                    </div>
                                </div>
                                <div className="info__content-view-date">
                                    <span className="info__content-view">
                                        {item.view}
                                    </span>
                                    <span className="info__content-icon">
                                        <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="info__content-date">
                                        {item.date}
                                    </span>
                                </div>
                                <div className="info__content-option">
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
        return videoMore;
    }
    return (
        <React.Fragment>
            {loadVidesMore(dataVideoHome)}
            {/* <Link to="/" className="video__more-link">
                <div className="video__more-thumb">
                    <img 
                        src="https://avatar-ex-swe.nixcdn.com/song/share/2019/05/17/4/7/c/1/1558106536774.jpg"
                        alt="Avatar Video" 
                        className="video__more-thumb--img" 
                    />
                    <span className="video__more-time">
                    04:05
                    </span>
                    <div className="video__more-iconPlay">
                        <i className="bx bx-play"></i>
                    </div>
                    <ul className="video__more-listHover">
                        <li className="video__more-listHover--item hover_time">
                            <i className="bx bxs-time bxf-times"></i>         
                            <div className="skiing__time">
                                <span>Xem sau</span>
                            </div> 
                        </li>
                        <li className="video__more-listHover--item hover_list">
                            <i className="bx bx-list-ul bxf-list-uls"></i>
                            <div className="skiing__ul">
                                <span>Thêm vào danh sách chờ</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="video__more-info">
                    <div className="video__more-info--content">
                        <div className="info__content-title">
                            <h4>Anh Nhà Ở Đâu Thế - AMEE x B RAY ( Masew Remix )</h4>
                        </div>
                        <div className="info__content-channel">
                            <span className="info__content-channel--name">
                            Masew
                            </span>
                            <div className="info__content-channel--icon">
                                <i className="bx bxs-check-circle"></i>
                            </div>
                        </div>
                        <div className="info__content-view-date">
                            <span className="info__content-view">
                            12 Tr lượt xem
                            </span>
                            <span className="info__content-icon">
                                <i className="fas fa-circle"></i>
                            </span>
                            <span className="info__content-date">
                            2 năm trước
                            </span>
                        </div>
                        <div className="info__content-option">
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </div>
                    </div>
                </div>
            </Link> */}
        </React.Fragment>
    )
}

export default ListVideoMore
