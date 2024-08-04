import React, {useState , useContext} from "react";
import MyComponentD from "./MyComponentD";

function MyComponentC(){

    return(<>
    
    <div className="box">
        <h1>Component C</h1>
        < MyComponentD/>
    </div>
    
    
    </>)


}

export default MyComponentC