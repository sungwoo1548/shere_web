import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Nav
import TopNav from './navigation/TopNav';

// Screens
import Policy from './screen/Policy';

function App() {
  return (
    <Router>
      <TopNav />
      <Route path="/" exact>home</Route>
      <Route path="/policy" component={Policy}/>
    </Router>
  );
}

export default App;
