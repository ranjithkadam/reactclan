import React, { useState } from 'react'

export default function Counter(props) {
    // const count=0;
    let [count, updateCounter] = useState(props.counter);

  return (
    <div className="flex justify-center items-center h-[100vh] bg-stone-200">
            <div className=" bg-white shadow rounded">
            <div className="my-3 mx-6 flex">
            <button className='px-8 bg-black text-white text-2xl font-bold cursor-pointer rounded' onClick={()=>{
                updateCounter(count=> count-1)
            }}> - </button>
            <h1 className='text-2xl px-3'>{count}</h1>
            <button className='px-8 bg-black text-white text-2xl font-bold cursor-pointer rounded' onClick={()=>{
                updateCounter( count=> count+1)
            }}> + </button>
            </div >

            <div className=" text-center px-8 bg-black text-white text-2xl my-3 mx-6 cursor-pointer rounded" onClick={()=> {
                updateCounter(count=> count=0)
                }}>
                <button>reset</button>
            </div>
        </div>

        
       
    </div>
  )
}
