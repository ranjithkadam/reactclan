import React from "react";
import ReactProps1 from "./ReactProps1";

const ReactProps2 = function ({ name }) {
    const num = 10;
    const str = "This is String";
    const arr = [10, 20, 30, 40];
    const names = {
        name1: "ranjith",
        name2: "Rajkumar",
        name3: "Arya"
    };
    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-2 text-shadow-red-100">Welcome {name}</h2>
            <ReactProps1 number={num} string={str} array={arr} object={names} />
        </div>
    )
}

export {ReactProps2 }