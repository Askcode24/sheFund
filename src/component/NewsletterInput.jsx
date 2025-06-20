import React, { useState } from 'react';

export function NewsletterInput() {
  const [email, setEmail] = useState('');
  return (
    <div className="news-email">
      <input
        type="email"
        name="email"
        id="email"
        value={email || ''}
        placeholder="Enter your email address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        className="btn"
        type="button"
        onClick={() => {
          console.log(email);
          setEmail('');
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
