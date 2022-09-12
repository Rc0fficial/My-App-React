import Form from "react-bootstrap/Form";
import React, {useState}  from "react";


function TextControlsExample(props) {
  const handleUpClick = () => {
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
          value={text}
          onChange={handleOnChange}
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upper case
      </button>
    </div>
  );
}

export default TextControlsExample;
