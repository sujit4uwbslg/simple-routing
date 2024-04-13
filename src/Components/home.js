import React from "react";
import { useState } from "react";
const Home=({isLogin,setLogin})=>{
    return(
        <>
        <h1>Welcome to Home page</h1>
        <button onClick={()=>{setLogin(!isLogin)}}>Logout</button>
        </>
    )
}
export default Home;