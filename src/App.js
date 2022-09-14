import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
// import Form from "./Components/Form";
import About from "./Components/About";



function App() {
  return (
    <>
      <Navbar title = "Arsol" about = "about" />
      {/* <Form heading = "Type your text inside" /> */}
      {/* <About /> */}
      <About/>
      
    </>
  );
}

export default App;
