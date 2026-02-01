import React from 'react';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

const ProjectsWrapper = styled.div`
  min-height: calc(100vh - 60px);
  padding: 60px 40px;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  color: #64ffda;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 50px 0;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #64ffda, rgba(100, 255, 218, 0.1));

    @media (max-width: 768px) {
      left: 15px;
    }
  }
`;

const ProjectCard = styled(animated.div)`
  position: relative;
  margin-left: 40px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: -46px;
    top: 35px;
    width: 12px;
    height: 12px;
    background: #64ffda;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  }

  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    margin-left: 50px;

    &::before {
      left: -41px;
    }
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const CompanyName = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 0;
  font-weight: 600;
`;

const Role = styled.p`
  color: #64ffda;
  font-size: 1rem;
  margin: 5px 0 0 0;
  font-weight: 500;
`;

const Period = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  white-space: nowrap;
`;

const Description = styled.ul`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 20px 0 0 0;
  padding-left: 20px;

  li {
    margin-bottom: 10px;

    &::marker {
      color: #64ffda;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;

const TechTag = styled.span`
  color: #64ffda;
  font-size: 0.8rem;
  padding: 4px 12px;
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 15px;
`;

const projects = [
  {
    company: "Doximity",
    role: "Senior Software Engineer, Data Platform",
    period: "Oct 2025 - Present",
    highlights: [
      "Architected internal Python-based data platform services enabling 100+ engineers to execute workflows at scale, reducing infrastructure setup time by 50-60%",
      "Designed CLI analytics service using Click, Hex, S3 & Snowflake for tracking usage patterns, making product decisions 27% faster",
      "Developed programmatic pyproject.toml consolidation layer reducing manual updates for 1000+ projects",
      "Built in-house Snowflake solutions for query health tracking, increasing dev productivity by 40%",
      "Contributed to Airflow AI project enabling Slack-based DAG debugging, reducing manual debugging time by 2-3 hours daily"
    ],
    tech: ["Python", "Snowflake", "Airflow", "S3", "Click", "GPT"]
  },
  {
    company: "Apple (via Worldscape)",
    role: "Software Engineer (Contract)",
    period: "Oct 2024 - Oct 2025",
    highlights: [
      "Built scalable Python SDKs for ML platform infrastructure, processing 500GB+ daily across GCP services",
      "Led infrastructure rollouts with phased deployment strategies serving 200+ data scientists and ML engineers",
      "Implemented MLOps pipelines reducing model deployment time by 45% for enterprise ML solutions",
      "Developed GenAI-based virtual SRE co-pilot optimizing ML workload efficiency by 35%",
      "Maintained 99.9% uptime through comprehensive monitoring with Cloud Monitoring and Prometheus"
    ],
    tech: ["Python", "GCP", "Airflow", "FastAPI", "Docker", "Kubernetes", "Prometheus"]
  },
  {
    company: "Jun Group",
    role: "Software Engineer, Data",
    period: "Jan 2023 - Feb 2024",
    highlights: [
      "Architected enterprise-scale ETL/ELT pipelines using Python, Airflow, dbt, and Snowflake for 50+ monthly campaigns",
      "Optimized batch processing jobs improving ad segment processing time by 40%",
      "Migrated data from Teradata to BigQuery improving scalability and cost effectiveness by 15%",
      "Built data infrastructure using Google, Meta & Snap Ads APIs improving pacing process by 43%"
    ],
    tech: ["Python", "Airflow", "dbt", "Snowflake", "BigQuery", "AWS", "Spark"]
  },
  {
    company: "The New York Times",
    role: "Full Stack Data Engineer",
    period: "Nov 2021 - Jan 2023",
    highlights: [
      "Integrated ML algorithms (LSA, Interest-based Targeting) to improve ad performance analytics at scale",
      "Implemented PySpark logic in streaming pipelines reducing reporting latency by 29%",
      "Developed React-Flask application improving campaign creation process by 34%",
      "Maintained data pipelines using Python, Java, BigQuery, Airflow & GCP Cloud Composer"
    ],
    tech: ["Python", "PySpark", "React", "Flask", "BigQuery", "Airflow", "Docker"]
  },
  {
    company: "Paychex Inc.",
    role: "Software Engineer II",
    period: "July 2021 - Nov 2021",
    highlights: [
      "Developed Time and Attendance Services using React and C#/Java for 10M+ SMBs",
      "Achieved 90% test coverage with Jest and React Testing Library",
      "Integrated Google Analytics for smarter business solutions roadmap"
    ],
    tech: ["React", "C#", "Java", "Jest", "Google Analytics"]
  }
];

const Projects = () => {
  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.gentle,
  });

  return (
    <ProjectsWrapper>
      <ContentContainer>
        <SectionLabel>Experience</SectionLabel>
        <Title>Work History</Title>
        <Timeline>
          {trail.map((style, index) => (
            <ProjectCard key={index} style={style}>
              <CompanyHeader>
                <div>
                  <CompanyName>{projects[index].company}</CompanyName>
                  <Role>{projects[index].role}</Role>
                </div>
                <Period>{projects[index].period}</Period>
              </CompanyHeader>
              <Description>
                {projects[index].highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </Description>
              <TechStack>
                {projects[index].tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </Timeline>
      </ContentContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
