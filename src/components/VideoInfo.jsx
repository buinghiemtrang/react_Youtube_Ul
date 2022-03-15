import React, { useState } from 'react'

function VideoInfo() {

    const [listResport, setListResport] = useState(false)

    const showListResport = () => {
        return setListResport(!listResport)
    }
    return (
        <React.Fragment>
            <div className="video__info">
                <div className="video__info-left">
                    <span className="video__info-view">
                        5.237.353 lượt xem
                    </span>
                    <i className="bx bxs-circle video_icon-dot"></i>
                    <span className="video__info-date">
                        10 thg 8, 2021
                    </span>
                </div>
                <div className="video__info-right">
                    <ul className="video__info-social">
                        <li className="video__info-social--item">
                            <i className="bx bxs-like video_icon-right like-click-change" />
                            <span className="amount_like-click-change">
                                134 N
                            </span>
                            <div className="info-right-line line-click-change" />
                            <span className="like-up-down" />
                        </li>
                        <li className="video__info-social--item dislike-click-main">
                            <i className="bx bxs-dislike video_icon-right dislike-click-change" />
                            <span className="amount-dislike-click-change">
                                1,2 N
                            </span>
                            <span className="dislike-up-down" />
                        </li>
                        <li className="video__info-social--item video_info-share">
                            <i className="bx bxs-share video_icon-right" />
                            <span className="video_info-decs-right">Chia sẻ</span>
                        </li>
                        <li className="video__info-social--item video_info-save">
                            <i className="bx bx-list-plus video_icon-right" />
                            <span className="video_info-decs-right">Lưu</span>
                        </li>
                        <li className="video__info-social--item video_icon-right">
                            <i className="bx bx-dots-horizontal-rounded bxf-three-dots" onClick={showListResport}></i>
                            <ul className={listResport ? "video_info-social-list-report" : "hidden"}>
                                <li className="video_info-social-item-report">
                                    <i className="bx bxs-flag-alt bxf-flag-alt" />
                                    <span>Báo vi phạm</span>
                                </li>
                                <li className="video_info-social-item-report">
                                    <i className="bx bx-table bxf-table" />
                                    <span>Mở bản chép lời</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideoInfo
