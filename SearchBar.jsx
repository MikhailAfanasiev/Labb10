import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [val, setVal] = useState('');
  return (
    <div style={{ margin: '20px 0' }}>
      <input 
        type="text" 
        value={val} 
        onChange={(e) => setVal(e.target.value)} 
        placeholder="Поиск новостей..." 
        style={{ padding: '10px', width: '70%', borderRadius: '4px 0 0 4px', border: '1px solid #ddd' }}
      />
      <button onClick={() => onSearch(val)} style={{ padding: '10px 20px', borderRadius: '0 4px 4px 0', border: 'none', background: '#007bff', color: '#white', cursor: 'pointer' }}>
        Найти
      </button>
    </div>
  );
}
export default SearchBar;