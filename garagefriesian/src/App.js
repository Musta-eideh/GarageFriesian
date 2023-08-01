import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home'
import Educacao from './components/pages/Educacao';
import Categoria from './components/pages/Categoria';
import Blog from './components/pages/Blog';
import SobreNos from './components/pages/SobreNos';

function App() {
  return (
    <Router>

      <div>
        <Link to="/">Home</Link>
        <Link to="/educacao">Educação</Link>
        <Link to="/categoria">Categoria</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/sobrenos">Sobre Nos</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/educacao" element={<Educacao/>} />
        <Route path="/categoria" element={<Categoria/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/sobrenos" element={<SobreNos/>} />
      </Routes>

      <p>Footer</p>
      
    </Router>
  );
}

export default App;
