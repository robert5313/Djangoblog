import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
const ArticleDetails = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/ArticleList/${id}`)
        .then(response => {
            setArticle(response.data);
        })
        .catch(error => {
            console.log('Error fetching article: ', error)
        })
    }, [id]);

  return (
    <div>{article ? (
        <div>
            <h2>Title: {article.title}</h2>
            <p>Content: {article.content}</p>
            <h3>Category: {article.category}</h3>
            <h3>Author: {article.author}</h3>
            <p>Views: {article.views}</p>
            <p>Summary: {article.summary}</p>
            <h>Created_at: {article.created_at}</h>
        </div>
    ) : (
        <p>Loading...</p>
    )}  
    </div>
  )
}

export default ArticleDetails