import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Contents from './pages/Contents/Contents';
import Info from './pages/Info/Info';
import Profile from './pages/Profile/Profile';
import Support from './pages/Support/Support';
import Teams from './pages/Teams/Teams';
import Report from './pages/Report/Report';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <div className="container">
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contents">
              <Contents></Contents>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/users/information">
              <Info></Info>
            </Route>
            <Route path="/users/report">
              <Report></Report>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
