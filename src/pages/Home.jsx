import { NewsletterInput } from '../component/NewsletterInput';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Logo from '../images/Logo/logo.png';
// import Earth from '../images/Earth/Earth.png';
// import Device from '../images/Heropage device/Group 1672.png';
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
// import App from '../images/Stores/basic.png';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Navbar Logo={Logo} />
      <div className="heropage-container">
        <div className="heropage">
          <div className="heropage-text">
            <h1>
              Leading women on <br />
              the journey to <br />
              financial freedom
            </h1>
            <span className="herotext">
              <p>
                Unlock your financial power with SheFund! Designed for <br />
                underserved and unbanked women, our innovative <br />
                platform empowers you to take control of your finances <br />
                and build a brighter future, join a commmunity that <br />
                celebrates your strenght, elevates your potential, and <br />
                champions your journey towards financial independdence. <br />
                It's time to thrive; let's find your dreams together!
              </p>
            </span>
          </div>
          <div className="buttons">
            <button className="btn login" onClick={() => navigate('/register')}>
              Get Started
            </button>
            <button className="btn">Downlaod</button>
          </div>
        </div>
        <div className="aside_container">
          {/* <div className="earth">
            <img src={Earth} alt="earth" width={'80%'} />
          </div> */}
          <div className="device">
            <img src={Hero} alt="device" width={'100%'} />
          </div>
        </div>
      </div>
      <div className="section-partners-container">
        <div className="section-partners">
          <div className="content">
            <h2>Our Trusted Partners</h2>
            <p>
              Powered by collaboration, Shefund partners with trusted <br />
              industry leaders to redefine digital finance.
            </p>
          </div>
          <div className="partners-placeholder">
            <img src={Partner} alt="Partner" />
          </div>
          <span className="features-content">
            <h2>Our Features</h2>
          </span>
        </div>
      </div>
      <div className="features-sector">
        <div className="sectors-content">
          <span className="saving-header">Savings Plan</span>
          <div className="sector-logo">
            <img src={Sector} alt="" />
          </div>
          <span className="introduce-sector">
            <p>
              Introducing Shefund: Your empowering savings solution crafted
              <br />
              exclusively for women. Take control of your financial future with
              a <br />
              platform designed to help you achieve your dreams, whether it's
              <br />
              that perfect vacation, a new venture, or simply building your
              <br />
              wealth. Join a community of savvy women who are saving smart
              <br /> and thriving together! Start your journey to financial
              independence
              <br />
              today—because you deserve it!
            </p>
            <button className="btn">Learn more</button>
          </span>
        </div>
        <div className="sector-device">
          <img
            src={FeatDevice}
            alt="features device"
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className="content-block">
        <div className="image-block">
          <img src={BillsImg} alt="Bills payment" />
        </div>
        <div className="block-content">
          <div className="section-header">
            <span className="saving-header">Bills Payment</span>
            <div className="section-img">
              <img src={SecImg} alt="" />
            </div>
            <div className="section-content">
              <p>
                Empower your everyday with Shefund!
                <br /> Seamlessly manage your bill payments—from
                <br /> airtime purchases to TV subscriptions—right at
                <br /> your fingertips. Take control of your expenses
                <br /> and enjoy the convenience designed for women
                <br /> who value simplicity and efficiency. Join the
                <br /> movement, simplify your life, and fund what
                <br /> matters most to you!
              </p>
              <button className="btn">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="loan-sector">
        <div className="inner">
          <div className="loan-content">
            <span>Credit/Loan</span>
            <div className="loan-icons">
              <img src={LoanIcon} alt="loan icons" />
            </div>
            <div className="loan-text">
              <p>
                Empower your financial journey with Shefund –<br /> the credit
                system designed exclusively for
                <br /> women. Take control of your dreams and
                <br />
                ambitions with tailored support that
                <br /> understands your unique needs. Unlock
                <br /> opportunities, build your future, and thrive
                <br />
                together—because when women rise, we all
                <br /> soar! Join Shefund today and embrace the
                <br /> power of financial independence!
              </p>
              <button className="btn">Learn more</button>
            </div>
          </div>
          <div className="loan-img">
            <img src={LoanImg} alt="loan img" width={'100%'} height={'100%'} />
          </div>
        </div>
      </div>
      <div className="refers">
        <div className="refer-content">
          <div className="refer-text">
            <h2>Refer and Earn Free Money</h2>
            <p>
              Introducing Shefund Referral 2.0. As part of this new program
              <br /> we will be giving away upto 100% of our earning from your
              <br /> referral. And it does not stop there. You get a chance to
              win
              <br /> upto 10,000 free tokens. Refer, like, share and Earn.
            </p>
          </div>
          <button className="btn">Learn more</button>
        </div>
        <div className="refer-gift">
          <img
            src={ReferGift}
            alt="refer gift"
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className="africa-container">
        <div className="africa-content">
          <div className="africa-text">
            <div className="africa-header">
              <h2>Building Community Finance for Africa </h2>
              <p>
                USP copy Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. Nullam a<br /> ultrices
                quam. Fusce rutrum mauris quis
                <br /> urna semper lacinia.
              </p>
            </div>
            <div className="africa-lorem">
              <span className="africa-text-icon">
                <img alt="" />
                <p>Lörem ipsum johanna Olsson milusat.</p>
              </span>
              <span className="africa-text-icon">
                <img alt="" />
                <p>Lörem ipsum johanna Olsson milusat.</p>
              </span>
              <span className="africa-text-icon">
                <img alt="" />
                <p>Lörem ipsum johanna Olsson milusat.</p>
              </span>
            </div>
          </div>
          <div className="africa-img">
            <img src={AfricaImg} alt="" />
          </div>
        </div>
      </div>
      <div className="stats-container">
        <div className="stats-content">
          <span className="stats">
            <img className="icon-system" src={Stat1} alt="Stat" />
            <h1>80%</h1>
            <p>Happy Customers</p>
          </span>
          <span className="stats">
            <img className="icon-system" src={Stat2} alt="Stat" />
            <h1>80%</h1>
            <p>Community Users</p>
          </span>
          <span className="stats">
            <img className="icon-system" src={Stats3} alt="Stat" />
            <h1>80%</h1>
            <p>Resources</p>
          </span>
          <span className="stats">
            <img className="icon-system" src={Stats4} alt="Stat" />
            <h1>80%</h1>
            <p>Project</p>
          </span>
        </div>
      </div>
      <div className="custormer-feed">
        <div className="custormer-content">
          <div className="custormer-rating">
            <span className="heading">
              <h2>What our customers are saying us?</h2>
            </span>
            <p>
              Various versions have evolved over the years, sometimes by
              <br />
              accident, sometimes on purpose injected humour and the like.
            </p>
            <span className="min">10m+</span>
            <p className="happy">Happy People</p>
            <span className="over">4.88</span>
            <p className="over-rate">Overall rating</p>
            <img alt="" className="stars" />
          </div>
          <div className="custormer-res">
            <div className="cus-slide">
              <div className="div-avatar">
                <img alt="" />
              </div>
              <p className="name">Cameron Williamson</p>
              <p className="occupa">Teacher</p>
              <div className="svg">
                <img alt="" />
              </div>
              <div className="cus-comment">
                <p>
                  Shefund is my go-to app for secure and speedy
                  <br /> financial management. Shefund is my go-to app for
                  <br /> secure and speedy financial management.Shefund is
                  <br /> my go-to app for secure and speedy financial
                  <br /> management.
                </p>
              </div>
              <div className="btn-div">
                <button className="btn">&#10094;</button>
                <button className="btn">&#10095;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-container">
        <div className="news-content">
          <h1>NEWSLETTER</h1>
          <p className="news">
            Get the latest news about fintech and Culture! We promise no spam,
            only bundles of joy.
          </p>
          <NewsletterInput />
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-heading">
            <h1>Frequently asked questions</h1>
          </div>
          <div className="faq-texts">
            <div className="faq-text1">
              <div className="faq-para1">
                <p>
                  What are the benefits of using INTcash money transfer
                  services?
                </p>
                <span className="faq-icon">
                  <img src={FaqIcon} alt="" />
                </span>
              </div>
              <div className="faq-para1">
                <p>
                  What are the transactions limits for shefund money transfer
                  services?
                </p>
                <span className="faq-icon">
                  <img src={FaqIcon} alt="" />
                </span>
              </div>
              <div className="faq-para2">
                <p>
                  What happens if there is an issue with my shefund money
                  transfer transaction, and how do i resolve it?
                </p>
                <span className="faq-icon2">
                  <img src={FaqIcon} alt="" />
                </span>
              </div>
            </div>
            <div className="faq-text1">
              <div className="faq-para1">
                <p>
                  can i track my shefund money transfer transaction, and how do
                  i do that?
                </p>
                <span className="faq-icon">
                  <img src={FaqIcon} alt="" />
                </span>
              </div>
              <div className="faq-para1">
                <p>
                  how long does it take to transfer money using shefund money
                  transfer services?
                </p>
                <span className="faq-icon">
                  <img src={FaqIcon} alt="" />
                </span>
              </div>
              <div className="faq-para1">
                <p>
                  what are the fess associated with using shefund money transfer
                  services
                </p>
                <span className="faq-icon">
                  <img src={FaqIcon} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-cta">
        <div className="block-cta-content">
          <div className="block-text">
            <h1>
              Download
              <br /> SHEFUND today!
            </h1>
            <p>
              Download the app now for a smarter, more
              <br /> convenient financial journey.
            </p>
          </div>
          <div className="block-store">
            <div className="app-store">
              <img src={AppStore} alt="" />
            </div>
            <div className="pay-store">
              <img src={PlayStore} alt="" />
            </div>
          </div>
        </div>
        <div className="block-img"></div>
      </div>
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
