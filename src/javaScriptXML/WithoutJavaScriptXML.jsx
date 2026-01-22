import React from 'react'

export default function WithoutJavaScriptXML() {
  return ( 

    /**
     * This is the way to create the HTML elements without jsx file.
     ** The bable tool helps to convert the jsx data into javascript files, Basically the jsx file not understand by the browser thats why we use bable tool.
     * Here is the way to write the code without jsx file.
     */
     React.createElement("div", {className:"font-bold text-xl text-center"}, 
        React.createElement("p", {id:"paragrph", className:"", },
            React.createElement("img", {src:"./cart.png",  alt:"logo"}))
     )
  
    )
}
