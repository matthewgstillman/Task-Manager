import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

interface Task {
    id: string;
    title: string;
    dueDate: string;
    isComplete: boolean;
}

const App : React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5051/api/task');
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    return () => {
      
    };
  }, []);
  return (
    <div className="App">
      <h1>Task Manager</h1>
      
    </div>
  );
}

export default App;
