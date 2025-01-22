import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllTasksDashboard from "./components/AllTasksDashboard";

interface Task {
    id: string;
    title: string;
    dueDate: string;
    isComplete: boolean;
}

const App : React.FC = () => {
    
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AllTasksDashboard/>
    </div>
  );
}

export default App;
