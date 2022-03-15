import React from 'react'

import avatar from '../assets/images/avt.jpg'

function UserComments() {
    return (
        <React.Fragment>
            <div className="comments">
                <div className="comments__filter">
                    <div className="comments__filter-amount">
                        <p>
                            7.062 bình luận
                        </p>
                    </div>
                    <div className="comments__filter-sort">
                        <i className="bx bx-menu-alt-left bxf-menu-alt-left"></i>
                        <span>Sắp xếp theo</span>
                    </div>
                </div>
                <div className="comments__user">
                    <img 
                        src={avatar} 
                        alt="Avatar Channel Comment" 
                        className="comments__user-img" 
                    />
                    <div className="spacing"></div>
                    <input type="text" className="comments__user-input" placeholder="Bình luận công khai..." />
                    <div className="comments__user-btn">
                        <button className="comments__user-btn--cancel">Hủy</button>
                        <button className="comments__user-btn--submit">Bình luận</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserComments
