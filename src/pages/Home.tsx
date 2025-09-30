import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  // FAQ data...
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Home;
