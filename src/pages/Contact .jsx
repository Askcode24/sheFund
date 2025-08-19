import { useState } from 'react';
import { ContactForm } from '../component/contact-form';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import Logo from '../images/Logo/logo.png';
import Facebook from '../images/icons/facebook.png';
import Linkedin from '../images/icons/linkedin.png';
import Twitter from '../images/icons/twitter.png';
import Vector from '../images/Contacts/Vector.png';
import Vector1 from '../images/Contacts/Frame.png';
import Vector2 from '../images/Contacts/Vector2.png';

const Contact = () => {
  const [feedBack, setFeedBack] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFeedBack({ ...feedBack, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedBack);
    setFeedBack({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#f3f2f2] min-h-screen w-full">
      <Navbar Logo={Logo} />

      <section className="max-w-6xl pt-40 mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#333333] font-['raleway']">
          Get in Touch
        </h2>
        <p className="text-center text-[#999] mt-4 mb-16 font-['raleway'] lg:text-lg md:text-sm">
          Contact us to publish your content and show ads to our{' '}
          <br className="hidden md:block" />
          website and get a good reach.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Office */}
          <div className="bg-white  rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#ff6c20] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <img src={Vector} alt="office" className="w-6 h-6" />
            </div>
            <h4 className="text-[#ff6c20] font-bold text-lg mb-2 font-['raleway'] ">
              Office
            </h4>
            <p className="text-[#7a7a7a] text-base font-['raleway'] font-medium">
              Victoria Street, London, UK
            </p>
          </div>

          {/* Email */}
          <div className="bg-white  rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#ff6c20] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <img src={Vector1} alt="email" className="w-6 h-6" />
            </div>
            <h4 className="text-[#ff6c20] font-bold text-lg mb-2 font-['raleway'] ">
              Email
            </h4>
            <p className="text-[#7a7a7a] text-base font-['raleway'] font-medium">
              hello@shefund.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white  rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#ff6c20] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <img src={Vector2} alt="phone" className="w-6 h-6" />
            </div>
            <h4 className="text-[#ff6c20] font-bold text-lg mb-2 font-['raleway'] ">
              Phone
            </h4>
            <p className="text-[#7a7a7a] text-base font-['raleway'] font-medium">
              (001) 2342 3451
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
          <ContactForm
            feedBack={feedBack}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </section>

      <Footer
        Logo={Logo}
        Facebook={Facebook}
        Linkedin={Linkedin}
        Twitter={Twitter}
      />
    </div>
  );
};

export default Contact;
