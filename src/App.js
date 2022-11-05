import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./fonts/FUTURA21.ttf"
import Home from './pages/Home';
import Author from './pages/Author';
import Archeive from './pages/Archeive';
import Layout from './components/layout/Layout';
import Category from './pages/Category';
import SingleNews from './pages/SingleNews';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/archive" element={<Archeive />} />
          <Route path="/category" element={<Category />} />
          <Route path="/single_news" element={<SingleNews />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
