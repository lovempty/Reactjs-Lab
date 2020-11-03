import React, { Component } from 'react';
import ComponentC from './ComponentC';
import { UserProvider } from './UserContext';

class RootComponent extends Component {
    render() {
        return (
            <div>
                {/* step 2 */}
                {/* <UserProvider value='Synth'> */}
                    <ComponentC />
                {/* </UserProvider> */}
                
            </div>
        );
    }
}

export default RootComponent;