import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import Anime from './pages/Anime/Anime';
import Manga from './pages/Manga/Manga';
import Genre from './pages/Genres/Genre';
import News from './pages/News/News';
import Watch from './pages/Watch/Watch';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/anime" element={<Anime />} />
              <Route path="/manga" element={<Manga />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/news" element={<News />} />
              <Route path="/watch/:id" element={<Watch />} />
            </Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
