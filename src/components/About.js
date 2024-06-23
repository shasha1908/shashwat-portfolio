import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import profileImage from '../images/profile.png';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AboutWrapper = styled(animated.div)`
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentSection = styled(animated.div)`
  flex: 1;
`;

const ProfileImage = styled(animated.img)`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const About = () => {
    const contentProps = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
    });

    const imageProps = useSpring({
        from: { opacity: 0, transform: 'translateX(50px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
    });

    return (
        <AboutWrapper>
            <ContentSection style={contentProps}>
                <h2>About Me</h2>
                <p>
                    I'm Shashwat Saket Bhatt, a dedicated Software Engineer with a strong background in data engineering and full-stack development.
                    With a Master's degree in Computer Science from Syracuse University (GPA: 3.63/4) and a Bachelor's in Computer Engineering from
                    Gujarat Technological University (GPA: 9.11/10), I bring a robust educational foundation to my work.
                </p>
                <p>
                    My professional journey includes roles at prominent companies such as Propmoolah, Jun Group, The New York Times, and Paychex Inc.
                    I specialize in developing innovative solutions, integrating machine learning algorithms, and optimizing data pipelines to drive
                    business growth and efficiency.
                </p>
                <SocialIconsWrapper>
                    <SocialIcon url="https://www.linkedin.com/in/shashwat-bhatt/" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon url="https://x.com/Shashwat_Bhatt_" network="x" bgColor="#000000" target="_blank" rel="noopener noreferrer" />
                </SocialIconsWrapper>
            </ContentSection>
            <ImageSection>
                <ProfileImage src={profileImage} alt="Shashwat Bhatt on Brooklyn Bridge" style={imageProps} />
            </ImageSection>
        </AboutWrapper>
    );
};

export default About;