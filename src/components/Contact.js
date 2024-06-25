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

const Message = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`;

const SuccessMessage = styled(Message)`
  background-color: #d4edda;
  color: #155724;
`;

const ErrorMessage = styled(Message)`
  background-color: #f8d7da;
  color: #721c24;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": form.getAttribute("name"),
        ...formData
      }).toString()
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus('error');
        console.error(error);
      });
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
      <ContactForm
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
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
      {status === 'success' && (
        <SuccessMessage>Message sent successfully!</SuccessMessage>
      )}
      {status === 'error' && (
        <ErrorMessage>There was an error sending your message. Please try again.</ErrorMessage>
      )}
    </ContactWrapper>
  );
};

export default Contact;