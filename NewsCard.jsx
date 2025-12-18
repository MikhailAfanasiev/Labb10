function NewsCard({ article, onClick }) {
  return (
    <div onClick={onClick} style={{ background: '#fff', borderRadius: '8px', cursor: 'pointer', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={article.image} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '10px' }}>{article.title}</h3>
        <p style={{ fontSize: '0.9em', color: '#777' }}>{new Date(article.publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
export default NewsCard;