import React, {useState} from "react";
import "../../styles/Projects.css";
import projects from "../projects";
import ClearIcon from '@mui/icons-material/Clear';

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    function showModal(project) {
        setSelectedProject(project);
    }

    function closeModal() {
        setSelectedProject(null);
    }
    return (
        <div id="projects" className="projects-container">
             <h1>My Projects</h1>
             <div className="cards">
             <div className="my-projects">
                {projects.map((project) => {
                    return (
                        <div className="project-card">
                    <img key= {project.id} src={project.img} alt=""/>
                    <p>Name: {project.name}</p>
                    <button onClick={() => showModal(project)} className="view-button">View More</button>
                    </div> 
                    )
                })
                }
             </div>
   
             </div>
             {selectedProject && (
    <div className="modal">
        <div className="modal-content">
            <h2>Name: {selectedProject.name}</h2>
            {typeof selectedProject.tech === "object" ? (
                <div>
                    <p>Technologies used for:</p>
                <ul>
                    {selectedProject.tech.frontend && (
                        
                        <li><strong>Frontend:</strong> {selectedProject.tech.frontend}</li>
                    )}
                    {selectedProject.tech.backend && (
                        <li><strong>Backend:</strong> {selectedProject.tech.backend}</li>
                    )}
                </ul>
                </div>
            ) : (
                <p>Technologies used: {selectedProject.tech}</p>
            )}
            <p className="details"><strong>About the project:</strong> {selectedProject.details}</p>
            <button onClick={closeModal}>Close <ClearIcon/></button>
        </div>
    </div>
)}
        </div>
        
       
    )
}

export default Projects;