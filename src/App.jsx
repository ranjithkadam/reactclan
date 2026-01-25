import React from "react";
import ReactProps from "./routing/ReactProps";
import { ReactProps2 } from "./props/ReactProps2";
import Counter from "./states/Counter";
import Example from "./states/Example";
import WithoutJavaScriptXML from "./javaScriptXML/WithoutJavaScriptXML";
import WithJSX from "./javaScriptXML/WithJSX";
import Fragments from "./fragments/Fragments";
import ConditionalRendering, { TernaryCondtion } from "./conditionalRendering/ConditionalRendering";
import Register from "./formValidation/Register";
import Login from "./formValidation/Login";
 
export default function App(){
  
  return(
    <div>     
     {/* <ReactProps2 name="Hello Ranjith"/>   */}

      {/* <Counter counter={0}/> */}
      {/* <Example/> */}

      {/* <WithoutJavaScriptXML/>
      <WithJSX/>
      <Fragments/>
      <br />
      <ConditionalRendering/>
      <TernaryCondtion/> */}
      {/* <Register/> */}
      <Login/>
    </div>
  )
}