import "./skills.css"
import html5 from "../../assets/html5.png"
import css3 from "../../assets/css3.png"
import django from "../../assets/django.png"
import github from "../../assets/github.png"
import javascript from "../../assets/javascript.png"
import postman from "../../assets/postman.png"
import python from "../../assets/python.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"


export const Skills = () => {
    return <>
        <h1>what can she dooooo</h1>
        <h3 className="skill__titles"> Tech Stack </h3>

        <h3 className="skill__titles">Utilities</h3>
        <div className="tech__stack__container">

        <img src={css3} className="tech__stack" />
        <img src={html5} className="tech__stack" />
        <img src={javascript} className="tech__stack" />
        <img src={react} className="tech__stack" />
        <img src={tailwind} className="tech__stack" />
        
        <img src={python} className="tech__stack" />
        <img src={django} className="tech__stack" />

        <img src={postman} className="tech__stack" />

        <img src={github} className="tech__stack" />

        </div>
    </> 

}