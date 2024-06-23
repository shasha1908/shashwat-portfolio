import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Nav = styled(animated.nav)`
  background-color: #0E0E21;
  color: white;
  padding: 1rem;
  animation: ${fadeIn} 1s ease-in;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  display: inline;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
    const props = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    return (
        <Nav style={props}>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/about">About</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
                <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
                <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
            </NavList>
        </Nav>
    );
};

export default Navbar;