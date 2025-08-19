import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import Logo from '../images/Logo/logo.png';
import Hero from '../images/App/Heropage.png';
import Partner from '../images/Trusted Partner/placeholders.png';
import Sector from '../images/Features logo/Frame 1171277758.png';
import FeatDevice from '../images/Features device/Frame 1171277868.png';
import BillsImg from '../images/Bills payment/Devices.png';
import SecImg from '../images/Bills/Frame 1171277758.png';
import LoanIcon from '../images/Loans icons/Frame 1171277758 (1).png';
import LoanImg from '../images/Loan Sector/Frame 101246.png';
import ReferGift from '../images/Refer friend/Frame 1171277763.png';
import AfricaImg from '../images/Africa/image3.png';
import Icon from '../images/Africa/icon.png';
import Stat1 from '../images/statsIcons/System.png';
import Stat2 from '../images/statsIcons/System2.png';
import Stats3 from '../images/statsIcons/System.png';
import Stats4 from '../images/statsIcons/System3.png';
import Avatar from '../images/avatar/test1.png.svg';
import FaqIcon from '../images/Faq/arrow-down.png';
import AppStore from '../images/Stores/AppStore.png';
import PlayStore from '../images/Stores/PlayStore.png';
import Facebook from '../images/icons/facebook.png';
import Linkedin from '../images/icons/linkedin.png';
import Twitter from '../images/icons/twitter.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-outfit">
      <Navbar Logo={Logo} />

      {/* Hero Section */}
      <section className="bg-[#ff6c20] pt-24 pb-16">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Leading women on <br /> the journey to <br /> financial freedom
            </h1>
            <p className="text-white text-base md:text-lg font-poppins">
              Unlock your financial power with SheFund! Designed for underserved
              and unbanked women, our innovative platform empowers you to take
              control of your finances and build a brighter future. Join a
              community that celebrates your strength and champions your journey
              toward independence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-3 bg-white text-[#ff6c20] rounded-full shadow hover:bg-orange-100 transition"
              >
                Get Started
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-[#ff6c20] transition">
                Download
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={Hero} alt="Hero" className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold">Our Trusted Partners</h2>
        <p className="mt-4 text-base md:text-lg font-poppins text-gray-600">
          Powered by collaboration, SheFund partners with trusted industry
          leaders to redefine digital finance.
        </p>
        <img
          src={Partner}
          alt="Partners"
          className="mx-auto mt-8 max-w-4xl w-full object-contain"
        />
        <h3 className="mt-12 text-2xl font-semibold">Our Features</h3>
      </section>

      {/* Savings Plan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <span className="bg-orange-100 text-black px-5 py-2 rounded-full font-bold text-2xl inline-block font-['outfit']">
              Savings Plan
            </span>
            <img src={Sector} alt="Sector Icon" className="w-72 h-auto" />
            <p className="font-['poppins'] text-base leading-7 text-gray-700">
              Introducing Shefund: Your empowering savings solution crafted
              exclusively for women. Take control of your financial future with
              a platform designed to help you achieve your dreams. Whether it’s
              that perfect vacation, a new venture, or simply building your
              wealth— start your journey to financial independence today.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 font-['outfit'] transition">
              Learn more
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src={FeatDevice}
              alt="Savings"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      {/* Bills Payment */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-orange-100 rounded-2xl p-8">
              <img
                src={BillsImg}
                alt="Bills Payment"
                className="w-80 h-auto mx-auto"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="inline-block bg-orange-100 text-black text-2xl font-bold font-['poppins'] px-5 py-2 rounded-full mb-4">
              Bills Payment
            </h2>
            <img src={SecImg} alt="Bills Icon" className="w-70 h-auto mb-4" />
            <p className="text-gray-700 font-['poppins'] text-base leading-7 mb-6">
              Empower your everyday with SheFund! Seamlessly manage your bill
              payments—from airtime purchases to TV subscriptions—right at your
              fingertips. Take control of your expenses and enjoy the
              convenience designed for women who value simplicity and
              efficiency.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-['outfit'] hover:bg-orange-600 transition">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Credit / Loan */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 w-full">
            <h2 className="inline-block bg-orange-100 text-black text-2xl font-bold font-['poppins'] px-5 py-2 rounded-full mb-4">
              Credit / Loan
            </h2>
            <img src={LoanIcon} alt="Loan Icon" className="w-72 h-auto mb-6" />
            <p className="text-gray-700 font-['poppins'] text-base leading-7 mb-6">
              Empower your financial journey with SheFund – the credit system
              designed exclusively for women. Take control of your dreams and
              ambitions with tailored support that understands your unique
              needs. Unlock opportunities, build your future, and thrive
              together—because when women rise, we all soar!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-['outfit'] hover:bg-orange-600 transition">
              Learn more
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              src={LoanImg}
              alt="Loan Illustration"
              className="w-full max-w-xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Refer and Earn */}
      <section className="bg-[#fadac9] py-16 px-4 rounded-2xl lg:mx-10 mx-4 my-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-2/3 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 font-['outfit']">
              Refer and Earn Free Money
            </h2>
            <p className="text-gray-700 font-['poppins'] mb-6">
              Introducing SheFund Referral 2.0. As part of this new program, we
              will be giving away up to 100% of our earnings from your referral.
              And it does not stop there. You get a chance to win up to 10,000
              free tokens. Refer, like, share, and earn!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-['outfit'] hover:bg-orange-600 transition">
              Learn more
            </button>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <img src={ReferGift} alt="Refer Gift" className="w-52 h-auto" />
          </div>
        </div>
      </section>

      {/* Africa Section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight font-['outfit']">
              Building Community <br />
              Finance for Africa
            </h2>
            <p className="text-[#555555] font-['poppins']">
              USP copy lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Nullam a <br /> ultrices quam. Fusce
              rutrum mauris quis <br /> urna semper lacinia.
            </p>
            <div className="space-y-3 mt-6">
              {[
                'Lörem ipsum johanna Olsson milusat.',
                'Lörem ipsum johanna Olsson milusat.',
                'Lörem ipsum johanna Olsson milusat.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <img src={Icon} alt="icon" />
                  </div>
                  <p className="text-gray-700 font-['poppins']">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Flags */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src={AfricaImg}
              alt="Africa community"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className=" py-16 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { img: Stat1, label: 'Happy Customers' },
            { img: Stat2, label: 'Community Users' },
            { img: Stats3, label: 'Resources' },
            { img: Stats4, label: 'Projects' },
          ].map((stat, i) => (
            <div key={i}>
              <img src={stat.img} alt="Stat" className="w-15 h-15 mx-auto" />
              <h3 className="text-3xl font-bold text-black-900 mt-3">80%</h3>
              <p className="text-[1rem] text-gray-600 font-['poppins']">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#ff6c20]">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Side */}
          <div className="lg:w-[45%] space-y-6">
            <h2 className="text-3xl font-bold text-white leading-snug">
              What our customers <br /> are saying us?
            </h2>
            <p className="text-white text-sm leading-relaxed font-['poppins']">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </p>
            <div className="flex items-center space-x-10 mt-4">
              <div>
                <p className="text-2xl font-semibold text-white">10m+</p>
                <p className="text-white text-sm font-['inter']">
                  Happy People
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="pt-8">
                  <p className="text-2xl font-semibold text-white">4.88</p>
                  <p className="text-white text-sm font-['inter']">
                    Overall rating
                  </p>
                </div>
                <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[50%] bg-[#ff6c20] rounded-xl space-y-4 text-white relative">
            <div className="flex items-start space-x-4">
              <img
                src={Avatar}
                alt="Customer"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="font-semibold font-['poppins]">
                  Cameron Williamson
                </p>
                <p className="text-sm font-['poppins]">Teacher</p>
              </div>
            </div>

            <p className="text-white text-sm font-['poppins'] leading-relaxed mt-2">
              Shefund is my go-to app for secure and speedy
              <br className="hidden lg:block" /> financial management. Shefund
              is my go-to app for
              <br className="hidden lg:block" /> secure and speedy financial
              management. Shefund is
              <br className="hidden lg:block" /> my go-to app for secure and
              speedy financial
              <br className="hidden lg:block" /> management.
            </p>

            <div className="flex space-x-4 mt-4">
              <button className="cursor-pointer w-14 h-10 text-white border border-white rounded-full hover:bg-white hover:text-[#ff6c20] transition">
                &#10094;
              </button>
              <button className="cursor-pointer w-14 h-10 text-white border border-white rounded-full hover:bg-white hover:text-[#ff6c20] transition">
                &#10095;
              </button>
            </div>

            <img
              src="../src/images/avatar/SVG.png"
              alt="Quote Icon"
              className="w-10 h-10 text-white absolute top-4 right-10 lg:right-20"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-orange-100 py-16 px-4 rounded-2xl">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#ff6c20] uppercase">
            Newsletter
          </h2>
          <p className="text-gray-700 text-md font-['outfit'] mt-2 mb-6">
            Get the latest news about fintech and Culture! We promise no spam,
            only bundles of joy.
          </p>

          <div className="flex items-center shadow-md border-gray-400 border rounded overflow-hidden max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-gray-700  focus:outline-none font-poppins"
            />
            <button className="bg-[#ff6c20] hover:bg-orange-600 text-white px-7 py-3 font-semibold rounded transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-9xl">
          <h2 className="text-2xl font-['poppins'] font-bold text-gray-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {[
              'What Are The Benefits Of Using INTcash Money Transfer Services?',
              'What Are The Transactions Limits For Shefund Money Transfer Services?',
              'What happens if there is an issue with my shefund money transfer transaction, and how do i resolve it?',
              'Can I Track My Shefund Money Transfer Transaction, And How Do I Do That?',
              'How Long Does It Take To Transfer Money Using Shefund Money Transfer Services?',
              'What Are The Fess Associated With Using Shefund Money Transfer Services',
            ].map((faq, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-400 pb-4"
              >
                <p className="text-base text-gray-800 font-['outfit']">{faq}</p>
                <img src={FaqIcon} alt="Expand" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:py-4">
        {/* Left Content */}
        <div className="items-center lg:h-[580] lg:w-3/6 bg-[#ff6c20] lg:rounded-br-[8rem]">
          <div className="lg:m-auto lg:mt-32 grid lg:gap-6 lg:w-md text-center lg:text-left lg:space-x-20 lg:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-['poppins']">
              Download <br /> SHEFUND today!
            </h2>
            <p className="text-black text-md font-['outfit']">
              Download the app now for a smarter, more convenient financial
              journey.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <img src={AppStore} alt="App Store" className="h-12" />
              <img src={PlayStore} alt="Google Play" className="h-12" />
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="../src/images/stores/basic.png"
            alt="SheFund on phone"
            className=" w-full object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer
        Logo={Logo}
        Facebook={Facebook}
        Linkedin={Linkedin}
        Twitter={Twitter}
      />
    </div>
  );
};

export default Home;
