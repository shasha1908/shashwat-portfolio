import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HomeWrapper = styled(animated.div)`
  text-align: center;
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
`;

const FunkyButton = styled(animated.button)`
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) rotate(5deg);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Home = () => {
    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: config.wobbly,
    });

    const buttonProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 500,
        config: config.wobbly,
    });

    return (
        <HomeWrapper style={props}>
            <h1>Welcome to Shashwat Bhatt's Portfolio</h1>
            <p>Software Engineer | Data Enthusiast | Problem Solver</p>
            <Link to="/about">
                <FunkyButton style={buttonProps}>
                    Learn More About Me
                </FunkyButton>
            </Link>
        </HomeWrapper>
    );
};

export default Home;