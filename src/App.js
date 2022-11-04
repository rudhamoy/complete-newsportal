import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./fonts/FUTURA21.ttf"
import Home from './pages/Home';
import Author from './pages/Author';
import Archeive from './pages/Archeive';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/archeive" element={<Archeive />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
