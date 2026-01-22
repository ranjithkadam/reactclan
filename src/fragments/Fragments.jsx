// Fragments nothing but empty tag used to seperation of code for readabilty for developer.
// The fragments not created extra node to the DOM Tree so that the processing becomes fast.


import React, { useState } from 'react'

export default function Fragments() {
    // let name= "ranjith";
    const [name, setName]=useState("");
  return (
    <React.Fragment >
    <div className="flex flex-row justify-center">

    <button className=" bg-stone-400 border rounded" onClick={()=>{
        setName((name)=> name="ranjith")
    }}>clickMe</button>
    <br />

    <h1 className="bg-amber-300 w-50 text-center ml-2">{name}</h1>
    </div>

    </React.Fragment>
    
  )
}
