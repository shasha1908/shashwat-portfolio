import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const ContactWrapper = styled.div`
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
  max-width: 600px;
  width: 100%;
`;

const SectionLabel = styled.p`
  color: #64ffda;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px 0;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ContactInfo = styled(animated.div)`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccd6f6;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 12px 20px;
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(animated.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #8892b0;
  }

  &:focus {
    outline: none;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.05);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #8892b0;
  }

  &:focus {
    outline: none;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.05);
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #64ffda 0%, #a78bfa 100%);
  color: #0f0c29;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
`;

const SuccessMessage = styled(Message)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid #64ffda;
  color: #64ffda;
`;

const ErrorMessage = styled(Message)`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid #ff6b6b;
  color: #ff6b6b;
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

  const infoProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
    config: config.gentle,
  });

  const formProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
    config: config.gentle,
  });

  return (
    <ContactWrapper>
      <ContentContainer>
        <SectionLabel>Contact</SectionLabel>
        <Title>Get In Touch</Title>
        <Subtitle>
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about data engineering and ML infrastructure.
        </Subtitle>

        <ContactInfo style={infoProps}>
          <ContactItem href="mailto:shashwatbhatt190897@gmail.com">
            📧 shashwatbhatt190897@gmail.com
          </ContactItem>
          <ContactItem href="tel:+13158985103">
            📱 (315) 898-5103
          </ContactItem>
        </ContactInfo>

        <ContactForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={formProps}
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputGroup>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        {status === 'success' && (
          <SuccessMessage>Message sent successfully! I'll get back to you soon.</SuccessMessage>
        )}
        {status === 'error' && (
          <ErrorMessage>There was an error sending your message. Please try again.</ErrorMessage>
        )}
      </ContentContainer>
    </ContactWrapper>
  );
};

export default Contact;
