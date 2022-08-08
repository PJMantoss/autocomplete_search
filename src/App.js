import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Search</h1>
      <div className="searchContainer">
        <div className="searchInner">
          <input 
            type="text" 
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
