import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Views/Home/Home';
import Posts from './Views/Posts/Posts';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/users/:id/posts' element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
