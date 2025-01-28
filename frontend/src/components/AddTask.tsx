import { useState }  from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss';
import API from "../API";

const AddTask: React.FC = () => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        API.post("/task", { title, dueDate, isComplete }).then((response) => {
           setTitle("");
           setDueDate("");
           setIsComplete(false);
        })
    };
    
    return (
        <div>
            <h1>Add a Task</h1>
            <div className="addTaskContainer">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="task">
                        <Form.Label>Task</Form.Label>
                        <Form.Control 
                            type="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Enter Task"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dateTimePicker">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control 
                            type="datetime-local" 
                            value={dueDate}
                            onChange={(event) => setDueDate(event.target.value)}
                            placeholder="Enter the due date and time"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="isComplete">
                        <Form.Check type="checkbox" label="Is Complete" />
                    </Form.Group>        
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddTask;
