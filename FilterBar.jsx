function FilterBar({ activeCat, setCat }) {
  const cats = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];
  return (
    <div style={{ margin: '15px 0', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
      {cats.map(c => (
        <button 
          key={c} 
          onClick={() => setCat(c)}
          style={{ background: activeCat === c ? '#007bff' : '#ccc', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
export default FilterBar;