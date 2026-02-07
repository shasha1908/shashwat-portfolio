import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import profileImage from '../images/profile.png';

const AboutWrapper = styled(animated.div)`
  min-height: calc(100vh - 60px);
  padding: 60px 40px;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextSection = styled(animated.div)`
  color: #ccd6f6;
`;

const SectionLabel = styled.p`
  color: #64ffda;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 24px 0;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: #64ffda;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #8892b0;
  margin-bottom: 20px;
`;

const CompanyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0;
`;

const CompanyTag = styled.span`
  padding: 8px 16px;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 20px;
  color: #64ffda;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }
`;

const EducationSection = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(100, 255, 218, 0.2);
`;

const EducationTitle = styled.h4`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 12px;
`;

const EducationItem = styled.p`
  color: #8892b0;
  font-size: 0.95rem;
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '🎓';
  }
`;

const SocialIconsWrapper = styled(animated.div)`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const ImageSection = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    order: -1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid #64ffda;
    border-radius: 12px;
    z-index: 0;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: 15px;
    left: 15px;
  }
`;

const ProfileImage = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  position: relative;
  z-index: 1;
  filter: grayscale(20%);
  transition: all 0.3s ease;
  object-fit: cover;

  &:hover {
    filter: grayscale(0%);
  }
`;

const About = () => {
  const textProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 200,
    config: config.gentle,
  });

  const imageProps = useSpring({
    from: { opacity: 0, transform: 'translateX(30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 400,
    config: config.gentle,
  });

  const iconProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
    config: config.gentle,
  });

  return (
    <AboutWrapper>
      <ContentContainer>
        <TextSection style={textProps}>
          <SectionLabel>About Me</SectionLabel>
          <Title>
            Building <Highlight>Data Platforms</Highlight> &amp; <Highlight>ML Infrastructure</Highlight> at Scale
          </Title>
          <Description>
            I'm a Senior Software Engineer with 5+ years of experience building large-scale data platforms,
            ML infrastructure, and MLOps systems. I specialize in Airflow, Snowflake, GCP, AWS, Python,
            and high-reliability distributed systems processing petabytes of data.
          </Description>
          <Description>
            My work focuses on architecting scalable solutions that enable data teams to execute
            workflows at scale, implementing MLOps pipelines that automate model training and deployment,
            and building tools that improve developer productivity.
          </Description>

          <CompanyTags>
            <CompanyTag>Doximity</CompanyTag>
            <CompanyTag>Apple</CompanyTag>
            <CompanyTag>Jun Group</CompanyTag>
            <CompanyTag>The New York Times</CompanyTag>
            <CompanyTag>Paychex</CompanyTag>
          </CompanyTags>

          <EducationSection>
            <EducationTitle>Education</EducationTitle>
            <EducationItem>M.S. Computer Science - Syracuse University</EducationItem>
            <EducationItem>B.E. Computer Engineering - Gujarat Technological University</EducationItem>
          </EducationSection>

          <SocialIconsWrapper style={iconProps}>
            <SocialIcon
              url="https://www.linkedin.com/in/shashwat-bhatt/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 45, width: 45 }}
              bgColor="#64ffda"
              fgColor="#0f0c29"
            />
            <SocialIcon
              url="https://x.com/Shashwat_Bhatt_"
              network="x"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 45, width: 45 }}
              bgColor="#64ffda"
              fgColor="#0f0c29"
            />
            <SocialIcon
              url="https://github.com/shasha1908"
              network="github"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 45, width: 45 }}
              bgColor="#64ffda"
              fgColor="#0f0c29"
            />
          </SocialIconsWrapper>
        </TextSection>

        <ImageSection style={imageProps}>
          <ImageWrapper>
            <ProfileImage src={profileImage} alt="Shashwat Bhatt" />
          </ImageWrapper>
        </ImageSection>
      </ContentContainer>
    </AboutWrapper>
  );
};

export default About;
