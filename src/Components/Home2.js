import React from "react";
import { useState } from "react";
const Home2=({logout})=>{
    return(
        <>
        <h1>Welcome to Home page</h1>
        <button onClick={()=>logout()}>Logout</button>
        </>
    )
}
export default Home2;