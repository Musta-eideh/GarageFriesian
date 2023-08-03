import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Educacao from './components/pages/Educacao/Educacao';
import Categoria from './components/pages/Categoria/Categoria';
import Blog from './components/pages/Blog/Blog';
import SobreNos from './components/pages/SobreNos';

function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/educacao" element={<Educacao/>} />
          <Route path="/categoria" element={<Categoria/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/sobrenos" element={<SobreNos/>} />
        </Routes>
      
      </Container>

      <Footer />
      
    </Router>
  );
}

export default App;
