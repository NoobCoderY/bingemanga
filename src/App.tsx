import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import Anime from './pages/Anime'
import Manga from './pages/Manga/Manga'
import Genre from './pages/Genres/Genre'
import News from './pages/News/News'
import Watch from './pages/Watch'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
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
