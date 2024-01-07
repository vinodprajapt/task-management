//import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./style.css";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  const { label, type } = props;
  const [show, setShow] = useState(false);
  const [description, setDiscription] = useState("");
  const [title, setTitle] = useState("");

  const [tasks, setTasks] = useState([]);

  // object uske andar title or description add
  const todoTasks = !!tasks.length && tasks.filter((d) => d.type === "todo");
  const inProgressTasks = tasks?.filter((d) => d.type === "inProgress") ?? [];
  const doneTasks = tasks?.filter((d) => d.type === "done") ?? [];
  
  console.log("tasks", tasks);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>{label}</h2>
          {type === "todo" && (
            <Button
              className="bg-success border-secondary"
              variant="primary"
              onClick={() => setShow(!show)}
            >
              Add new Task{" "}
            </Button>
          )}
        </div>
        {!!todoTasks.length &&
          todoTasks.map((todoTask, index) => (
            <div className="task" key={index}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="title">{todoTask.title}</span>
                <Button>Move to InProgress </Button>
              </div>
              <p className="description">{todoTask.description}</p>
            </div>
          ))}
        {!!inProgressTasks.length &&
          inProgressTasks.map((inProgress, index) => (
            <div className="task" key={index}>
              <span className="title">{inProgress.title}</span>
              <Button>Move to TODO </Button>
              <Button>Move to Done</Button>
              <p className="description">{inProgress.description}</p>
            </div>
          ))}

        {!!doneTasks.length &&
          doneTasks.map((doneTask, index) => (
            <div className="task" key={index}>
              <span className="title">{doneTask.title}</span>
              <p className="description">{doneTask.description}</p>
            </div>
          ))}
      </div>

      {/* Modal  */}
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title>Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter task Title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task Discription"
                value={description}
                onChange={(event) => {
                  setDiscription(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border-black bg-dark"
            variant="secondary"
            onClick={() => setShow(!show)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={function () {
              setShow(!show);
              const existingData = [...tasks];
              existingData.push({ title, description, type: "todo" });
              setTasks(existingData);
              setTitle('');
              setDiscription('');
            }}
          >
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
