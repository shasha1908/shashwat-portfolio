import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Nav = styled(animated.nav)`
  background: rgba(15, 12, 41, 0.95);
  backdrop-filter: blur(10px);
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Logo = styled(Link)`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -1px;

  span {
    color: #fff;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(15, 12, 41, 0.98);
    padding: 20px;
    border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? '#64ffda' : '#ccd6f6'};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$isActive ? '30px' : '0'};
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;

    &::after {
      width: 30px;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 16px;

    &::after {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ResumeButton = styled.a`
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Work' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <Nav style={navProps}>
      <NavContainer>
        <Logo to="/">
          S<span>B</span>
        </Logo>
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
        <NavList isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                $isActive={location.pathname === item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <ResumeButton
              href="https://www.linkedin.com/in/shashwat-bhatt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ResumeButton>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
