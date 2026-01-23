import React from "react";
// import { ReactProps2 } from "./props/ReactProps2";
// import Counter from "./states/Counter";
// import Example from "./states/Example";
// import WithoutJavaScriptXML from "./javaScriptXML/WithoutJavaScriptXML";
// import WithJSX from "./javaScriptXML/WithJSX";
// import Fragments from "./fragments/Fragments";
// import ConditionalRendering, { TernaryCondtion } from "./conditionalRendering/ConditionalRendering";
// import Register from "./formValidation/Register";
// import { Route, Router, Routes } from "react-router-dom";
// import Address from "./routing/Address";
// import Navbar from "./routing/NavBar";

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
        <Navbar/>
         <Routes>
            <Route path="/intro" element={<ReactIntro/>}/>
            <Route path='/components' element={<ReactComponents/>} />
            <Route path='/props' element={<ReactProps/>} />
            <Route path='/state' element={<ReactState/>} />
            <Route path='/xml' element={<ReactJavaScriptXml/>} />
            <Route path='/events' element={<ReactEvents/>} /> 
            <Route path='/conditionalRendering' element={<ReactConditionalRendering/>} />
  
         </Routes>
    </div>
  )
}