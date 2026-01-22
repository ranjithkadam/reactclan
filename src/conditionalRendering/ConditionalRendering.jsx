import React, { useState } from "react";


// Conditional Rendering is nothing but the showing the different UI based on condition.
// In React also we have same type of Condtional statements like: if, if-else, elseif ladder and switch case.
function ConditionalRendering(){
const [status, isLogged]=useState(true);
    if(status){
        return(
            <div>
                <h1 className="bg-green-600 text-2xl font-bold text-center">Login Successfull</h1>
            </div>
        )
    } else{
        return(
            <>
            <h1 className="bg-red-600 text-2xl font-bold text-center">Invalid Details</h1>
            </>
        )
    }
}

export default ConditionalRendering;


function TernaryCondtion(){
    let isLogged=true;
    let isLogOut="";

    return(
        <>
        <h1 className="text-2xl text-center bg-amber-300 my-1">
            {isLogged ? "Welcome" : "Please login"}
        </h1>

        <h1>Dashboard</h1>
        {isLogOut && <p> Admin Panel</p>}
        </>
    )
}

export {TernaryCondtion};