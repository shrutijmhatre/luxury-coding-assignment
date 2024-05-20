/* import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg"; */
import Image3 from "../assets/Image3.jpg";
/* import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image7 from "../assets/Image7.jpg"; */
import Image8 from "../assets/Image8.jpg";
// import Image9 from "../assets/Image9.jpg";
import Image10 from "../assets/Image10.jpg";
/* import Image11 from "../assets/Image11.jpg";
import Image12 from "../assets/Image12.jpg";
import Image13 from "../assets/Image13.jpg"; */
import Image14 from "../assets/Image14.jpg";
import Image15 from "../assets/Image15.jpg";
// import Image16 from "../assets/Image16.jpg";
import Image17 from "../assets/Image17.jpg";
import Image18 from "../assets/Image18.jpg";
// import Image19 from "../assets/Image19.jpg";
import Image20 from "../assets/Image20.jpg";
import Image21 from "../assets/Image21.jpg";
import Image22 from "../assets/Image22.jpg";
// import Image23 from "../assets/Image23.jpg";
import Image24 from "../assets/Image24.jpg";
import Image25 from "../assets/Image25.jpg";
import Carousel, { ImageInputType } from "../components/carousel";
import Slideshow from "../components/slideshow";
import Location from "../assets/location.webp";
import Logo from "../assets/logo.png";

const LandingPage = () => {
  const bannerImages = [Image21, Image22, Image10];
  const images: ImageInputType[] = [
    { img1: Image20, img2: Image18, text: "3-bedroom townhouses" },
    { img1: Image17, img2: Image14, text: "4-bedroom villas" },
    { img1: Image14, img2: Image15, text: "5-bedroom villas" },
    { img1: Image3, img2: Image10, text: "6-bedroom villas" },
    { img1: Image8, img2: Image3, text: "7-bedroom villas" },
  ];

  return (
    <div className="flex flex-col bg-slate-100 overflow-hidden font-montserrat">
      <div className="flex justify-center items-center bg-gray-200">
        <Slideshow images={bannerImages} />
      </div>
      <div className="flex flex-col bg-[#a89a7f] text-white relative">
        <div className="bg-[#a89a7f] px-4 pt-8 pb-4 md:w-1/2 md:absolute top-0">
          <p className="font-domine text-2xl md:text-4xl font-bold tracking-wider bg-[#a89a7f]">
            INTRODUCING THE <span className="italic">NEW PHASES</span> AT NAD AL
            SHEBA GARDENS
          </p>
          <br />
          <p className="text-sm md:text-xl bg-[#a89a7f]">
            The private gated community of Nad Al Sheba Gardens welcomes you to
            live in Dubai at your own pace with a new selection of bespoke
            residences ranging from 3-bedroom townhouses to 4 to 7-bedroom
            villas. Each draws inspiration from comfort and nature, providing
            tranquil living amid winding paths and meticulously landscaped
            lawns.
          </p>
        </div>
        <div className="bg-[#a89a7f]">
          <img src={Location} alt="location" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row m-5 md:m-10">
        <div className="flex items-center md:w-1/2 bg-[url('src/assets/bg2.jpg')] bg-no-repeat bg-cover p-10 text-sm md:text-xl font-semibold">
          <p>
            Starting from AED 4.18M, these elegant homes feature sleek modern
            architecture and inviting open-plan interiors with double-height
            ceilings and expansive living spaces.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Image25} alt="pool_side" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Carousel images={images} />
      </div>
      <div className="flex flex-col md:gap-4 lg:gap-8 md:flex-row m-5 md:m-10">
        <div className="h-full md:w-2/3">
          <img src={Image24} alt="pool_side" className="w-full h-full" />
        </div>
        <div className="flex flex-col md:w-1/2 gap-4 px-4 py-6 items-center md:items-start">
          <p className="text-sm md:text-xl p-4">
            To learn more about this new project, watch the briefing video,
            download the marketing materials, and ensure to register your
            clients on the link below to secure their preferred unit.
          </p>
          <div className="flex flex-col gap-2">
            <a href="https://bit.ly/44EUDfs" target="_blank">
              <button className="bg-gray-800 hover:bg-gray-400 p-2 text-gray-300 font-bold rounded-full items-center text-xs md:text-xl uppercase w-[50vw] md:w-[30vw]">
                Briefing video
              </button>
            </a>
            <a href="https://bit.ly/4bhaROA" target="_blank">
              <button className="bg-gray-800 hover:bg-gray-400 p-2 text-gray-300 font-bold rounded-full items-center text-xs md:text-xl uppercase w-[50vw] md:w-[30vw]">
                Marketing toolkit
              </button>
            </a>
          </div>
        </div>
      </div>

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
      <img src={Logo} alt="logo" className="w-1/5 mx-auto" />
      <div className="text-center py-4">
        Copyright 2024 © All rights Reserved.
      </div>
      <div className="flex flex-row items-center justify-center gap-5 pb-8">
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </span>
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 576 512"
          >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
