import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBriefcase,faDiagramProject,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Header.css'
// import { faGithub,faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'


function Header(){

    





return (
    <header>
        <nav>
            <ul className="list_right">
                <li><a className="icons" href="#after_hero"><FontAwesomeIcon  icon={faBriefcase} /></a></li>
                <li><a className="icons" href="#after_work"><FontAwesomeIcon  icon={faDiagramProject} /></a></li>
                {/* <li><a className="icons" href=""><FontAwesomeIcon  icon={faAddressCard} /></a></li> */}
            </ul>
            
            <ul className="list_left">
                <li> <a className="icons" href=""><FontAwesomeIcon  icon={faGithub} /></a></li>
                <li> <a className="icons" href="https://www.linkedin.com/in/sarvadhnya-chaure-361a9b31a/"><FontAwesomeIcon  icon={faSquareLinkedin } /></a></li>
                <li> <a className="icons" href="mailto:yourname@example.com"><FontAwesomeIcon  icon={faEnvelope } /></a></li>
            </ul>
        </nav>
    </header>
)

}

export default Header;