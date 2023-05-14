import React from 'react';
import Level1Component from './level1Component';

export const UserContext = React.createContext(); // 1. create the UserContext
//2. provide a value for the UserContext
function RootComponent() {
    return ( <div>
        <UserContext.Provider value={'John Smith'}>
            <Level1Component></Level1Component>
        </UserContext.Provider>
        
    </div> );
}

export default RootComponent;