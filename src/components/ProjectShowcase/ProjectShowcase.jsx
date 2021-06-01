//modules
import React from 'react'

//files
import './ProjectShowcase.scss';

function ProjectShowcase({title, description, technologies, previewImage, projectLink}) {
    return (
        <div className="project-showcase" id={`${title}`}>
            <div className="project-showcase__project-preview">
                <img 
                    src={
                            previewImage ? previewImage :
                            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                        }
                    alt="project-preview-image" 
                    className="project-showcase__project-preview-image"
                />
            </div>
            <div className="project-showcase__project-details">
                <h2 className="project-showcase__title">
                    {title ? title : "title not found"}
                </h2>
                <p className="project-showcase__paragraph">
                    {description ? description : "description not found"}
                </p>
                <h3 className="project-showcase__subtitle">
                    technologies used:
                </h3>
                <p className="project-showcase__paragraph">
                    {technologies ? technologies : "technologies not listed"}
                </p>
                <a href={projectLink ? projectLink : "#"} className="project-showcase__link" target="_blank">
                    <button className="project-showcase__button-outlined">
                        {projectLink ? "view project" : "link not functional"}
                    </button>
                </a>
                
            </div>
        </div>
    )
}

export default ProjectShowcase
