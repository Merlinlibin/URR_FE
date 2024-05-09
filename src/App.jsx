import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Plastic from "./pages/Plastic";
import Paper from "./pages/Paper";
import Glass from "./pages/Glass";
import Login from "./pages/Login";
import ActivationPage from "./pages/ActivationPage";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plastics" element={<Plastic />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/login" element={<Login />} />
        <Route path="user/activation/:id" element={<ActivationPage />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
