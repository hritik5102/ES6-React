import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Users from './component/Users'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> Fetch github users api through axios</h1>
        <Users/>
      </header>
    </div>
  );
}

export default App;
