import { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import NewsModal from './components/NewsModal';

const API_KEY = 'c3227e6b00f7cb6359b013ce8222aff1'; // ПОДСТАВЬ СВОЙ КЛЮЧ

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('general');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('newsHistory')) || []);

  const fetchNews = async (isNewSearch = false) => {
    setLoading(true);
    try {
      const q = query ? `&q=${query}` : '';
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}${q}&lang=ru&apikey=${API_KEY}`;
      // Примечание: Бесплатный GNews не всегда поддерживает &page, 
      // поэтому "Загрузить ещё" в бесплатной версии может дублировать данные.
      const res = await fetch(url);
      const data = await res.json();
      if (data.articles) {
        setArticles(prev => isNewSearch ? data.articles : [...prev, ...data.articles]);
      }
    } catch (e) { console.error("Ошибка API", e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchNews(true); }, [category, query]);

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    const newHistory = [article.title, ...history.filter(t => t !== article.title)].slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem('newsHistory', JSON.stringify(newHistory));
  };

  return (
    <div className="container">
      <h1>🗞 Новостная Лента</h1>
      <SearchBar onSearch={(val) => { setQuery(val); setPage(1); }} />
      <FilterBar activeCat={category} setCat={(cat) => { setCategory(cat); setPage(1); }} />
      
      <div style={{fontSize: '0.8em', color: '#666'}}>История поиска: {history.join(', ')}</div>

      <NewsList articles={articles} onSelect={handleSelectArticle} />

      {loading && <p>Загрузка...</p>}
      <button onClick={() => setPage(p => p + 1)} style={{display: 'block', margin: '20px auto', padding: '10px 20px'}}>
        Загрузить ещё
      </button>

      {selectedArticle && <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
    </div>
  );
}

export default App;