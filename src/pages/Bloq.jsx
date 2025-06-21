import { Grid9 } from './Grid9';
import { Grid8 } from './Grid8';
import { Grid7 } from './Grid7';
import { Grid6 } from './Grid6';
import { Grid5 } from './Grid5';
import { Grid4 } from './Grid4';
import { Grid3 } from './Grid3';
import { Grid2 } from './Grid2';
import { Grid1 } from './Grid1';
import '../styles/Bloq.css';
import { Navbar } from './Navbar';
import Logo from '../images/Logo/logo.png';
import Facebook from '../images/icons/facebook.png';
import Linkedin from '../images/icons/linkedin.png';
import Twitter from '../images/icons/twitter.png';
import Container from '../images/BloqsImg/Container.png';
import { Footer } from './Footer';
import Container2 from '../images/BloqsImg/Container1.png';
import Container3 from '../images/BloqsImg/Container2.png';
import Container4 from '../images/BloqsImg/Container3.png';
import Container5 from '../images/BloqsImg/Container4.png';
import Container6 from '../images/BloqsImg/Container5.png';
import Container7 from '../images/BloqsImg/Container6.png';
import Container8 from '../images/BloqsImg/Container7.png';
import Container9 from '../images/BloqsImg/Container8.png';

const Bloq = () => {
  return (
    <div className="bloq-container">
      <div className="nav">
        <Navbar Logo={Logo} />
      </div>
      <div className="bloq-content">
        <h1>OUR BLOGS</h1>
        <span className="bloq-heading">Find our all blogs from here</span>
        <p className="bloq-paragraph">
          our blogs are written from very research research and well known
          writers writers so that we can provide
          <br /> you the best blogs and articles articles for you to read them
          all along
        </p>
        <div className="bloq-grids">
          <Grid1 Container={Container} />
          <Grid2 Container2={Container2} />
          <Grid3 Container3={Container3} />
          <Grid4 Container4={Container4} />
          <Grid5 Container5={Container5} />
          <Grid6 Container6={Container6} />
          <Grid7 Container7={Container7} />
          <Grid8 Container8={Container8} />
          <Grid9 Container9={Container9} />
        </div>
      </div>
      <div className="footer">
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
export default Bloq;
