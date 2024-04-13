import React from "react";
import { useState } from "react";
const Login=({isLogin,setLogin})=>{
    return(
        
        <form>
        <label>User Name</label>
        <input type="text" placeholder="User Name"/>
        <label>Pssword</label>
        <input type="password" placeholder="Password"/>
        <button onClick={()=>{setLogin(!isLogin)}}>Submit</button>
        </form>
    )
}
export default Login;