import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/Navbar";
import Navbar1 from "./Components/Navbar1";
import Form from "./Components/Form";
import About from "./Components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar1 title="Arsol" about="about" />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Form heading="Type your text inside" />} />
        </Routes>

        {/* <Form heading = "Type your text inside" />  */}
        {/* <Form heading = "Type your text inside" /> */}
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
