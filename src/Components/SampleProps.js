import React from "react";

const SampleProps=(Props)=>{
    console.log(Props)

    //Props.name="sushmidhar";

    return(
        <div>
            <h1>Hello {Props.name}  {Props.role}  </h1>
            {Props.children}
        </div>

    )
}
export default SampleProps;