import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ProjectsWrapper = styled.div`
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const ProjectCard = styled(animated.div)`
  background: white;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  }
`;

const ProjectTitle = styled.h3`
  color: #3498db;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

const ProjectPeriod = styled.p`
  color: #7f8c8d;
  font-style: italic;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
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
];

const Projects = () => {
    const trail = useTrail(projects.length, {
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: config.wobbly,
    });

    return (
        <ProjectsWrapper>
            <h2>Projects and Work Experience</h2>
            {trail.map((style, index) => (
                <ProjectCard key={index} style={style}>
                    <ProjectTitle>{projects[index].title}</ProjectTitle>
                    <ProjectDescription>{projects[index].description}</ProjectDescription>
                    {projects[index].period && <ProjectPeriod><strong>Period:</strong> {projects[index].period}</ProjectPeriod>}
                    {projects[index].github && <ProjectLink href={projects[index].github} target="_blank" rel="noopener noreferrer">View on GitHub</ProjectLink>}
                </ProjectCard>
            ))}
        </ProjectsWrapper>
    );
};

export default Projects;