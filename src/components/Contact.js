import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContactWrapper = styled(animated.div)`
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
`;

const ContactForm = styled(animated.form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const formProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    return (
        <ContactWrapper>
            <h2>Contact Me</h2>
            <ContactForm onSubmit={handleSubmit} style={formProps}>
                <animated.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200 })}
                />
                <animated.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 300 })}
                />
                <animated.textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400 })}
                />
                <animated.button type="submit" style={useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 })}>
                    Send Message
                </animated.button>
            </ContactForm>
        </ContactWrapper>
    );
};

export default Contact;