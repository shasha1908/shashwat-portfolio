import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Scroll Progress Bar
const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #64ffda, #a78bfa);
  z-index: 9999;
  transition: width 0.1s ease-out;
`;

// Back to Top Button
const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64ffda 0%, #a78bfa 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #0f0c29;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.4);
  transition: all 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  z-index: 1000;

  &:hover {
    transform: ${props => props.visible ? 'translateY(-5px)' : 'translateY(20px)'};
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.5);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
`;

// Page transition wrapper
const PageWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
`;

const MainContent = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
`;

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 280, friction: 30 },
  });

  return transitions((style, item) => (
    <PageWrapper style={style}>
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageWrapper>
  ));
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="App">
        <ProgressBar style={{ width: `${scrollProgress}%` }} />
        <ScrollToTop />
        <Navbar />
        <MainContent>
          <AnimatedRoutes />
        </MainContent>
        <BackToTopButton
          visible={showBackToTop}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </BackToTopButton>
      </div>
    </Router>
  );
}

export default App;
