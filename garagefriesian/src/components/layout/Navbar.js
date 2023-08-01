import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/GHorseF.png'

function Navbar() {
    return(
        <nav>
            <Container>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/educacao">Educação</Link>
                    </li>
                    <li>
                        <Link to="/categoria">Categoria</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/sobrenos">Sobre Nos</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar;