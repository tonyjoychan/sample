import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    liveDemoUrl?: string;
    repositoryUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveDemoUrl, repositoryUrl }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                {liveDemoUrl && <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">View Repository</a>}
            </div>
        </div>
    );
};

export default ProjectCard;