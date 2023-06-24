import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockDisplay from "./Component/Lab1/ClockDisplay";
import ActivityFinder from "./Component/ActivityFinder";
// import RefCounter from './Component/RefCounter'
import BasicCard from "./Component/ClassExercise/BasicCard";
import CreateForm from "./Component/CreateForm";
import LandingPage from "./Component/LandingPage";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./Component/ResponsiveAppBar"
import ResponsiveAppBar from "./Component/ResponsiveAppBar";


function App() {

  return (
    <>
    <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post" element={<CreateForm/>}/>
        <Route path="/card" element={<BasicCard/>}/>
      </Routes>
    </>
  );
}

export default App;
