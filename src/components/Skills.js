import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const SkillsWrapper = styled.div`
  min-height: calc(100vh - 60px);
  padding: 60px 40px;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(animated.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
  }
`;

const CategoryIcon = styled.span`
  font-size: 2rem;
  display: block;
  margin-bottom: 15px;
`;

const CategoryTitle = styled.h3`
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #ccd6f6;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const skills = [
  {
    icon: "💻",
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "HTML5", "CSS3"]
  },
  {
    icon: "⚙️",
    category: "Frameworks",
    items: ["React", "Spring", "Spring Boot", "Django", "FastAPI", "Flask", "Bootstrap", "PyQt"]
  },
  {
    icon: "🗄️",
    category: "Databases",
    items: ["Snowflake", "BigQuery", "PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server"]
  },
  {
    icon: "🔧",
    category: "Data Pipeline & MLOps",
    items: ["Apache Airflow", "Composer", "dbt", "Apache Beam", "PySpark", "Dataflow", "Pandas"]
  },
  {
    icon: "☁️",
    category: "Cloud Platforms",
    items: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
  },
  {
    icon: "📊",
    category: "Tools & Monitoring",
    items: ["Git", "Splunk", "Prometheus", "PagerDuty", "DataDog", "Jenkins", "GitHub Actions"]
  }
];

const Skills = () => {
  const trail = useTrail(skills.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
  });

  return (
    <SkillsWrapper>
      <ContentContainer>
        <SectionLabel>Expertise</SectionLabel>
        <Title>Skills & Technologies</Title>
        <SkillsGrid>
          {trail.map((style, index) => (
            <SkillCategory key={skills[index].category} style={style}>
              <CategoryIcon>{skills[index].icon}</CategoryIcon>
              <CategoryTitle>{skills[index].category}</CategoryTitle>
              <SkillList>
                {skills[index].items.map((skill, skillIndex) => (
                  <SkillItem key={skill} delay={`${skillIndex * 0.1}s`}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </ContentContainer>
    </SkillsWrapper>
  );
};

export default Skills;
