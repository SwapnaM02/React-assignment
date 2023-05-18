import React from "react";
import ReactDOM from "react-dom/client";


const Headercomponent = () =>{
    return (
        <div className="header">
            <img src="https://www.pngwing.com/en/free-png-yxlwp " />
            <input type="button" placeholder="search icon"/>
            <input type="text" placeholder="user icon"/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(root);