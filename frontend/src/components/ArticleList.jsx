import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../css/Articles.css';


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    useEffect(() => {
        fetchArticles('http://127.0.0.1:8000/api/ArticleList/')
    }, []);

    const fetchArticles = async (url) => {
        try {
            const response = await axios.get(url);
            setArticles(response.data.results);
            setNextPage(response.data.next)
            setPreviousPage(response.data.previous);
        } catch (error) {
            console.error('Error fetching articles: ', error);
        }
    }

    const handleNextPage = () => {
        fetchArticles(nextPage);
    };
    const handlePreviousPage = () => {
        fetchArticles(previousPage);
    };

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/ArticleList/')
    //     .then(response => {
    //         setArticles(response.data);
    //     })
    //     .catch(error => {
    //         console.log('Error fetching articles: ', error);
    //     });
    // }, []);
  return (
    <div>
        <h2 className='title'>Articles</h2>
        <div className="header">
        {articles.map(article => (
            <div className='container-card' key={article.id}>
                <h3><span>Title: {article.title}</span></h3>
               <h4> <span> | Views: {article.views}</span> | <span>Category: {article.category}| </span></h4>
                <p></p>
                <h3><span>Author: </span>{article.author}</h3>
                <p><strong>Content: </strong>{article.content}</p>
                <p>Summary: {article.summary}</p>
                <h>Created_at: {article.created_at}</h>
                <Link to={`/ArticleList/${article.id}`}>Read More</Link>
            </div>
        ))}
        </div>
        <div className="pagination">
            {previousPage && <button onClick={handlePreviousPage}>Previous</button>}
            {nextPage && <button onClick={handleNextPage}>Next</button>}
            </div>
    </div>
  );
};

export default ArticleList