import React, { useEffect, useState } from 'react';

function CounterTitleFunction() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Clicked ${count} times.`;
    },[count])

    useEffect(()=>{
        // here to work with unmounting phase, we have to return a function definition
        return ()=>document.title='React App'; 
    })
    return ( 
        <div className="container m-5">
            <h4>You have clicked { count } times!</h4>
                <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
     );
}

export default CounterTitleFunction;