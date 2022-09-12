import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";


function App() {
  return (
    <>
      <Navbar title = "Arsol" about = "about" />
      <Form heading = "Type your text inside" />
      
    </>
  );
}

export default App;
