import React from "react";

// This Component Creation with Traditional Function.
function HeaderComponent(){
    return(
        <div>
            <h1 className="text-center bg-amber-400 font-bold text-xl">Header with Traditional Function</h1>
        </div>
    )
}


// this is Component creation using advance function Arrow Function.
export const HeaderAdvance = ()=>{
    return (
       <div>
        <h1 className="text-center bg-amber-500 font-bold text-xl">Header with Advance Function</h1>
       </div> 
    )
}

export {HeaderComponent};