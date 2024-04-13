import React from "react";
import { useState } from "react";
const Login2=({ login })=>{
    return(
        
        <form>
        <label>User Name</label>
        <input type="text" placeholder="User Name"/>
        <label>Pssword</label>
        <input type="password" placeholder="Password"/>
        <button onClick={()=>{login()}}>Submit</button>
        </form>
    )
}
export default Login2;