import React from 'react';
import { BsArrowBarRight } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
    </Router>
  );
}

export default App;
