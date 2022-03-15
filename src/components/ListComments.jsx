import React from 'react'

import logoMasew from '../assets/images/masew.jpg'
import logoMixi from '../assets/images/mixigaming.jpg'


function ListComments() {
    return (
        <React.Fragment>
            <div className="list__comments">
                <div className="comments__user-response">
                    <img 
                        src={logoMasew} 
                        alt="Avatar Channel Comment" 
                        className="comments__user-response--img" 
                    />
                    <div className="comments__user-response--main">
                        <div className="comments__user-title">
                            <div className="comments__user-title--name">
                                <span>
                                    Masew
                                    <i className="bx bxs-check-circle bxf-check-circle"></i>
                                </span>
                            </div>
                            <div className="comments__user-title--date">
                                <span>
                                    1 tuần trước
                                </span>
                            </div>
                        </div>
                        <div className="comments__user-desc">
                            <p>
                                Mong anh em sẽ thích. <br />
                                Do tình hình dịch nên vocal k thể hoàn thiện chỉnh chu được nên có gì mọi người thông cảm nha ❤️❤️❤️
                            </p>
                        </div>
                        <ul className="comments__user-social">
                            <li className="comments__user-social--item">
                                <i className="bx bxs-like bxr-like"></i>
                                <span className="like-click-add">10 N</span>
                            </li>
                            <li className="comments__user-social--item">
                                <i className="bx bxs-dislike bxr-dislike"></i>
                                <span> </span>
                            </li>
                            <li className="comments__user-social--item">
                                <span className="comments__user-feedback feedback-one">Phản hồi</span>
                            </li>
                        </ul>
                        <div className="comments__user-list--down">
                            <div className="list__down-show">
                                <i className="bx bxs-down-arrow bxf-down-arrow"></i>
                                <span className="clickShowHide">Xem 4 câu trả lời</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comments__user-response">
                    <img 
                        src={logoMixi} 
                        alt="Avatar Channel Comment" 
                        className="comments__user-response--img" 
                    />
                    <div className="comments__user-response--main">
                        <div className="comments__user-title">
                            <div className="comments__user-title--name">
                                <span>
                                    MixiGaming
                                    <i className="bx bxs-check-circle bxf-check-circle"></i>
                                </span>
                            </div>
                            <div className="comments__user-title--date">
                                <span>
                                    1 tuần trước
                                </span>
                            </div>
                        </div>
                        <div className="comments__user-desc">
                            <p>
                                Quá hay em ơi 🤗
                            </p>
                        </div>
                        <ul className="comments__user-social">
                            <li className="comments__user-social--item">
                                <i className="bx bxs-like bxr-like"></i>
                                <span className="like-click-add">1.5 N</span>
                            </li>
                            <li className="comments__user-social--item">
                                <i className="bx bxs-dislike bxr-dislike"></i>
                                <span> </span>
                            </li>
                            <li className="comments__user-social--item">
                                <span className="comments__user-feedback feedback-one">Phản hồi</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default ListComments
