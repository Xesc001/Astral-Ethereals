import Form from './Inputs';
import React from 'react'
class Continue extends React.Component { 
   handleClick = () =>{
        console.log('this is', this);
   };
   render(){
    return(
        <button onClick={this.handleClick}>Continue</button>
    ) 
   }
} 
export default Continue;