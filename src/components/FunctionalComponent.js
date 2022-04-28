import React, {useState} from 'react'
import ChildComponent from './ChildComponent'; 
function FunctionalComponent(props) {
 const [name,changename] = useState("pqr");
 const updateState = () => {
  changename('zxc');
 }
  return (
   <>
    <div>Parent Components state : {name}</div>
    <button onClick={() => updateState()}>updateState</button>
    <ChildComponent FunctionalComponent = {()=> updateState}/>
   </>

  )
}
export default  FunctionalComponent;
