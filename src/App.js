import {useState, useEffect} from 'react';
import './App.scss';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import {RiFileDownloadLine} from 'react-icons/ri';
import {IoIosCall} from 'react-icons/io'
import Sidebar from './components/Sidebar';
import person from './assets/person.jpg';
import developer from './assets/developer.svg';
import bscg from './assets/bsc_games_screenshot.png';
import nerdycruise from './assets/nerdycruise.png';
import weatherApp from './assets/weather-app.png';
import tBestFashion from './assets/t-best-fashion.png';
import Project from './components/Project';
import resume from './assets/Adekunle Michael Ajayi resume.pdf'
import WOW from "wowjs"
import "wowjs/css/libs/animate.css";
import Typewriter from 'typewriter-effect';

function App() {

    // get the screen width
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
      new WOW.WOW().init();
    }, [])

    // update the sreen width when screen size changes
    window.onresize = () => {
      setScreenSize(window.innerWidth)
  }

    const projectsData = [
      {
        name: "BSC GAMES",
        image: bscg,
        stacks: ["React.js", "web3.js", "Solidity", "Netlify"],
        description: "This is a Dapp. It is currently a work in progress. It is a blockchain based game where user places bet with a cryptocurrency (BNB) the user either win or lose, if a user wins, the winning amount is credited to the user's wallet, if otherwise, the amount used to place the bet is gone. However, in both cases, the user is payed certain amount of bscg (the native token of the platform) for placing a bet. check it out to see lots of other features",
        live_link: "https://hardcore-meninsky-707284.netlify.app/",
        repo_link: "https://github.com/BSC-GAMES/ui"
      },
      {
        name: "NerdyCruise",
        image: nerdycruise,
        stacks: ["React.js", "Node.js", "Express.js", "postgresql", "Heroku"],
        description: "This is also a work in progress. It is web web Application intended for Nigerian secondary school students, most especially those preparing for their SSCE and UTME. On this platform, they will able to take test and get result immediately the test is completed. In addition, they will also be able to manage their profiles and participate in a forum discussion that is strictly meant for academic talks only",
        live_link: "https://nerdycruise.herokuapp.com/",
        repo_link: "https://github.com/AjayiMike/Nerdycruise"
      },
      {
        name: "Weather App",
        image: weatherApp,
        stacks: ["HTML5", "CSS3", "Javascript", "Open weather map API", "Firebase"],
        description: "A progressive web application that tells the weather condition of any city in the world with the help of OPEN WEATHER MAP API",
        live_link: ": https://weather-pwa-aap.web.app/",
        repo_link: "https://github.com/AjayiMike/mercy-s-weather-app"
      },
      {
        name: "T-Best Fashion",
        image: tBestFashion,
        stacks: ["React.js", "Firebase"],
        description: "A website for a local fashion design shop",
        live_link: "https://t-best-fashion.web.app/",
        repo_link: "https://github.com/AjayiMike/t-best-fashion"
      }

    ]

  const showHideSidebar = (e) => {

    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger")
    const actualNav = document.querySelector(".navlinks-container")
    
    
    if(sidebar.classList.contains("show-backdrop")) {

      if(e.target !== e.currentTarget) return; //do nothing if anywhere else was clicked

      actualNav.classList.replace("show-nav", "hide-nav")
      hamburger.classList.remove("hamburger-rotate")

    
      setTimeout(() => {
        sidebar.classList.remove("show-backdrop")
      }, 300);



    } else {


        sidebar.classList.add("show-backdrop")
        hamburger.classList.add("hamburger-rotate")
      
      

      if(actualNav.classList.contains("hide-nav")) {

        actualNav.classList.replace("hide-nav", "show-nav")
        

      } else {
        actualNav.classList.add("show-nav")
      }

    }
  }

  

  window.onscroll = () => {
    const sections = document.querySelectorAll(".sections");

    sections.forEach(section => {

      const rect = section.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      if(elemTop < window.innerHeight && elemBottom >= 0) {
        const allLinks = document.querySelectorAll(".nav-links");

        allLinks.forEach(link => {
          link.classList.remove("active");
        })

        const sectionIdentifier = section.classList[1]

        switch (sectionIdentifier) {
          case "about-me-section":
            document.querySelector("#about-me").classList.add("active");
            break;
          
          case "projects-section":
            document.querySelector("#projects").classList.add("active");
            break;

          case "activities-section":
            document.querySelector("#activities").classList.add("active");
            break;

          case "contact-section":
            document.querySelector("#contact").classList.add("active");
            break;

          default:
            break;
        }
      }
      
    });
  }

  const linkClickHandler = (e) => {

    if(e.target.id === "resume" || e.target.classList.contains("active")) return;

    const allLinks = document.querySelectorAll(".nav-links");

    allLinks.forEach(element => {
        element.classList.remove("active")
    });

    e.target.classList.add("active")

  }

  return (
    <div className="App">
      <header>
        <h1 className = "site-logo"><span>$</span>ADEK<span>&gt;</span><span><Typewriter options = {{cursor: "_"}}/></span></h1>
        {screenSize < 678 ? 
          <GiHamburgerMenu className = "hamburger" onClick = {showHideSidebar} /> : 
          <nav className = "big-screen-nav">
            <ul>
              <li className = "link-items about-me" >
                  <a href = "#about-me-section" className = "nav-links" id = "about-me" onClick = {linkClickHandler}>About Me</a>
              </li>
              <li className = "link-items projects">
                  <a href = "#projects-section" className = "nav-links" id = "projects" onClick = {linkClickHandler}>Projects</a>
              </li>
              <li className = "link-items projects">
                  <a href = "#activities-section" className = "nav-links" id = "activities" onClick = {linkClickHandler}>Activities</a>
              </li>
              <li className = "link-items nav-items">
                  <a href = "#contact-section" className = "nav-links" id = "contact" onClick = {linkClickHandler}>Contact</a>
              </li>
              <li className = "link-items nav-items">
                  <a href = {resume} className = "nav-links resume" id = "resume" download onClick = {linkClickHandler}>Resume <RiFileDownloadLine className = "download-icon" /></a>
              </li>
            </ul>
          </nav>
        }
      </header>

      {screenSize < 678 ? <Sidebar showHideSidebar = {showHideSidebar} linkClickHandler = {linkClickHandler} /> : null }
      
      <div className = "top-fixed-container">
        {screenSize < 992 ? 
          <>
            <div className = "picture-container">
              <img src = {person} className = "top-picture" alt = "adekunle michael ajayi" />
              <span className = "bg-overlay"></span>
            </div>
            <div className = "greeting-section">
              <Typewriter
                onInit={(typewriter) => {
                typewriter
                .pauseFor(2500)
                .typeString("<h1 className = 'introduction' style = 'display:inline;'><span className = 'hi-there' style = 'letter-spacing: 3px; font-size: 1rem; color: #FFC392;'>Hi there!</span><br /> <span className = 'i-am' style = 'font-size: 1.5rem; letter-spacing: 3px; 1.8rem;color: rgba(#e5f4e3, .8)'>I am</span><br /> <span className = 'name' style = 'letter-spacing: 3px; font-size: 1.5rem'>ADEKUNLE MICHAEL A.</span> </h1>")
                .pauseFor(5000)
                .deleteChars(20)
                .typeString("<h1 style = 'display:inline;'><span style = 'letter-spacing: 3px; font-size: 1.5rem'>A Web Developer</span><h1>")
                .pauseFor(5000)
                .deleteChars(15)
                .typeString("<h1 style = 'display:inline;'><span style = 'letter-spacing: 3px; font-size: 1.5rem'>A Blockchain and DApp Enthusiast</span></h1>")
                .pauseFor(5000)
                .deleteAll()
                .start();
            }}
                options = {{
                  loop: true,
                }}
              
              />
            </div>
          </>
           : 

           <>
          <div className = "picture-container">
            <img src = {person} className = "top-picture" alt = "adekunle michael ajayi" />
            <span className = "bg-overlay"></span>
          </div>
          <div className = "content-container">
            <div className = "greeting-section">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("<h1 className = 'introduction' style = 'display:inline;'><span className = 'hi-there' style = 'letter-spacing: 3px; font-size: 1rem; color: #FFC392;'>Hi there!</span><br /> <span className = 'i-am' style = 'font-size: 1.5rem; letter-spacing: 3px; 1.8rem;color: rgba(#e5f4e3, .8)'>I am</span><br /> <span className = 'name' style = 'letter-spacing: 3px; font-size: 1.5rem'>ADEKUNLE MICHAEL A.</span> </h1>")
                    .pauseFor(5000)
                    .deleteChars(20)
                    .typeString("<h1 style = 'display:inline;'><span style = 'letter-spacing: 3px; font-size: 1.5rem'>A Web Developer</span><h1>")
                    .pauseFor(5000)
                    .deleteChars(15)
                    .typeString("<h1 style = 'display:inline;'><span style = 'letter-spacing: 3px; font-size: 1.5rem'>A Blockchain and DApp Enthusiast</span></h1>")
                    .pauseFor(5000)
                    .deleteAll()
                    .start();
                  }}
                options = {{
                  loop: true,
                }}
              
              />
            </div> 
            <div className = "call-to-action wow fadeInUp" data-wow-delay="1s">
              <p>I am a very skillful web developer, with knowldge and proficiency in building fast, scalable and responsive web applications as well as the ability of writing clean and maintainable code</p>
              <div className = "btn-groups">
                <a href = "mailto:ajayimikeofficial@gmail.com" className = "call-to-action-btn">Hire me</a>
                <a href = {resume} className = "resume" download> Download CV <RiFileDownloadLine className = "icon"/></a>
              </div>   
            </div>
          </div>
        </>
        }
      </div>
     
      <main className = "main-content">
          {screenSize < 992 ? 
          
          <div className = "call-to-action wow fadeInUp" data-wow-delay="1s">
              <p>I am a very skillful web developer, with knowldge and proficiency in building fast, scalable and responsive web applications as well as the ability of writing clean and maintainable code</p>
              <div className = "btn-groups">
                <a href = "mailto:ajayimikeofficial@gmail.com" className = "call-to-action-btn">Hire me</a>
                <a href = {resume} className = "resume" download> Download CV <RiFileDownloadLine/></a>
              </div> 
          </div> : null
          }
          

        <div className = "sections about-me-section wow fadeInUp" data-wow-delay="2s">
          <div>
            <a href = "#about-me-section" id="about-me-section" className = "section-anchor">about me section</a>
            <h2 className = "section-title">About Me</h2>
            <p className = "section-text">
              Hello! thanks for coming around. Adekunle Michael Ajayi is my name. I am a Web developer and currently studying Computer science at The Federal University of Technlogy Minna, Nigeria
            </p>
            <p className = "section-text">
              I recently picked interest in Web3 and i am elated to get an opportuninty to bridge my education with real world pratical experience that i can learn and grow from
            </p>
          </div>
          
          <div className = "image-container">
            <img src = {developer} alt = "a working developer" />
          </div>
        </div>

        <div className = "sections projects-section wow fadeInUp" data-wow-delay="1s">
          <a href = "#projects-section" id="projects-section" className = "section-anchor">projects section</a>
          <h2 className = "section-title">Projects</h2>
          <p>These are some of the project i have worked on over the years in my developer journey</p>

          <div className = "projects-gallery">
           { projectsData.map((projectData, index) => {
            return <Project data = {projectData} key = {index} />
            })}
          </div>
        </div>

        <div className = "sections activities-section wow fadeInUp" data-wow-delay="1s">
          <a href = "#activities-section" id = "activities-section" className = "section-anchor">activities section</a>
          <h2 className = "section-title">Activities</h2>
        </div>

        <div className = "sections contact-section wow fadeInUp" data-wow-delay="1s">
          <a href = "#contact-section" id = "contact-section" className = "section-anchor">contact section</a>
          <div className = "text-section">
            <h2 className = "section-title">Contact</h2>
            <p className = "section-text">
              Want to get in touch? that's great!
            </p>
            <p className = "section-text">
              You can reach me through any of the medium listed below and let's talk about your next big project idea
            </p>
          </div>
          
          <ul className = "contact-links">
            <li className = "contact-link-item">
              <a href = "mailto:ajayimikeofficial@gmail.com"><AiOutlineMail className = "icon" /></a>
            </li>
            <li className = "contact-link-item">
              <a href = "https://github.com/AjayiMike"><AiFillGithub className = "icon" /></a>
            </li>
            <li className = "contact-link-item">
              <a href = "https://www.linkedin.com/in/adekunle-ajayi-a0b256208" target="_blank" rel="noreferrer"><AiFillLinkedin className = "icon" /></a>
            </li>
            <li className = "contact-link-item">
              <a href = "tel:07089691306" targer = "_blank"><IoIosCall className = "icon" /></a>
            </li>
          </ul>
          
        </div>
            
        
      </main>
      < footer>
          <p>Developed by: <span>Adekunle Michael Ajayi</span></p>
          <p>Built using: <span>React.js</span></p>
          <p>Hosted on: <span>Netlify</span></p>
        </footer>
      
    </div>
  );
}

export default App;