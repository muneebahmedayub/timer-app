import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Timer from './components/Timer/Timer'

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Timer />
      </div>
    </div>
  );
}

export default App;
