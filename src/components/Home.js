import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HomeWrapper = styled(animated.div)`
  text-align: center;
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
`;

const Home = () => {
    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 300, friction: 10 },
    });

    return (
        <HomeWrapper style={props}>
            <h1>Welcome to Shashwat Bhatt's Portfolio</h1>
            <p>Software Engineer | Data Enthusiast | Problem Solver</p>
            <Link to="/about">
                <animated.button style={useSpring({
                    from: { opacity: 0, transform: 'translateY(50px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                    delay: 500,
                })}>
                    Learn More About Me
                </animated.button>
            </Link>
        </HomeWrapper>
    );
};

export default Home;