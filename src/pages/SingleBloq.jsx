import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Logo from '../images/logo/logo.png';
import Facebook from '../images/icons/facebook.png';
import Linkedin from '../images/icons/linkedin.png';
import Twitter from '../images/icons/twitter.png';
import Gamer from '../images/singleBloq/container.png';
import Text from '../images/singleBloq/text.png';
import ImageGame from '../images/singleBloq/image.png';

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

const SingleBloq = () => {
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
    <div className="bg-[#FAFAFA] text-[#333] font-sans">
      {/* Navbar */}
      <Navbar Logo={Logo} />

      {/* Main Container */}
      <main className="max-w-8xl px-4 sm:px-6 lg:px-20 pt-40 space-y-10">
        {/* Category & Date */}
        <div className="flex items-center gap-4 text-sm text-[#999] lg:ml-32">
          <span className="font-bold font-['raleway'] text-[#333]">
            DEVELOPMENT
          </span>
          <span>16 March 2023</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold leading-snug font-['raleway'] lg:ml-32">
          How to make a Game look more attractive{' '}
          <br className="hidden md:block" />
          with New VR & AI Technology
        </h1>

        {/* Main Image */}
        <div className="mt-4">
          <img
            src={Gamer}
            alt="Gamer VR"
            className="bg-[#cce9ff] w-[1234px] rounded-xl object-cover"
          />
        </div>

        {/* First Paragraph */}
        <div className="text-sm lg:px-40 text-gray-500 leading-relaxed font-sans space-y-4">
          <p>
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <p>
            We’re now at a pivotal moment in our AI journey. Breakthroughs in
            generative AI are fundamentally changing how people interact with
            technology — and at Google, we’ve been responsibly developing large
            language models so we can safely bring them to our products. Today,
            we’re excited to share our early progress...
          </p>
        </div>

        {/* Quote Block */}
        <div className="flex lg:px-48 items-start gap-4 mt-8 pl-2">
          <div className="w-1 bg-[#FF6C20] h-22"></div>
          <div className="space-y-2">
            <img
              src={Text}
              alt="Quote"
              className="w-full max-w-md lg:max-w-3xl"
            />
            <p className="font-semibold lg:pt-0 md:pt-32 text-sm">
              – Pedro Domingos
            </p>
          </div>
        </div>

        {/* Second Paragraph */}
        <p className="text-sm text-gray-500 leading-relaxed mt-4 lg:ml-9 lg:px-32">
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it’s using Smart Compose in Gmail or
          auto-generated summaries in Google Docs. Now, we’re excited to take
          the next step and bring a limited set of trusted testers a
          <span className="underline"> new set of features</span> that makes the
          process of writing even easier. In Gmail and Google Docs, you can
          simply type in a topic you’d like to write about, and a draft will be
          instantly generated for you. So if you’re a manager onboarding a new
          employee, Workspace saves you the time and effort involved in writing
          that first welcome email. From there, you can elaborate upon or
          abbreviate the message or adjust the tone to be more playful or
          professional — all in just a few clicks. We’ll be rolling out these
          new experiences to testers in the coming weeks.
        </p>

        {/* Middle Overlapping Image */}
        <div className="relative mt-10 lg:px-28 lg:mx-64 h-[312px] rounded-xl overflow-hidden">
          <img
            className="absolute inset-0 bg-cover bg-center"
            src={ImageGame}
          />
          <div className="absolute top-0 w-lg h-full bg-[#CCE9FF] sm:bg-none opacity-60 lg:right-20"></div>
        </div>

        {/* Third Paragraph */}
        <p className="text-sm text-gray-500 leading-relaxed lg:px-40 mt-6 tracking-wide">
          We’re so excited by the potential of generative AI, and the
          opportunities it will unlock — from helping people express themselves
          creatively, to helping developers build brand new types of
          applications, to transforming how businesses and governments engage
          their customers and constituents. Stay tuned for more to come in the
          weeks and months ahead.
        </p>

        {/* Popular Post Title */}
        <h2 className="text-4xl font-['raleway'] font-bold mt-16">
          Popular Post
        </h2>

        {/* Popular Post Grid */}
        <div className=" grid lg:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-y-8 mb-12 lg:gap-x-6">
          {gridData
            .filter((item) =>
              ['Grid4', 'Grid5', 'Grid6'].includes(item.Component)
            )
            .map((item, idx) => {
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
      </main>

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

export default SingleBloq;
