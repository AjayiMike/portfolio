import {AiFillGithub} from 'react-icons/ai';
import {FiMonitor} from 'react-icons/fi'
const Project = ({data: {name, image, stacks, description, live_link, repo_link}}) => {
    return(
        <div className = "project wow fadeInUp" data-wow-delay="1s">
            <div className = "preview-image-container">
                <img src = {image} alt = {`preview of ${name}`} />
            </div>
            <div className = "project-details">
                <h3 className = "project-name">{name}</h3>
                <ul className = "stacks">
                    {stacks.map(stack => {
                       return <li key = {Math.random()}>{stack}</li>
                    })}
                </ul>
                <p className = "description">{description}</p>
                <div className = "link-group">
                    <a href = {repo_link} className = "link" target="_blank" rel="noreferrer"><AiFillGithub className = "link-icon" /> <span>GitHub</span></a>
                    <a href = {live_link} className = "link" target="_blank" rel="noreferrer"> <FiMonitor className = "link-icon" /> <span>Demo</span></a>
                </div>
            </div>
        </div>
    );
}

export default Project;