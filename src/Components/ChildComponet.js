import React from 'react';

function ChildComponet(props) {
  return (
    <div>
       
      <button onClick={props.greetHandler}>GreetParent</button>
    </div>
  );
}

export default ChildComponet;

