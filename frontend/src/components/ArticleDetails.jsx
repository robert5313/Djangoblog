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
    <div>
        <h2 className='title'>Detailed Blog</h2>
    <div className='header-1'>{article ? (
        <div>
            <h2>Title: {article.title}</h2>
            <p>Content: {article.content}</p>
            <h3>Category: {article.category}</h3>
            <p>Views: {article.views}</p>
            <h>Created_at: {article.created_at}</h>
        </div>
    ) : (
        <p>Loading...</p>
    )}  
    </div>
    </div>
  )
}

export default ArticleDetails