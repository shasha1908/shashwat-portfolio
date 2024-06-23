import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTrail, animated } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SkillsWrapper = styled(animated.div)`
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
`;

const SkillCategory = styled(animated.div)`
  margin-bottom: 20px;
`;

const SkillList = styled(animated.ul)`
  list-style-type: none;
  padding-left: 0;
`;

const SkillItem = styled(animated.li)`
  margin-bottom: 5px;
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
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    return (
        <SkillsWrapper>
            <h2>My Skills</h2>
            {categories.map(category => (
                <SkillCategory key={category}>
                    <h3>{category}</h3>
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