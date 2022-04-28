import React, { useState } from 'react'

const ChildComponent = (props) => {
 const [childname, setchildname] = useState('i am child');
 return (
  <>
   <h1>
    ChildComponent :
    <u>
     {childname}
    </u>
   </h1>
   <button onClick={() => props.callparentfuncation()}> Call Parent Funcation</button>
  </>
 )
};
export default ChildComponent
