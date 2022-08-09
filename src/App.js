import { useState } from 'react';
import './App.css';

const data = require('./mockData.json')

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value)
  };

  const handleClick = search => {
    console.log('search ', search);
  };

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
          <button onClick={() => handleClick(value)}>Search</button>
        </div>
        <div className="dropdown">
          {data.filter(term => {
            const searchTerm = value.toLowerCase();
            const fullName = term.fullName.toLowerCase();

            return searchTerm && 
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm;
            })
            .map(d => (
            <div 
              onClick={() => handleClick(d)} 
              className="dropdownRow"
            >
              {d.full_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
