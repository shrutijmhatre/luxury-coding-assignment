import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image7 from "../assets/Image7.jpg";
import Image8 from "../assets/Image8.jpg";
import Image9 from "../assets/Image9.jpg";
import Image10 from "../assets/Image10.jpg";
import Image11 from "../assets/Image11.jpg";
import Image12 from "../assets/Image12.jpg";
import Image13 from "../assets/Image13.jpg";
import Image14 from "../assets/Image14.jpg";
import Image15 from "../assets/Image15.jpg";
import Image16 from "../assets/Image16.jpg";
import Image17 from "../assets/Image17.jpg";
import Image18 from "../assets/Image18.jpg";
import Image19 from "../assets/Image19.jpg";
import Image20 from "../assets/Image20.jpg";
import Image21 from "../assets/Image21.jpg";
import Image22 from "../assets/Image22.jpg";
import Carousel from "../components/carousel";
import Slideshow from "../components/slideshow";

const LandingPage = () => {
  const bannerImages = [Image21, Image22, Image10];
  const images = [
    Image2,
    Image3,
    Image4,
    Image5,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
  ];

  return (
    <div className="flex flex-col bg-slate-100 overflow-hidden font-montserrat">
      <div className="flex justify-center items-center bg-gray-200">
        <Slideshow images={bannerImages} interval={5000} />
      </div>
      <div className="w-screen h-[50vh] md:h-[70vh] relative m-0 p-0 bg-[url('src/assets/bg1.jpg')] bg-no-repeat bg-cover">
        <div className="h-fit bg-stone-300 absolute top-20 left-10 right-10 md:left-80 md:right-80 px-3 py-2 md:p-10">
          <p className="font-domine text-2xl md:text-4xl font-bold tracking-wider">
            INTRODUCING THE <span className="italic">NEW PHASES</span> AT NAD AL
            SHEBA GARDENS
          </p>
          <br />
          <p className="text-sm md:text-xl">
            The private gated community of Nad Al Sheba Gardens welcomes you to
            live in Dubai at your own pace with a new selection of bespoke
            residences ranging from 3-bedroom townhouses to 4 to 7-bedroom
            villas. Each draws inspiration from comfort and nature, providing
            tranquil living amid winding paths and meticulously landscaped
            lawns.
          </p>
          <br />
        </div>
      </div>

      <img
        className="w-full"
        src={Image1}
        alt="phases"
        width="100"
        height="100"
      />

      <div className="px-4 py-6 text-sm">
        <p>
          Starting from AED 4.18M, these elegant homes feature sleek modern
          architecture and inviting open-plan interiors with double-height
          ceilings and expansive living spaces.
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-200">
        <Carousel images={images} interval={5000} />
      </div>
      <div className="flex flex-col gap-4 px-4 py-6 ">
        <p className="text-sm py-4">
          To learn more about this new project, watch the briefing video,
          download the marketing materials, and ensure to register your clients
          on the link below to secure their preferred unit.
        </p>
        <a href="https://bit.ly/44EUDfs" target="_blank">
          <button className="bg-gray-800 hover:bg-gray-400 text-gray-300 font-bold py-2 px-4 rounded-full items-center text-xs uppercase w-1/2">
            <span>Briefing video</span>
          </button>
        </a>
        <a href="https://bit.ly/4bhaROA" target="_blank">
          <button className="bg-gray-800 hover:bg-gray-400 text-gray-300 font-bold py-2 px-4 rounded-full items-center text-xs uppercase w-1/2">
            <span>Marketing toolkit</span>
          </button>
        </a>
      </div>
      {/* <div className="container">
        <iframe
          src="https://www.youtube.com/embed/fZZm0OXkU2o?si=Mhtcr4-cwAC2NfEv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="responsive-iframe"
        ></iframe>
      </div> */}
      <div className="video-container">
        <iframe
          id="vimeo-video"
          src="https://player.vimeo.com/video/944949025?background=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          data-ready="true"
        ></iframe>
      </div>
    </div>
  );
};

export default LandingPage;
