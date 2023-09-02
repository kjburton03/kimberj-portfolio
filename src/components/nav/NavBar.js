import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">

            <li className="navbar__item">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/aboutMe">About Me</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/appList">Projects</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/skills">Skills</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/contactKimberj">Contact </Link>
            </li>
        </ul>
    )
}

