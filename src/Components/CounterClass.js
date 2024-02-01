import React, { Component } from "react";

class CounterClass extends Component
{
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }

    onClickEvent()
    {
         this.setState({count:this.state.count+1},()=>{
            console.log('callback value : ',this.state.count)
    })
         console.log(this.state.count)
       
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.onClickEvent()}>Click Me</button>
            </>
        )

    }
        
    
}

export default CounterClass;