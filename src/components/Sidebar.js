import {RiFileDownloadLine} from 'react-icons/ri';
import resume from '../assets/Adekunle Michael Ajayi resume.pdf';

const Sideber = ({showHideSidebar, linkClickHandler}) => {
    
  return (
    <nav className="sidebar" onClick = {showHideSidebar} >
        <div className = "navlinks-container">
            <div className = "wrapper-for-nav">
                <ul>
                    <li className = "link-items about-me" >
                        <a href = "#about-me-section" className = "nav-links" id = "about-me" onClick = {(e) => {linkClickHandler(e); showHideSidebar(e) }}>About Me</a>
                    </li>
                    <li className = "link-items projects">
                        <a href = "#projects-section" className = "nav-links" id = "projects" onClick = {(e) => {linkClickHandler(e); showHideSidebar(e) }}>Projects</a>
                    </li>
                    <li className = "link-items projects">
                        <a href = "#activities-section" className = "nav-links" id = "activities" onClick = {(e) => {linkClickHandler(e); showHideSidebar(e) }}>Activities</a>
                    </li>
                    <li className = "link-items nav-items">
                        <a href = "#contact-section" className = "nav-links" id = "contact" onClick = {(e) => {linkClickHandler(e); showHideSidebar(e) }}>Contact</a>
                    </li>
                    <li className = "link-items nav-items">
                        <a href = {resume} className = "nav-links resume" id = "resume" download onClick = {(e) => {linkClickHandler(e); showHideSidebar(e) }}>Resume <RiFileDownloadLine className = "download-icon" /></a>
                    </li>
                </ul>
            </div>
            
            <div className = 'wrapper-for-bottom'>
                <div>
                </div>
            </div>
            
        </div>
    </nav>
  );
}

export default Sideber;
