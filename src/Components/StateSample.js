import React, { Component } from 'react';

class StateSample extends Component
{
  constructor()
  {
    super();
    this.state={
        message:"Welcome to my channel"
    }
  }
   changeState=()=>
  {
      this.setState({
          message:"thank you for Subscribe"
      })
  }
    
  render()
  {

    return(
        <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeState()}>Subscribe</button>
        </>
    )
  }
}

export default StateSample;