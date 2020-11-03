import React, { Component } from 'react';
import withCounter from './withCounter'

class ClickCounter extends Component {
    
    render() {
        console.log("--------- Props -----------")
        console.log(this.props)
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount} > {this.props.name} Clicked {count} times</button>
        );
    }
}

export default withCounter(ClickCounter,1);