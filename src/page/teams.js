import React, { Component } from 'react'
import EventBind from '../components/EventBind'
import ParentComponent from '../components/ParentComponent'

class Teams extends Component{
    render = ()=> (
        <div>
            <EventBind></EventBind>
            <ParentComponent></ParentComponent>
        </div>
        
    )
}

export default Teams