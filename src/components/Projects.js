import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTrail, animated } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ProjectsWrapper = styled.div`
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
`;

const ProjectCard = styled(animated.div)`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const projects = [
    {
        title: "Propmoolah - Consulting Software Engineer",
        description: "Designed and developed a React-Django Web Application for estate agents, created an end-to-end deployment pipeline, and integrated GPT4 and ML algorithms to improve lead generation.",
        period: "Mar 2024 - Present"
    },
    {
        title: "Jun Group - Software Engineer - Data",
        description: "Developed ETL processes, enhanced ML models, executed data & ML workflows, and implemented custom dashboards to improve ad campaign efficiency and effectiveness.",
        period: "Jan 2023 - Feb 2024"
    },
    {
        title: "The New York Times - Software Engineer",
        description: "Integrated ML & GenAI algorithms, developed services for subscriber-acquisition campaigns, and maintained data pipelines using BigQuery, Airflow & Docker.",
        period: "Nov 2021 - Jan 2023"
    },
    {
        title: "Paychex Inc. - Software Engineer II",
        description: "Developed Time and Attendance Services, integrated Google Analytics, and designed test plans for Paychex Flex UI across multiple platforms.",
        period: "July 2021 - Nov 2021"
    },
    {
        title: "TruWeather Solutions - Software Engineering Intern",
        description: "Built and managed APIs using Sails.js framework, integrated weather APIs, and developed a user interface for clients to view products and services.",
        period: "Nov 2019 - Sept 2020"
    },
    {
        title: "NOTION",
        description: "Designed a full technology stack for an inter-college tech fest website using Java, Node.js, and Angular.js, used by over 20K students. Features included online registration, payment gateway, and responsive information.",
        github: "https://github.com/yourusername/notion-project"
    },
];

const Projects = () => {
    const trail = useTrail(projects.length, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    return (
        <ProjectsWrapper>
            <h2>Projects and Work Experience</h2>
            {trail.map((style, index) => (
                <ProjectCard key={index} style={style}>
                    <h3>{projects[index].title}</h3>
                    <p>{projects[index].description}</p>
                    {projects[index].period && <p><strong>Period:</strong> {projects[index].period}</p>}
                    {projects[index].github && <a href={projects[index].github} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
                </ProjectCard>
            ))}
        </ProjectsWrapper>
    );
};

export default Projects;