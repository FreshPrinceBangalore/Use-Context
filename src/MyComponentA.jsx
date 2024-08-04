import React, {useState , createContext} from "react";
import MyComponentB from "./MyComponentB";


export const UserContext = createContext();

function MyComponentA(){

    const [user , setUser] = useState("Albis");
    document.title = "Use Context"

    return(<>
    
    <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value ={user}>
        < MyComponentB user = {user}/>
        </UserContext.Provider>
        
    </div>
    
    </>)


}

export default MyComponentA