import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBuilding, faTasks, faComment } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    task: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Email sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('There was an error sending your email. Please try again later.');
    });
  };


  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect!</h1>
      <p>Whether you're looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <FontAwesomeIcon icon={faUser} /> What's your name?
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Dennis Hendry"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> What's your email?
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="dennis.hendry@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">
            <FontAwesomeIcon icon={faBuilding} /> What's the name of your organization?
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Dennis & Hendry"
          />
        </div>

        <div className="form-group">
          <label htmlFor="task">
            <FontAwesomeIcon icon={faTasks} /> What specific area or task do you need help with?
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="To improve the performance of a Next.js application"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">
            <FontAwesomeIcon icon={faComment} /> Your message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Hello Nitish, can you help me with..."
          />
        </div>
        
        <button type="submit" className="submit-button">Sent It</button>
      </form>
    </div>
  );
};

export default ContactUs;