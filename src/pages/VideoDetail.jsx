import React from "react";

import VideoProduct from '../components/VideoProduct'
import VideoInfo from '../components/VideoInfo'
import VideoChannel from '../components/VideoChannel'
import UserComments from '../components/UserComments'
import ListComments from '../components/ListComments'
import ListVideoMore from '../components/ListVideoMore'

function VideoDetail() {
    return (
        <div className="container__video">
            <div className="row">
                <div className="container__video-left col-8">
                    <div className="video__main">
                        <VideoProduct />
                        <VideoInfo />
                        <VideoChannel />
                        <UserComments />
                        <ListComments />
                    </div>
                </div>
                <div className="container__video-right col-4">
                    <div className="video__more">
                        <ListVideoMore />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;
