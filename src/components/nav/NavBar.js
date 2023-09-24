import { Link, useNavigate } from "react-router-dom"
import kimberJCoding from "./kimberJCoding.png"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (

        <>
        <div className="navbar">
        
            <p className="kimberj">
                <Link className="navbar__link" to="/home">
                <img src={kimberJCoding} className="kimberj" />

                </Link>
            </p>
        
        <ul className="navs">


            <li className="navbar__item">
                <Link className="navbar__link" to="/aboutMe"> About Me
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/appList">Projects</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/skills">Skills</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/contactKimberj">Contact </Link>
            </li>
        </ul>
        </div>
        </>
    )
}

