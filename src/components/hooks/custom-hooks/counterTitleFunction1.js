import React, { useEffect, useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function CounterTitleFunction1() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);
    
    return ( 
        <div className="container m-5">
            <h4>You have clicked { count } times!</h4>
                <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
     );
}

export default CounterTitleFunction1;