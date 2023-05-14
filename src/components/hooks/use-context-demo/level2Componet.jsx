import React, { useContext } from 'react';
import { UserContext } from './rootComponent';

function Level2Component() {
    const userName = useContext(UserContext);
    return ( <div>
        <h4>User name form context: { userName }</h4>
    </div> );
}

export default Level2Component;