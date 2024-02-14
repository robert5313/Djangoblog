import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import axios from 'axios';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import './App.css'

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route exact path="/ArticleList/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
