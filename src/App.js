import React from 'react';
import NavBar from './components/NavBar';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-body">
      <NavBar></NavBar>
        {/**
         * Saving for future ref
         * <img src={logo} className="App-logo" alt="logo" />
         */}
        <h1>Welcome to the site!</h1>
        <p>As you can see, there really isn't much here to see yet. The pages should be live by tonight.</p>
      </header>
    </div>
  );
}

export default App;