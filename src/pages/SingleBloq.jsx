import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Logo from '../images/Logo/logo.png';
import Facebook from '../images/icons/facebook.png';
import Linkedin from '../images/icons/linkedin.png';
import Twitter from '../images/icons/twitter.png';
import Gamer from '../images/SingleBloq/Container.png';
import Text from '../images/SingleBloq/Text.png';
import '../styles/SingleBloq.css';
import Container4 from '../images/BloqsImg/Container3.png';
import Container5 from '../images/BloqsImg/Container4.png';
import Container6 from '../images/BloqsImg/Container5.png';
import { Bloqtext4 } from './Bloqtext4';
import { BloqText5 } from './BloqText5';
import { BloqText6 } from './BloqText6';

const SingleBloq = () => {
  return (
    <div className="SingleBloq">
      <div className="single-bloq-nav">
        <Navbar Logo={Logo} />
      </div>
      <div className="singlebloq-container">
        <div className="bloq-info">
          <span className="bloq-dev">
            <h5>DEVELOPMENT</h5>
          </span>
          <p>16 March 2023</p>
        </div>
        <div className="bloq-game-info">
          <h1>
            How to make a Game look more attractive
            <br /> with New VR & AI Technology
          </h1>
        </div>
        <div className="bloq-img-container">
          <img src={Gamer} alt="" />
        </div>
        <div className="single-bloq-paracont">
          <p>
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing
            <br /> state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI
            <br /> accessible to everyone.
            <br /> <br />
            We’re now at a pivotal moment in our AI journey. Breakthroughs in
            generative AI are fundamentally changing how people interact with
            technology
            <br /> — and at Google, we’ve been responsibly developing large
            language models so we can safely bring them to our products. Today,
            we’re excited to
            <br /> share our early progress. Developers and businesses can now
            try new APIs and products that make it easy, safe and scalable to
            start building
            <br /> with Google’s best AI models through Google Cloud and a new
            prototyping environment called MakerSuite. And in Google Workspace,
            we’re
            <br /> introducing new features that help people harness the power
            of generative AI to create, connect and collaborate.
          </p>
        </div>
        <div className="single-bloq-qoutecont">
          <span className="bloq-stroke"></span>
          <img
            style={{ marginLeft: '20px', marginTop: '20px' }}
            src={Text}
            alt="“People..."
          />
          <p className="qoute-author">– Pedro Domingos</p>
        </div>
        <div className="single-paragraph">
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it’s using Smart Compose in Gmail or auto-
          <br />
          generated summaries in Google Docs. Now, we’re excited to take the
          next step and bring a limited set of trusted testers a new set of
          features
          <br /> that makes the process of writing even easier. In Gmail and
          Google Docs, you can simply type in a topic you’d like to write about,
          and a draft will
          <br /> be instantly generated for you. So if you’re a manager
          onboarding a new employee, Workspace saves you the time and effort
          involved in writing
          <br /> that first welcome email. From there, you can elaborate upon or
          abbreviate the message or adjust the tone to be more playful or
          professional —<br /> all in just a few clicks. We’ll be rolling out
          these new experiences to testers in the coming weeks.
        </div>
        <div className="single-imgcont">
          <div className="single-img"></div>
          <div className="single-overlay"></div>
        </div>
        <div className="bloq-lastparagraph">
          We’re so excited by the potential of generative AI, and the
          opportunities it will unlock — from helping people express themselves
          creatively, to
          <br /> helping developers build brand new types of applications, to
          transforming how businesses and governments engage their customers and
          <br /> constituents. Stay tuned for more to come in the weeks and
          months ahead.
        </div>
        <span className="bloqs-poular-post">Popular Post</span>
        <div className="single-grids">
          <div className="single-bloq-grids">
            <div className="single-placeholder">
              <img src={Container4} alt="" width={'100%'} />
            </div>
            <Bloqtext4 />
          </div>
          <div className="single-bloq-grids">
            <div className="single-placeholder">
              <img src={Container5} alt="" width={'100%'} />
            </div>
            <BloqText5 />
          </div>
          <div className="single-bloq-grids">
            <div className="single-placeholder">
              <img src={Container6} alt="" width={'100%'} />
            </div>
            <BloqText6 />
          </div>
        </div>
      </div>
      <div className="single-bloq-footer">
        <Footer
          Logo={Logo}
          Facebook={Facebook}
          Linkedin={Linkedin}
          Twitter={Twitter}
        />
      </div>
    </div>
  );
};

export default SingleBloq;
