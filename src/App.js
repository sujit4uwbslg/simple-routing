import React from "react";
import { useState } from "react";
import Login from "./Components/login";
import Home from "./Components/home";
function App() {
  const [isLogin,setLogin]=useState(false);
  return (
    <div className="App">
     {(!isLogin)?<Login isLogin={isLogin} setLogin={setLogin}/>:<Home isLogin={isLogin} setLogin={setLogin}/>}
    </div>
  );
}

export default App;
