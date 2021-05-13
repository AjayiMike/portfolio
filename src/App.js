import './App.scss';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import {RiFileDownloadLine} from 'react-icons/ri';
import {IoIosCall} from 'react-icons/io'
import Sidebar from './components/Sidebar';
import person from './assets/person.jpg';
import developer from './assets/developer.svg';
import bscg from './assets/bsc_games_screenshot.png'
import Project from './components/Project'

function App() {

    const projectsData = [
      {
        name: "BSC GAMES",
        image: bscg,
        stacks: ["React.js", "web3.js", "Solidity", "Netlify"],
        description: "This is a Dapp. A blockchain based game where user places bet with a cryptocurrency (BNB) the user either win or lose, if a user wins, the winning amount is credited to the user's wallet, if otherwise, the amount used to place the bet is gone. However, in either cases, the user is payed certain amount of bscg (the native token of the platform) for placing a bet. check it out to see lots of other features",
        live_link: "https://hardcore-meninsky-707284.netlify.app/",
        repo_link: "https://github.com/BSC-GAMES/ui"
      },
      {
        name: "BSC GAMES",
        image: bscg,
        stacks: ["React.js", "web3.js", "Solidity", "Netlify"],
        description: "This is a Dapp. A blockchain based game where user places bet with a cryptocurrency (BNB) the user either win or lose, if a user wins, the winning amount is credited to the user's wallet, if otherwise, the amount used to place the bet is gone. However, in either cases, the user is payed certain amount of bscg (the native token of the platform) for placing a bet. check it out to see lots of other features",
        live_link: "https://hardcore-meninsky-707284.netlify.app/",
        repo_link: "https://github.com/BSC-GAMES/ui"
      },
      {
        name: "BSC GAMES",
        image: bscg,
        stacks: ["React.js", "web3.js", "Solidity", "Netlify"],
        description: "This is a Dapp. A blockchain based game where user places bet with a cryptocurrency (BNB) the user either win or lose, if a user wins, the winning amount is credited to the user's wallet, if otherwise, the amount used to place the bet is gone. However, in either cases, the user is payed certain amount of bscg (the native token of the platform) for placing a bet. check it out to see lots of other features",
        live_link: "https://hardcore-meninsky-707284.netlify.app/",
        repo_link: "https://github.com/BSC-GAMES/ui"
      },
      {
        name: "BSC GAMES",
        image: bscg,
        stacks: ["React.js", "web3.js", "Solidity", "Netlify"],
        description: "This is a Dapp. A blockchain based game where user places bet with a cryptocurrency (BNB) the user either win or lose, if a user wins, the winning amount is credited to the user's wallet, if otherwise, the amount used to place the bet is gone. However, in either cases, the user is payed certain amount of bscg (the native token of the platform) for placing a bet. check it out to see lots of other features",
        live_link: "https://hardcore-meninsky-707284.netlify.app/",
        repo_link: "https://github.com/BSC-GAMES/ui"
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
        }
      }
      
    });
  }


  return (
    <div className="App">
      <header>
        <h1 className = "site-logo">ADEK>_</h1>
        <GiHamburgerMenu className = "hamburger" onClick = {showHideSidebar} />
      </header>
      <Sidebar showHideSidebar = {showHideSidebar} />
      <div className = "top-fixed-image-container">
          <img src = {person} className = "top-picture" alt = "adekunle michael ajayi" />
      </div>
      <div className = "greeting-section">
        <h1 className = "introduction">
          <span className = "hi-there">Hi there,</span>
          <span className = "i-am">I am</span>
          <span className = "name">ADEKUNLE MICHAEL A.</span>
        </h1>
      </div>
      <main className = "main-content">
          
          <div className = "call-to-action">
              <p>I am a very talented web developer, with knowldge and proficiency in building fast, scalable and responsive web applications as well as the ability of writing clean and maintainable code</p>
              <div className = "btn-groups">
                <a href = "mailto:ajayimikeofficial@gmail.com" className = "call-to-action-btn">Hire me</a>
                 <a href = "." className = "resume">Resume <RiFileDownloadLine/></a>
              </div> 
          </div>

        <div className = "sections about-me-section">
          <a href = "#about-me-section" id="about-me-section" className = "section-anchor"></a>
          <h2 className = "section-title">About Me</h2>
          <p className = "section-text">
            Hello! thanks for coming around. Adekunle Michael Ajayi is my name. I am a Web developer and currently studying Computer science at The Federal University of Technlogy Minna, Nigeria
          </p>
          <p className = "section-text">
            I am elated to get an opportuninty to bridge my education with real world pratical experience that i can learn and grow from
          </p>
          <div className = "image-container">
            <img src = {developer} alt = "a working developer" />
          </div>
        </div>

        <div className = "sections projects-section">
           <a href = "#about-me-section" id="projects-section" className = "section-anchor"></a>
          <h2 className = "section-title">Project</h2>
          <p>These are some of the project i have worked on over the years in my developer journey</p>

          <div className = "projects-gallery">
           { projectsData.map((projectData, index) => {
            return <Project data = {projectData} key = {index} />
            })}
          </div>
        </div>

        <div className = "sections activities-section">
          <a href = "#about-me-section" id = "activities-section" className = "section-anchor"></a>
          <h2 className = "section-title">Activities</h2>
        </div>

        <div className = "sections contact-section">
          <a href = "#about-me-section" id = "contact-section" className = "section-anchor"></a>
          <div className = "text-section">
            <h2 className = "section-title">Contact</h2>
            <p className = "section-text">
              Wanna get in touch? that's great!
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
            
        <footer>
          <p>Developed by: <span>Adekunle Michael Ajayi</span></p>
          <p>Built using: <span>React.js</span></p>
          <p>Hosted on: <span>Netlify</span></p>
        </footer>
      </main>
      
      
    </div>
  );
}

export default App;