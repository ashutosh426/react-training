import React from 'react'
import { useState, useEffect } from 'react';

const CounterTitleFunction = () => {
    const [count, setCount] =useState(0);

    useEffect(() => {
      document.title=`You have clicked ${count} times`;
      
    }, [count]);

    useEffect(() => {
      return ()=>document.title="React App";
    });

  return (
    <div className='container m-5'>
        <h4>You have clicked {count} times</h4>
        <button className='btn btn-primary' onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  );
}

export default CounterTitleFunction
