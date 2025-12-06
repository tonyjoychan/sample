import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projects-list">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;