import React from 'react';
import Navbar from './components/navbar';
import Hello from './components/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hello/>
      <header className="App-header">
        {/* <h1>Video Streaming App</h1> */}
      </header>
      <main>
        
        {/* Add your video player component here */}
      </main>
      <footer>
        {/* Add your footer component here */}
      </footer>
    </div>
  );
}

export default App;
