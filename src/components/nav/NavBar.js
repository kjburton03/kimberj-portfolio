import { Link, useNavigate } from "react-router-dom"
import kimberJCoding from "./kimberJCoding.png"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    // const pageHeader = () => {
    //     let displayName = ""
    //     if (!window.location.pathname.includes("login")) {
    //         let thisPage = window.location.pathname.split("/")
    //         if (thisPage.length === 2) {
    //             if (thisPage[1] === "" || thisPage[1] === "home") {
    //                 displayName = "Nash Murals"
    //             } else if (thisPage[1] === "") {
    //                 displayName = "Neighborhoods"
    //             } else if (thisPage[1] === "murals") {
    //                 displayName = "Murals"
    //             }
    //         } else if (thisPage.length === 3) {
    //             let [, thisNamePlus] = window.location.search.split("=")
    //             let [thisName,] = thisNamePlus.split('&')
    //             thisName = decodeURIComponent(thisName)
    //             if (thisPage[1] === "hood" || thisPage[1] === "murals") {
    //                 displayName = thisName
    //             }
    //         }
    //         else { displayName = "I'm pretty sure we're lost." }
    //         return displayName
    //     }
    // }

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

