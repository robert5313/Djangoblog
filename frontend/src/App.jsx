import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import axios from 'axios';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import './App.css'

function App() {

  

  return (
    <Router>

<header>
  <div className="logo">
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/about' >About</Link>
            </li>
            <li>
              <Link to='/contact' >Contact</Link>
            </li>
          </ul>
          </div>
        </header>

      <div>
        
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route exact path="/ArticleList/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
      <footer>
      <div className="footer">
        <p> © Copyright  2024 | MasterClass Company ||
          All Rights reserved
</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
