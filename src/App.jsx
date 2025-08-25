import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Bloq from './pages/Bloq';
import SingleBloq from './pages/SingleBloq';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Product from './pages/Product';
import Register from './component/Register';
import Login from './pages/Login';
import ForgetPassword from './component/ForgetPassword';
import EmailVerification from './component/EmailVerification';
import OtpComponent from './component/OtpComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bloq" element={<Bloq />} />
        <Route path="/bloq/:id" element={<SingleBloq />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/otp" element={<OtpComponent />} />
      </Routes>
      <ToastContainer />
      <Analytics />
    </Router>
  );
}

export default App;
