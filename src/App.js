import { useState } from 'react';
import './App.css';

const data = require('./mockData.json')

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value)
  };

  const handleClick = search => {
    setValue(search);
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
            const fullName = term.full_name.toLowerCase();

            return (
                searchTerm && 
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm)
            })
            .slice(0,12)
            .map(d => (
            <div 
              key={d.full_name}
              onClick={() => handleClick(d.full_name)} 
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
