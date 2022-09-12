import Form from "react-bootstrap/Form";

function TextControlsExample(props) {
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <button className="btn btn-primary">Convert to upper case</button>
    </div>
  );
}

export default TextControlsExample;
