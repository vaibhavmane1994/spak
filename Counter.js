import React, { Component } from 'react';

class Counter extends Component {
      
    state={
        counter: 0
    }  
    
     handleincrement =()=>{
         this.setState({
             counter :this.state.counter + 1
         })
 
     }
    render() {
        return (
            <div style={style}>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.handleincrement}>Increment</button>
            </div>
        );
    }
}
 const style ={
     padding:'20px',
     width:'300px',
     height:'300px',
     border:'2px solid black'
 }

export default Counter;