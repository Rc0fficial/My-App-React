import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function TextControlsExample(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = ('');
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              value={text}
              onChange={handleOnChange}
              rows={10}
            />
          </Form.Group>
        </Form>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-4" onClick={handleLowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary " onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-5">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextControlsExample;
