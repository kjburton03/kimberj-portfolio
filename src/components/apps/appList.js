import { Link } from "react-router-dom"
import "./appList.css"
export const AppList = () => {
    return <> 
    {/* <h2>List of Apps</h2> */}
    {/* <div> work work work </div> */}
    <div className="projects">
    <h2> Projects </h2>
    <Link className="app__link" to="/NashMurals">
    <img src="https://i.imgur.com/Iu1EgKL.png" alt="nash murals screen shot" />
    </Link>
    <Link className="app__link" to="/Responsibly">
    <img src="https://i.imgur.com/xgXFilT.jpg" alt="responsibly Irresponsible" />
    </Link>
    <Link className="app__link" to="/NashVols">
    <img src="https://i.imgur.com/JcOKMwP.png" alt="nashvols " />
    </Link>
    </div>

    </>
}

