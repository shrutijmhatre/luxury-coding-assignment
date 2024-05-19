import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import ImageZoom from "./imageZoom";
import Logo from "../assets/logo.png";

interface SlideshowProps {
  images: string[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500);
    }, interval);

    return () => resetTimeout();
  }, [currentIndex, images.length, interval]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageZoom
              src={image}
              alt={`Slide ${index}`}
              currentIndex={currentIndex}
              fade={fade}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <img src={Logo} alt="company-logo" className="mx-auto" />
      </div>
    </div>
  );
};

export default Slideshow;
