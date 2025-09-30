import React, { useState } from 'react';

function NewsletterInput() {
  const [email, setEmail] = useState<string>('');
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

export default NewsletterInput;
