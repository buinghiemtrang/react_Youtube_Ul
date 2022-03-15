import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import SearchVideo from '../pages/SearchVideo'
import VideoDetail from '../pages/VideoDetail'


function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/SearchVideo'  component={SearchVideo}/>
            <Route path='/VideoDetail'  component={VideoDetail}/>
        </Switch>
    )
}

export default Routes