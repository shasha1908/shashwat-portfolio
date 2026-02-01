import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const HomeWrapper = styled(animated.div)`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #0f0c29);
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Greeting = styled(animated.p)`
  font-size: 1.2rem;
  color: #64ffda;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Name = styled(animated.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #64ffda 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 20px 0;
  line-height: 1.1;
`;

const Title = styled(animated.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #ccd6f6;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #64ffda;
  font-weight: 600;
`;

const StatsContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  text-align: center;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #64ffda;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #8892b0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ButtonContainer = styled(animated.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const PrimaryButton = styled(Link)`
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #64ffda 0%, #a78bfa 100%);
  color: #0f0c29;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 16px 32px;
  border: 2px solid #64ffda;
  border-radius: 8px;
  background: transparent;
  color: #64ffda;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const Home = () => {
  const greetingProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
    config: config.gentle,
  });

  const nameProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
    config: config.gentle,
  });

  const titleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
    config: config.gentle,
  });

  const statsProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
    config: config.gentle,
  });

  const buttonProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
    config: config.gentle,
  });

  return (
    <HomeWrapper>
      <ContentContainer>
        <Greeting style={greetingProps}>Hello, I'm</Greeting>
        <Name style={nameProps}>Shashwat Bhatt</Name>
        <Title style={titleProps}>
          <Highlight>Senior Software Engineer</Highlight> specializing in Data Platforms,
          ML Infrastructure & MLOps. Building high-reliability distributed systems
          processing <Highlight>petabytes of data</Highlight> at scale.
        </Title>
        <StatsContainer style={statsProps}>
          <Stat delay="0s">
            <StatNumber>5+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </Stat>
          <Stat delay="0.2s">
            <StatNumber>500GB+</StatNumber>
            <StatLabel>Daily Data Processing</StatLabel>
          </Stat>
          <Stat delay="0.4s">
            <StatNumber>99.9%</StatNumber>
            <StatLabel>System Uptime</StatLabel>
          </Stat>
        </StatsContainer>
        <ButtonContainer style={buttonProps}>
          <PrimaryButton to="/about">About Me</PrimaryButton>
          <SecondaryButton to="/projects">View Work</SecondaryButton>
        </ButtonContainer>
      </ContentContainer>
    </HomeWrapper>
  );
};

export default Home;
