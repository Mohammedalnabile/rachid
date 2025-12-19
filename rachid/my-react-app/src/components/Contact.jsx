import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    
    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = '213552380135';
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title fade-in-up">Have a Great Idea?</h2>
      <p className="contact-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
        Got a great idea that you might want to work out together? Let me know by filling in your details below.
      </p>
      
      <form className="contact-form fade-in-up" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group slide-in-left">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group slide-in-right">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group slide-in-left" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="phone">Phone number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Enter your phone number" 
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group slide-in-right" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="message">Tell us more</label>
            <textarea 
              id="message" 
              placeholder="Tell us about your project" 
              className="form-input form-textarea"
              rows="1"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        
        <button type="submit" className="btn btn-submit hover-lift">Send Message</button>
      </form>
    </section>
  );
}
