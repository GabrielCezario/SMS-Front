import React from 'react';
import './App.css';

import Maincontent from './pages/login/main'

function App() {
  return (
    <div className="App"> 
        <main className="d-flex align-items-center justify-content-center h-100">
          <Maincontent></Maincontent>
        </main>
    </div>
  );
}

export default App;
