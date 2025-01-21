import {useState, useEffect} from 'react';
import axios from 'axios';
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
