import "./aboutMe.css"

export const AboutMe = () => { 
    // document.addEventListener('DOMContentLoaded',function(event){
    //     // array with texts to type in typewriter
    //     var dataText = [ "Utrecht.", "Full Service.", "Webdevelopment.", "Wij zijn Codefield!"];
        
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        // function typeWriter(text, i, fnCallback) {
        //   // chekc if text isn't finished yet
        // if (i < (text.length)) {
        //     // add next character to h1
        // document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
        //     // wait for a while and call this function again for next character
        //     setTimeout(function() {
        //     typeWriter(text, i + 1, fnCallback)
        //     }, 100);
        // }
        //   // text finished, call callback if there is a callback function
        // else if (typeof fnCallback == 'function') {
        //     // call callback after timeout
        //     setTimeout(fnCallback, 700);
        // }
        // function typeWriter(text, i, fnCallback) {
        //     const h1 = document.querySelector("h1");
        //     const span = document.createElement("span");
        //     h1.appendChild(span);
        
        //     if (i < text.length) {
        //     span.textContent += text.charAt(i);
        
        //     setTimeout(function () {
        //         typeWriter(text, i + 1, fnCallback);
        //     }, 100);
        //     } else if (typeof fnCallback == "function") {
        //     setTimeout(fnCallback, 700);
        //     }
        // }
        // // start a typewriter animation for a text in the dataText array
        // function StartTextAnimation(i) {
        // if (typeof dataText[i] == 'undefined'){
        //     setTimeout(function() {
        //         StartTextAnimation(0);
        //     }, 20000);
        // }
        //    // check if dataText[i] exists
        // if (i < dataText[i].length) {
        //     // text exists! start typewriter animation
        // typeWriter(dataText[i], 0, function(){
        //      // after callback (and whole text has been animated), start next text
        //     StartTextAnimation(i + 1);
        // });
        // }
        // }
        // // start the text animation
        // StartTextAnimation(0);
    // });
    return <>
        <h1>Kimberly Burton</h1>
        <a href="https://drive.google.com/file/d/1HR-ZIpAh-zq8lkZV5ePbG6QSJb94vmWr/view?usp=sharing" target="_blank" className="button" > Resume </a>
        <a href="https://github.com/kjburton03" target="_blank" className="button" >GitHub</a>
        <a href="https://www.linkedin.com/in/kimberburton/" target="_blank" className="button" > LinkedIn </a>
        <div className="about__sec">
        <p> My journey in software development began in 2004 when I started styling my personal Xanga and MySpace pages with the trendiest backgrounds and captivating glitter words. After progressing through high school and spending a decade as a bartender, I've found myself immersed in software development once more, enjoying it more than ever before.
        </p>
        <p> In 2019, I dived back into the world of coding, rekindling my love for software development. This passion led me to a pivotal decision in 2022 when I enrolled at Nashville Software School. Fast forward to 2023, and I proudly emerged as a full-stack software developer, equipped with the skills and determination to make a difference in the tech world. </p>
        <p>
        My aspirations are firmly rooted in aiding small businesses by crafting websites that enhance their online presence and drive success. Once I have more experience, I cannot wait to delve into the realm of ethical hacking, with a particular focus on combating sex trafficking in America. </p>
        <p>
        I currently split my time between two incredible places, Nashville and Georgia. This dual lifestyle allows me to enjoy the best of both worlds – the bustling energy of city life in Nashville and the serene beauty of the countryside in Georgia. </p>
        <p>In my free time you can find me bartending in Atlanta, going to shows in Nashville, house hunting in Rome, or fixing up my parents house in Kennesaw, or hiking with my dog at the closest park</p>
        <p>
        Thanks for stopping by and getting to know a bit about me!</p>
        </div>
    </>
}

    
    // const text = document.querySelector(".sec-text");
    // const textLoad = () => {
    //     setTimeout(() => {
    //     text.textContent = "  Bartending in Atlanta";
    //     }, 0);
    //     setTimeout(() => {
    //     text.textContent = "  Making websites for small businesses in Nashville";
    //     }, 4000);
    //     setTimeout(() => {
    //     text.textContent = "  Fixing up my parents house in Kennesaw";
    //     }, 8000);
    // }
    // textLoad();
    // setInterval(textLoad, 12000);
    
//     return <>
//         {/* <h1> she a baddy </h1>
//         <h3> that is all.</h3> */}

//         <h1>Kimberly Burton</h1>
//         <h4>Atlanta, Georgia </h4>
//             <div className="boody">
//             <div className="container">
//                 <span className="text first-text"> Depending on the day you can find me</span>
//                 <span className="text sec-text"></span>
//             </div>



//             </div>
//             {/* <ul>
//                 <li>  </li>
//                 <li></li>
//                 <li>  </li>
//                 <li> House hunting in Rome </li>
//                 <li> Tech Meetups Online </li>
//                 <li> Hackathons on Zoom </li>
//                 <li> Coding at the nearest coffee shop with a large mug of green tea </li>
//                 <li> Refurnishing in my dad's garage </li>
//             </ul>
//         <h4> about me </h4>
//             <p> 
//             spent the last decade bartending from fine dining to 
//             </p>
//         <h4> about my coding journey </h4>
//         <p>
//             I started coding in 2005 making the best backgrounds for my MySpace and Xanga accounts. 
//         </p> */}

//     </>
// }