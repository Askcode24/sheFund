import React from 'react';
export function ContactForm({ feedBack, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-feeds">
        <div className="inputs-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={feedBack.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={feedBack.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            value={feedBack.phone}
            onChange={handleChange}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={feedBack.subject}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="textarea-container">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={feedBack.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="send-btn-container">
        <button type="submit" className="send-btn">
          Send Message
        </button>
      </div>
    </form>
  );
}
