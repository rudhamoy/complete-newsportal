import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./fonts/FUTURA21.ttf"
import Home from './pages/Home';
import Author from './pages/Author';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
