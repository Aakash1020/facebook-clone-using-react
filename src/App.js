import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      <Header/>

      <div className="app_body">
        <Sidebar/>
        <Feed/>
        {/* Widgets */}
      </div>
        



      
    </div>
  );
}

export default App;