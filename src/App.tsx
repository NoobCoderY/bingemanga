import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import AnimeList from './pages/AnimeList'
import MangaList from './pages/MangaList'
import Genre from './pages/Genres/Genre'
import News from './pages/News'
import Watch from './pages/Watch'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import Manga from './pages/Manga'
import Chapter from './pages/Chapter'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/animelist" element={<AnimeList />} />
            <Route path="/mangalist" element={<MangaList />} />
            <Route path="/manga/:id" element={<Manga />} />
            <Route path="/manga/:id/:chapter" element={<Chapter />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/news" element={<News />} />
            <Route path="/watch/:id" element={<Watch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
