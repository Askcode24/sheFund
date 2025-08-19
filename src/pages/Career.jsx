import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-[#ff6c20] font-['Outfit'] mb-4">
        Career Page Coming Soon
      </h1>
      <p className="text-gray-600 text-lg md:text-xl font-light mb-8 font-['Outfit']">
        We’re not hiring right now, but opportunities will be available soon.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-[#ff6c20] text-white rounded-full font-['Outfit'] shadow-lg hover:bg-orange-600 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Career;
