import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from "./component/navigation/NavbarComp";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <About />
    </div>
  );
}

export default App;
