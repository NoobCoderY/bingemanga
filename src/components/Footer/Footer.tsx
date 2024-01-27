import {
  FaFacebookSquare,
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import './Footer.scss'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="footer__box">
      <section className="footer__section__1">
        <div className="footer__nav">
          <p className="footer__heading">Connect With Us</p>
          <a href="#">
            <FaDiscord />
            <p>Discord</p>
          </a>
          <a href="#">
            <FaYoutube />
            <p>Youtube</p>
          </a>
          <a href="#">
            <FaInstagram />
            <p>Instagram</p>
          </a>
          <a href="#">
            <FaTwitter />
            <p>Twitter</p>
          </a>
          <a href="#">
            <FaFacebookSquare />
            <p>Facebook</p>
          </a>
        </div>
        <div className="footer__nav">
          <p className="footer__heading">Navigation</p>
          <li>Home</li>
          <li>Browse Anime</li>
          <li>Browse Manga</li>
          <li>Genres</li>
          <li>News</li>
        </div>
        <div className="footer__nav">
          <p className="footer__heading">Binge Manga</p>
          <li>About</li>
          <li>Help/FAQ</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>News</li>
        </div>
        <div className="footer__nav">
          <p className="footer__heading">Account</p>
          <li onClick={()=>navigate('/signup')}>Create Account</li>
          <li onClick={()=>navigate('/login')}>Log In</li>
        </div>
      </section>

      <section className="footer__section__2">
        <p className="footer__logo">Binge Manga</p>
        <p className="footer__copyright">
          Copyright © Bingemanga.com. All Rights Reserved
        </p>
        <p className="footer__disclaimer">
          Disclaimer: This site does not store any files on its server. All
          contents are provided by non-affiliated third parties.
        </p>
      </section>
    </footer>
  )
}

export default Footer
