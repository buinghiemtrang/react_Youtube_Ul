import React from 'react'

import SliderBar from '../components/SliderBar'
import SliderScroll from '../components/SliderScroll'
import VideoHome from '../components/VideoHome'

function Home() {
    return (
        <React.Fragment>
            <SliderBar />
            <div className="content">
                <SliderScroll />
                <VideoHome />
            </div>
        </React.Fragment>
    )
}

export default Home
