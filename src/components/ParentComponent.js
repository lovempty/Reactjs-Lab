import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent = (childName) => alert(`Hello ${this.state.name} from ${childName}`)
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;