import NewsCard from './NewsCard';

function NewsList({ articles, onSelect }) {
  if (!articles.length) return <p>Новостей не найдено.</p>;
  return (
    <div className="news-grid">
      {articles.map((item, idx) => (
        <NewsCard key={item.url + idx} article={item} onClick={() => onSelect(item)} />
      ))}
    </div>
  );
}
export default NewsList;