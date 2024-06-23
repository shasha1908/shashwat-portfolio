import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import profileImage from '../images/profile.png';


const AboutWrapper = styled(animated.div)`
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  background: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const ContentSection = styled(animated.div)`
  flex: 1;
  color: #fff;
`;

const ProfileImage = styled(animated.img)`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageSection = styled(animated.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIconsWrapper = styled(animated.div)`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Highlight = styled.span`
  color: #FFC300;
  font-weight: bold;
`;

const About = () => {
    const wrapperProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: config.wobbly,
    });

    const contentProps = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        delay: 300,
        config: config.wobbly,
    });

    const imageProps = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 500,
        config: config.wobbly,
    });

    const iconProps = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <AboutWrapper style={wrapperProps}>
            <ContentSection style={contentProps}>
                <h2>Hello, I'm <Highlight>Shashwat Saket Bhatt</Highlight></h2>
                <p>
                    A passionate <Highlight>Software Engineer</Highlight> with expertise in <Highlight>data engineering</Highlight> and <Highlight>full-stack development</Highlight>.
                    My journey includes a Master's in Computer Science from Syracuse University (GPA: 3.63/4) and a Bachelor's in Computer Engineering
                    from Gujarat Technological University (GPA: 9.11/10).
                </p>
                <p>
                    I've had the privilege of working with industry leaders like <Highlight>Propmoolah</Highlight>, <Highlight>Jun Group</Highlight>, <Highlight>The New York Times</Highlight>, and <Highlight>Paychex Inc</Highlight>.
                    My focus? Crafting innovative solutions, integrating cutting-edge ML algorithms, and optimizing data pipelines to drive business growth.
                </p>
                <SocialIconsWrapper style={iconProps}>
                    <SocialIcon url="https://www.linkedin.com/in/shashwat-bhatt/" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon url="https://x.com/Shashwat_Bhatt_" network="x" bgColor="#000000" target="_blank" rel="noopener noreferrer" />
                </SocialIconsWrapper>
            </ContentSection>
            <ImageSection style={imageProps}>
                <ProfileImage src={profileImage} alt="Shashwat Bhatt on Brooklyn Bridge" />
            </ImageSection>
        </AboutWrapper>
    );
};

export default About;