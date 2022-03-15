import React from 'react'

import SliderBar from '../components/SliderBar'
import SearchFilter from '../components/SearchFilter'
import SearchMain from '../components/SearchMain'


function SearchVideo() {
    return (
        <React.Fragment>
            <SliderBar />
            <div className="search">
                <SearchFilter />
                <SearchMain />
            </div>
        </React.Fragment>
    )
}

export default SearchVideo
