import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';


//components
import Main from "./pages/Main";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";


function App() {

  return (
    <>
    <Routes>
      <Route exact path="/posts" element={< Main/>} />
      <Route exact path="/user/signin" element={< LogIn/>} />
      <Route exact path="/user/signup" element={< SignUp/>} /> 
      <Route exact path="/posts/post" element={< Upload />} />
    </Routes>
  </>
  );
}

export default App;
