import React from "react";

const ReactProps= ({number,string, array, object}) =>{
    const {name1, name2, name3} = object
    const [num1, num2, num3, num4] = array;
    return(
        <div className="border h-100 text-center">
            <h2 className="bg-amber-100">The num value: {number}</h2>
            <h2 className="bg-amber-200">The str value: {string}</h2>
            <h2 className="bg-amber-300">The Array Values After Destructuring: {num1}, {num2}, {num3}, {num4}</h2>
            <h2 className="bg-amber-400">The object values after Destructuring: {name1}, {name2}, {name3}</h2>     
        </div>
    )
}

export default ReactProps;