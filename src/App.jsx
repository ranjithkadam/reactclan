import React from "react";
import ReactProps from "./props/example1";

export default function App(){
  const num = 10;
  const str = "This is String";
  const arr = [10, 20, 30, 40];
  const names={
    name1: "ranjith",
    name2: "Rajkumar",
    name3: "Arya"
  };
   

  return(
    <div>     
      <ReactProps number={num} string={str} array={arr} object={names} />
    </div>
  )
}

 