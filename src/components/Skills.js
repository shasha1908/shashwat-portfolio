import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SkillsWrapper = styled(animated.div)`
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const SkillCategory = styled(animated.div)`
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h3`
  color: #ffeaa7;
  margin-bottom: 15px;
`;

const SkillList = styled(animated.ul)`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled(animated.li)`
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 20px;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.3);
  }
`;

const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
    "Frameworks": [".Net", "Spring", "Spring Boot", "Bootstrap", "React", "REST", "SOAP", "Django", "Apache Beam", "Airflow", "Pandas"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Apache"],
    "Tools & IDEs": ["Git", "Eclipse", "Microsoft Visual Studio", "MS Office", "Postman", "RabbitMQ"],
    "Operating Systems": ["Linux", "Windows (7/8/10)", "Mac OS"],
    "Miscellaneous": ["AWS", "GCP", "Shell", "Node.js", "Angular.js", "XML", "Numpy", "Dataflows", "Holistics", "Looker", "CSV", "GPT", "PowerBI", "SciPy", "Jupyter"]
};

const Skills = () => {
    const categories = Object.keys(skills);
    const allSkills = categories.flatMap(category =>
        skills[category].map(skill => ({ category, skill }))
    );

    const trail = useTrail(allSkills.length, {
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: config.wobbly,
    });

    return (
        <SkillsWrapper>
            <h2>My Skills</h2>
            {categories.map(category => (
                <SkillCategory key={category}>
                    <CategoryTitle>{category}</CategoryTitle>
                    <SkillList>
                        {trail.map((props, index) => {
                            const { category: skillCategory, skill } = allSkills[index];
                            if (skillCategory === category) {
                                return (
                                    <SkillItem key={skill} style={props}>
                                        {skill}
                                    </SkillItem>
                                );
                            }
                            return null;
                        })}
                    </SkillList>
                </SkillCategory>
            ))}
        </SkillsWrapper>
    );
};

export default Skills;