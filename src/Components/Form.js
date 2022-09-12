import Form from "react-bootstrap/Form";

function TextControlsExample(props) {
  return (
    <div className="container">
        <h1>{props.heading}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> {props.heading} </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default TextControlsExample;
