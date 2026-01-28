import React, { useEffect,useState } from 'react'
 
export default function UseEffect() {
const[arr, updateArr]=useState([])
      
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=> response.json())
    .then((data)=> updateArr(data.products))
    .catch((error)=>console.log(error))
  });
   
  
    return (
    <div className='grid lg:grid-cols-3 place-items-center gap-4 my-2 grid-cols-1 md:grid-cols-2'>
          {
            arr.map(element=>{
                return(
                <div className="cart  rounded w-sm bg-white p-3 shadow hover:scale-102 transition-all duration-100 ease-in hover:cursor-pointer hover:shadow-lg">
                <h1>{element.title}</h1>
                <p>{element.price}</p>
                 <p>{element.category}</p>
                </div>             
           ) })
          } 

    </div>
  )
}
