import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App : React.FC = () => {
  useEffect(() => {
    const response = axios.get("http://localhost:5051/api/task");
    console.log(response);
    
    return () => {
      
    };
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
