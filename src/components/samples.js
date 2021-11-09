import { useState } from "react";
//import { ReactDOM } from "react-dom";

function FavouriteColor() {
    const [color,setcolor] = useState("cyan","aquablue");
    
    return <h1>The colors to be displayed are {color} and {setcolor}!</h1>
}

export default FavouriteColor;