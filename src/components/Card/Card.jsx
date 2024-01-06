//import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./style.css";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  const { label, type } = props;
  const [show, setShow] = useState(false);
  return (
    <>
    <div className="card">
      <div className="card-header">
        <h2>{label}</h2>
        {type === "todo" &&(
          <Button variant="primary" onClick={()=>setShow(!show)}>
            Add new Task{" "}
          </Button>
        )}
      </div>
      <div className="task">
        <span className="title">Hello</span>
        <p className="description">this is my first task</p>
      </div>
      <div className="task">
        <span className="title">Hello</span>
        <p className="description">this is my first task</p>
      </div>
      <div className="task">
        <span className="title">Hello</span>
        <p className="description">this is my first task</p>
      </div>
    </div>
    
      {/* Modal  */}
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter task Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>task Discription</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter task Discription" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(!show)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
Card.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["todo", "inProgress", "done"]).isRequired,
};

export default Card;
