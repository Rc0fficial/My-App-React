import Form from "react-bootstrap/Form";
import React, {useState}  from "react";


function TextControlsExample(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('Hello');

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <Form>
        <Form.Group
          className="mb-3"
          
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control as="textarea" value={text}
          onChange={handleOnChange} rows={10} />
        </Form.Group>
      </Form>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upper case
      </button>
    </div>
  );
}

export default TextControlsExample;
