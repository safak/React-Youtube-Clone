import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecomendedVideos from "./components/recomendedVideos/RecomendedVideos";

function App() {

  const [toggle, setToggle] = useState(false);
  console.log(toggle)

  return (
    <div className="App">
      <Header setToggle={toggle,setToggle}/>
      <div className="appPage">
        <Sidebar toggle={toggle}/>
        <RecomendedVideos />
      </div>
    </div>
  );
}

export default App;
