import React, { useState } from 'react'

export default function Example() {

    const [details, setDetails]=useState({name:"ranjith", id:22});
    
  return (
    <div>
        {}
        <h1> {details.name}</h1>

    </div>
  )
}
