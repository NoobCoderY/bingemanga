import { useNavigate } from 'react-router-dom';
import './Navbar.scss'
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='navbar__container'>
       <div className="nav__icon">
        BingeManga
       </div>

       <div className="nav__navigation">
        <li onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate('/anime')}>Anime</li>
        <li onClick={()=>navigate('/manga')}>Manga</li>
        <li onClick={()=>navigate('/genre')}>Genres</li>
        <li onClick={()=>navigate('/news')}>News</li>
       </div>

       <div className="nav__search">
        <input type="text" placeholder='Search Anime Or Manga' />
        <AiOutlineSearch size={25} color='#000000'/>
       </div>
    </nav>
  )
}

export default Navbar