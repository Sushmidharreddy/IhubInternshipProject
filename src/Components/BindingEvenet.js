import React, { Component } from 'react';

class BindingEvenet extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            msg :"Hello"
         
        } 
        this.clickhandler=this.clickhandler.bind(this) 
    }
    clickhandler()
    {
        this.setState({
            msg:"bye"
        })
         console.log(this)
    }
    render()
    {
        return(
            <>
            <h1>{this.state.msg}</h1>
            {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
            {/* <button onClick={()=>this.clickhandler()}>Click</button> */}
            <button onClick={this.clickhandler}>Click</button>
            </>
        )
    }
}

export default BindingEvenet;

