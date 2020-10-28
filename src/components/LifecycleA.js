import React, { Component } from 'react';

class LifecycleA extends Component {
    constructor(props) {
        super(props);
        
        this.name = {
            name: 'Hop'
        }
        console.log('constructor');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('get derived state')
        return null
    }
    shouldComponentUpdate = ()=> {
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate = ()=> {
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidMount = () => console.log("Component Did Mount")
    changeState = () => {
        this.setState({
            name: 'Code evolution'
        })
    }
    render() {
        console.log('Render');
        return (
            <div>
                LifecycleA
                <button onClick={this.changeState} >Change state</button>
            </div>
        );
    }
}

export default LifecycleA;