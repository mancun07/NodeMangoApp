import {useContext, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {NavbarContext} from '../context/navbar/NavbarContextProvider'

const Navbar = () => {
    const {transparentColor, sidenavIsOpened, toggleMenu} = useContext(NavbarContext)
    const sidenav = useRef(null);

const handleSideMenu = () => {
      if (window.innerWidth > 587) {
           sidenav.current.classList.remove('sidenav-is-active');
    }
}

useEffect(() => {
    window.addEventListener('resize', handleSideMenu);

    return () => {
    window.removeEventListener('resize', handleSideMenu);
    } 
}, [])
   

    return (
        <header>
        <div className={`navbar-wrapper ${transparentColor ? 'navbar-wrapper__transparent' : ''}`}>
            <div className="container">
                <div className="navbar">
                    <div className="sidenav-trigger" onClick={toggleMenu}></div>
                    <h1 className="navbar__logo">Leather Jackets</h1>
                    <nav className="navbar__nav">
                        <div className="navbar__nav__menu">
                            <ul>
                                <li><Link to={'/'}>ГЛАВНАЯ</Link></li>
                                <li><Link to={'/news'}>НОВОСТИ</Link></li>
                                <li><Link to={'/photos'}>ФОТО</Link></li>
                                <li><Link to={'/video'}>ВИДЕО</Link></li>
                                <li><Link to={'/audio'}>АУДИО</Link></li>
                            </ul>
                        </div>
                        <div className="navbar__nav__socials">
                            <ul>
                                <li><a href="https://vk.com/kkurtki" target="blank"><i className="fab fa-vk"></i></a></li>
                                <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="https://www.instagram.com/music_jackets/" target="blank"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    
        <div ref={sidenav} className={`sidenav ${sidenavIsOpened ? 'sidenav-is-active' : ''}`} id="mobile-demo">
            <ul className="sidenav__nav__menu">
                <li><Link to={'/'} onClick={toggleMenu}>ГЛАВНАЯ</Link></li>
                <li><Link to={'/news'} onClick={toggleMenu}>НОВОСТИ</Link></li>
                <li><Link to={'/photos'} onClick={toggleMenu}>ФОТО</Link></li>
                <li><Link to={'/video'} onClick={toggleMenu}>ВИДЕО</Link></li>
                <li><Link to={'/audio'} onClick={toggleMenu}>АУДИО</Link></li>
            </ul>
     
        <ul className="sidenav__nav__socials">
            <li><a href="https://vk.com/kkurtki" target="blank"><i className="fab fa-vk fa-2x"></i></a></li>
            <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fab fa-youtube fa-2x"></i></a></li>
            <li><a href="https://www.instagram.com/music_jackets/" target="blank"><i className="fab fa-instagram fa-2x"></i></a></li>
        </ul>
        </div>
    </header>
    )
}

export default Navbar
