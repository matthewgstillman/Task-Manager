import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AddTask from "./components/AddTask";
import AllTasksDashboard from "./components/AllTasksDashboard";

interface Task {
    id: string;
    title: string;
    dueDate: string;
    isComplete: boolean;
}

const App : React.FC = () => {
    
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<AllTasksDashboard />} />
                  <Route path="/addtask" element={<AddTask />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
