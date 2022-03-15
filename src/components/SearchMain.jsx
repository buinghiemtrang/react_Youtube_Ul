import React from 'react'

import { BiDotsVerticalRounded } from "react-icons/bi"

import { Link } from 'react-router-dom'

import dataVideoHome from '../assets/data/video-home'


function SearchMain() {
    const loadVideosSearch = (dataVideoHome) => {
        let videosSearch = null

        videosSearch = dataVideoHome.map((item, index) => {
            return (
                <Link to="/VideoDetail" className="video__product__item" key={index}>
                    <div className="item__img">
                        <img 
                            src={item.avatar}
                            alt="Thumb Video" 
                            className="item__img__thumb"
                        />
                        <span className="item__img__time">
                            {item.time}
                        </span>
                        <span className="item__img__iconPlay">
                            <i className="bx bx-play" />
                        </span>
                        <ul className="item__img__iconHover">
                            <li className="item__img__iconHover__item hover-time">
                                <i className="bx bxs-time bxf-time" />
                                <div className="skiing-time">
                                    <span>Xem sau</span>
                                </div>   
                            </li>
                            <li className="item__img__iconHover__item hover-list-ul">
                                <i className="bx bx-list-ul bxf-list-ul" />
                                <div className="skiing-ul">
                                    <span>Thêm vào danh sách chờ</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="item__content">
                        <div className="item__content__text">
                            <h4 className="item__content__text__title">
                                {item.title}
                            </h4>
                            <div className="item__content__text__info">
                                <div className="video__infos">
                                    <span className="video__info__view">
                                        {item.view}
                                    </span>
                                    <span className="video__info__icon">
                                        <i className="fas fa-circle" />
                                    </span>
                                    <span className="video__info__date">
                                        {item.date}
                                    </span>
                                </div>
                                <div className="user__channel">
                                    <img 
                                        src={item.channelAvatar}
                                        alt="Avatar Channel" 
                                        className="user__channel__avt"
                                    />
                                    <span className="user__channel__name">
                                        {item.author}
                                    </span>
                                    <span className="user__channel__icon">
                                        <i className="bx bxs-check-circle" />
                                    </span>
                                </div>
                                <div className="video__desc">
                                    <p>
                                    (Ao Làng All Star) Giải đấu All Star siêu chuyên nghiệp với giải thưởng "dưới 1 tỷ đồng".
                                    ►Lịch Live:
                                    * 22:15-23:59 hàng ngày ...
                                    </p>
                                </div>
                            </div>
                            <div className="item__content__text__option">
                                <i><BiDotsVerticalRounded/></i>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
        return videosSearch;
    }

    return (
        <div className="search__main">
            <div className="video__product">
                {
                    loadVideosSearch(dataVideoHome)
                }
            </div>
        </div>
    )
}

export default SearchMain
