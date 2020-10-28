import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return (
                <h2>Welcome Hop</h2>
            )
        }else{
            return (
                <h2>Welcome Guest</h2>
            )
        }
        // return (
        //     <div>
        //         <h2>Welcome Hop</h2>
        //         <h2>Welcome Guest</h2>
        //     </div>
        // );
    }
}

export default ConditionalRender;