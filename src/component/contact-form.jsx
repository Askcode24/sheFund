import React from 'react';

export function ContactForm({ feedBack, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-[#4c4c4c] font-semibold font-['raleway'] text-[16px] mb-3"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={feedBack.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#333] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#4c4c4c] font-semibold font-['raleway'] text-[16px] mb-3"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={feedBack.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#333] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-[#4c4c4c] font-semibold text-[16px] mb-3 font-['raleway']"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={feedBack.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#333] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-[#4c4c4c] font-semibold text-[16px] mb-3 font-['raleway']"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={feedBack.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#333] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Textarea */}
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-[#4c4c4c] font-semibold text-[16px] mb-3 font-['raleway']"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="6"
          value={feedBack.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#333] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="bg-[#ff6c20] hover:bg-[#e85c13] text-white font-bold py-4 px-8 rounded-md transition text-[15px] font-['raleway] duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
