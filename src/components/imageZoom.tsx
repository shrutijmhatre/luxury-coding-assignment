import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

interface ZoomImageProps {
  src: string;
  alt: string;
  currentIndex: number;
  fade: boolean;
  zoomDuration?: number; // duration in seconds for the zoom effect
}

const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt,
  currentIndex,
  fade,
  zoomDuration = 10,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.transition = `transform ${zoomDuration}s ease-in-out`;
      imgRef.current.style.transform = `${
        fade === true ? "scale(1)" : "scale(1.5)"
      }`; // Adjust the scale factor as needed
    }
  }, [currentIndex, fade]);

  return (
    <div className="overflow-hidden rounded-lg w-full h-full">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover opacity-60"
      />
    </div>
  );
};

export default ZoomImage;
