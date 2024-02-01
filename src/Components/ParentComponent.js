import React, { Component } from 'react';
import ChildComponet from './ChildComponet';

export class ParentComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            parentName:"parent"
        }
        this.greetings=this.greetings.bind(this);
    }

    greetings(ChildName)
    {
        // alert("Hello"+this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${ChildName}`);
    }


  render() {
    return (
      <div>
        <ChildComponet greetHandler={()=>this.greetings("hasg")}/>
      </div>
    );
  }
}

export default ParentComponent;
