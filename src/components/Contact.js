import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContactWrapper = styled(animated.div)`
  padding: 50px;
  animation: ${fadeIn} 1s ease-in;
  background: linear-gradient(45deg, #f3f3f3, #e6e6e6);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled(animated.form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled(animated.input)`
  margin-bottom: 20px;
  padding: 15px;
  border: none;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`;

const TextArea = styled(animated.textarea)`
  margin-bottom: 20px;
  padding: 15px;
  border: none;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  min-height: 150px;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`;

const SubmitButton = styled(animated.button)`
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  const formProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.wobbly,
  });

  const inputProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.wobbly,
  });

  return (
    <ContactWrapper style={formProps}>
      <h2>Get in Touch</h2>
      <ContactForm onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputProps}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputProps}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={inputProps}
        />
        <SubmitButton type="submit" style={useSpring({ ...inputProps, delay: 400 })}>
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;