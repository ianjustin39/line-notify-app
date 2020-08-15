import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import MyNavBar from './route/navBar';

import Routes from './route/routes'

function App() {

  return (
    <div className='App'>
      <Router>
        <MyNavBar />
        <Routes/> 
      </Router>
    </div>
  );
}

export default App;
