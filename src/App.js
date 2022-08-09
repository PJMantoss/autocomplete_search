import { useState } from 'react';
import './App.css';

const data = require('./mockData.json')

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value)
  };

  const handleClick = search => {};

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
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
