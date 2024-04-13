import React from "react";
import { useState } from "react";
import Login2 from "./Components/login2";
import Home2 from "./Components/Home2";
import {Routes,Route,Navigate} from 'react-router-dom';
function App2() {
  const [isLogin,setLogin]=useState(localStorage.getItem('isLoggedIn') || false);
  const login = () => {
    setLogin(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem('isLoggedIn');
  };

   //{(!isLogin)?<Login isLogin={isLogin} setLogin={setLogin}/>:<Home isLogin={isLogin} setLogin={setLogin}/>}
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={isLogin ? <Navigate to="/home2" /> : <Login2 login={login} />}/>
          
        <Route path="/home2" element={isLogin ? <Home2 logout={logout} /> : <Navigate to="/" />}/>
        
        </Routes>
    
    </div>
  );
}

export default App2;
