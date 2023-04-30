import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        title: 'Counter Component',
        count: 0
     } 

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    // }
    
    render() { 
        return (
            <div className="container m-5">
                <h2 className="text-primary">{this.state.title}</h2>
                <button className="btn btn-danger m-4" onClick={this.handleDecrement}>-</button>
                <span>{this.state.count}</span>
                <button className="btn btn-success m-4" onClick={this.handleIncrement}>+</button>
            </div>

        );
    }

    handleIncrement=()=>{
        console.log("handleIncrement is called...");
        //this.state.count++;
        this.setState({count: this.state.count+1});
    }

    handleDecrement=()=>{
        console.log("handleDeccrement is called...");
        //this.state.count--;
        this.setState({count: this.state.count-1});
    }

}
 
export default Counter;