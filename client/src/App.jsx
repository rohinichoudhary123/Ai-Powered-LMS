import React from "react";
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import Login from "./page/Login";
import SingUp from "./page/SingUp";
import { ToastContainer } from "react-toastify";
import getCurrentUser from "./customeHook/getCurrentUser";
const App = () => {
  getCurrentUser()
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
