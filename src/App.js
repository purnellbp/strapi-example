import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Post from './components/Post'

function App() {
  return (
    <div className="App">
        <Post random name="Alex" counter={2 + 2}/>
    </div>
  );
}

export default App;
