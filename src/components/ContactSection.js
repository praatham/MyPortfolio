// ============================================================
// VIEW: ContactSection.js
// Contact form for project inquiries
// ============================================================
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // NOTE: You will need to replace this placeholder key with your actual access key from Web3Forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "db08c4e4-1130-4783-a01f-e36251ddcdbb",
          subject: `New Portfolio Inquiry from: ${formData.name}`,
          from_name: "Prathamesh Bora Portfolio",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header text-center">
        <span className="section-label"><MessageSquare size={14} className="inline-icon" /> Get in Touch</span>
        <h2 className="section-title">Let's Discuss Your Project</h2>
      </div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-info">
          <h3>Ready to engineer the future?</h3>
          <p>Whether you need a full mechanical design, GD&T consulting, or rapid 3D prototyping, I'm available for freelance opportunities and consulting.</p>

          <div className="contact-method">
            <Mail className="contact-icon" />
            <div>
              <span>Email Me At</span>
              <strong>baraprathamesh@gmail.com</strong>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="success-message">
              <Send size={32} color="var(--green)" />
              <h4>Message Sent!</h4>
              <p>Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details / Content</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project requirements..."
                  rows="4"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
