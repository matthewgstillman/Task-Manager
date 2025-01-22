import { useState, useEffect } from 'react';
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

interface Task {
    id: string;
    title: string;
    dueDate: string;
    isComplete: boolean;
}

const AllTasksDashboard: React.FC = () => {
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
            <h1>All Tasks Dashboard</h1>
            <div className="taskListContainer">
                <ListGroup className="taskList">
                    {tasks.map((task) => (
                        <ListGroup.Item key={task.id}>{task.title} - Completed ?: {task.dueDate}</ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    );
};

export default AllTasksDashboard;
