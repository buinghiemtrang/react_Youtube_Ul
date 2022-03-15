import React from 'react'


function SliderScroll() {
    return (
        <div className="slider_container_scroll">
            <ul className="container_scroll-list">
                <li className="container_scroll-item">
                    <p className="container_scroll-link link-active">
                        Tất cả
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Danh sách kết hợp
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Âm nhạc
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Bóng đá
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Hoạt hình
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Du lịch
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Nghệ thuật thị giác
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Thú cưng
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Trực tiếp
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Đã xem
                    </p>
                </li>
                <li className="container_scroll-item">
                    <p className="container_scroll-link">
                        Mới tải lên gần đây
                    </p>
                </li>
            </ul> 
            <button className="next-btn">
                <i className="bx bxs-chevron-right button-chevron-right" />
            </button>
        </div>
    )
}

export default SliderScroll
