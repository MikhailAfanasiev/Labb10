function NewsModal({ article, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={article.image} alt="" style={{ width: '100%', borderRadius: '5px' }} />
        <h2 style={{ margin: '15px 0' }}>{article.title}</h2>
        <p>{article.description}</p>
        <hr style={{ margin: '15px 0' }} />
        <p>{article.content}</p>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <a href={article.url} target="_blank" rel="noreferrer">Читать в источнике</a>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}
export default NewsModal;