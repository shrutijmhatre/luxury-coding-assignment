import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

export type ImageInputType = {
  img1: string;
  img2: string;
  text: string;
};

interface CarouselProps {
  images: ImageInputType[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0"
            style={{ flexBasis: "100%" }}
          >
            <div className="flex flex-col items-center md:flex-row-reverse md:mx-10 md:gap-5">
              <img
                src={image.img2}
                alt={`Slide ${index}`}
                className="md:w-3/5 object-cover"
              />
              <div className="flex flex-col items-start px-8 md:w-2/5">
                <img
                  src={image.img1}
                  alt={`Slide ${index}`}
                  className="object-cover"
                />
                <p className="font-domine text-3xl font-semibold tracking-wider uppercase py-2  text-[#975632]">
                  <span className="italic">{image.text}</span>
                  &nbsp;villas
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-2 md:mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
