import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../css/Articles.css';


const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/ArticleList/')
        .then(response => {
            setArticles(response.data);
        })
        .catch(error => {
            console.log('Error fetching articles: ', error);
        });
    }, []);
  return (
    <div>
        <div className="header">
        <h2>Articles</h2>
        {articles.map(article => (
            <div className='container-card' key={article.id}>
                <h3><span>Title: {article.title}</span></h3>
               <h4> <span> | Views: {article.views}</span> | <span>Category: {article.category}| </span></h4>
                <p></p>
                <h3></h3>
                <h3><span>Author: </span>{article.author}</h3>
                <p><u>Content: </u>{article.content}</p>
                <p>Summary: {article.summary}</p>
                <h>Created_at: {article.created_at}</h>
                <Link to={`/ArticleList/${article.id}`}>Read More</Link>
            </div>
        ))}
        </div>
    </div>
  );
};

export default ArticleList