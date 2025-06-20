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
import '../styles/Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [feedBack, setFeedBack] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  // const [errors, setErrors] = useState({});

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
    <div className="contact-contaner">
      <div className="contact">
        <div className="contact-nav">
          <Navbar Logo={Logo} />
        </div>
        <div className="contact-container">
          <span className="contact-header">Get in Touch</span>
          <span className="contact-paragraph">
            Contact us to publish your content and show ads to our
            <br /> website and get a good reach.
          </span>
          <div className="contact-box-container">
            <div className="contact-box">
              <span className="boxspans">
                <span className="boximg">
                  <img src={Vector} alt="adress" />
                </span>
              </span>
              <span className="contact-name">Office</span>
              <span className="contact-paragraph">
                <p>Victoria Street, London, UK</p>
              </span>
            </div>
            <div className="contact-box">
              <span className="boxspans">
                <span className="boximg">
                  <img src={Vector1} alt="message" />
                </span>
              </span>
              <span className="contact-name">Email</span>
              <span className="contact-paragraph">
                <p>hello@shefund.com</p>
              </span>
            </div>
            <div className="contact-box">
              <span className="boxspans">
                <span className="boximg">
                  <img src={Vector2} alt="call" />
                </span>
              </span>
              <span className="contact-name">Phone</span>
              <span className="contact-paragraph">
                <p>(001) 2342 3451</p>
              </span>
            </div>
          </div>
          <div className="customer-input-container">
            <div className="input-feeds-container">
              <ContactForm
                feedBack={feedBack}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <Footer
            Logo={Logo}
            Facebook={Facebook}
            Linkedin={Linkedin}
            Twitter={Twitter}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
