import { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

interface Task {
    id: string;
    title: string;
    dueDate: string;
    isComplete: boolean;
}

const AddTask: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5051/api/task');
                console.log(response.data);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchData().then(r => console.log("Tasks fetched"));

    }, []);

    return (
        <div>
            <h1>Add a Task</h1>
            <div className="addTaskContainer">
                <Form>
                    <Form.Group className="mb-3" controlId="task">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="title" placeholder="Enter Task" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dateTimePicker">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="datetime-local" placeholder="Date/Time" />
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
