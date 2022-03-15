import React from 'react'

function VideoProduct() {
    return (
        <React.Fragment>
            <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/hW4z1dYE7No"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="video__title">
                <h3 className="video__title-heading">
                    Cưới Thôi - Masiu x Masew
                </h3>
            </div>
        </React.Fragment>
    )
}

export default VideoProduct
