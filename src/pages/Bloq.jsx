import { Navbar } from './Navbar';
import Log from '../images/logo/logo.png';
import Facebook from '../images/icons/facebook.png';
import Linkedin from '../images/icons/linkedin.png';
import Twitter from '../images/icons/twitter.png';
import { Footer } from './Footer';
import { gridData } from '../component/data';
import * as GridComponents from './Grid1';
import * as Grid2Components from './Grid2';
import * as Grid3Components from './Grid3';
import * as Grid4Components from './Grid4';
import * as Grid5Components from './Grid5';
import * as Grid6Components from './Grid6';
import * as Grid7Components from './Grid7';
import * as Grid8Components from './Grid8';
import * as Grid9Components from './Grid9';

const Bloq = () => {
  // Map component names to imported modules
  const gridsMap = {
    Grid1: GridComponents.Grid1,
    Grid2: Grid2Components.Grid2,
    Grid3: Grid3Components.Grid3,
    Grid4: Grid4Components.Grid4,
    Grid5: Grid5Components.Grid5,
    Grid6: Grid6Components.Grid6,
    Grid7: Grid7Components.Grid7,
    Grid8: Grid8Components.Grid8,
    Grid9: Grid9Components.Grid9,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full shadow-sm bg-white">
        <Navbar Logo={Log} />
      </div>
      <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-4 py-4 sm:py-8 flex-1">
        <h1 className="text-[16px] md:text-lg font-[700] tracking-[0.1em] font-[outfit] leading-[150%] text-[#666666] mb-6  text-center">
          OUR BLOGS
        </h1>
        <span className="block text-[45px] font-[outfit] md:text-4xl font-[700] font-numeric leading-[64px]  text-[#333333] mb-2 text-center">
          Find all our blogs from here
        </span>
        <p className="text-[#666666] text-[16px] md:text-lg mb-6 text-center leading-[150%] font-['outfit']">
          Our blogs are written by well-known writers and thoroughly researched
          <br className="hidden md:block" /> to provide you the best articles to
          read and enjoy.
        </p>
        <div className=" grid lg:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-y-8 lg:gap-x-4">
          {gridData.map((item, idx) => {
            const GridComp = gridsMap[item.Component];
            const props = {
              [item.prop]: item.img,
              title: item.title,
              desc: item.desc,
              link: item.link,
              category: item.category,
              date: item.date,
            };
            return (
              <div
                key={idx}
                className="flex flex-col h-full bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <GridComp {...props} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full mt-auto">
        <Footer
          Logo={Log}
          Facebook={Facebook}
          Linkedin={Linkedin}
          Twitter={Twitter}
        />
      </div>
    </div>
  );
};
export default Bloq;
