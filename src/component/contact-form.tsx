import React from 'react';

interface FeedBack {
  name: string;
  email: string;
  phone: string;
}

interface ContactFormProps {
  feedBack: FeedBack;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ContactForm({
  feedBack,
  handleSubmit,
  handleChange,
}: ContactFormProps) {
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
      </div>
      {/* ...rest of the form... */}
    </form>
  );
}
