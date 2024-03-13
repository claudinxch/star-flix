import './header.css'
import { Link } from 'react-router-dom';

function Header({ currentPath }) {
    return(
        <header>
            <div className="head">
                <Link className="logo" to="/"><p>Star Flix</p></Link>
                <Link className="favorites" to="/favorites">My movies</Link>
            </div>
            
            <nav className='navbar'>
                <Link className={currentPath === '/' ? 'active' : ''} to={`/`}>Now playing</Link>
                <Link className={currentPath === '/top-rated' ? 'active' : ''} to={`/top-rated`}>Top Rated</Link>
                <Link className={currentPath === '/upcoming' ? 'active' : ''} to={`/upcoming`}>Upcoming</Link>
            </nav>
        </header>
    )
}

export default Header;