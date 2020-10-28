import React, { Component } from 'react'
import ConditionalRender from '../components/ConditionalRender'
import LifecycleA from '../components/LifecycleA'
import NameList from '../components/NameList'

class Members extends Component{
    render = ()=> (
        <div>
            <ConditionalRender></ConditionalRender>
            <NameList></NameList>
            <LifecycleA></LifecycleA>
        </div>
    )
}

export default Members