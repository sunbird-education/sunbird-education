import { useState, useEffect } from "react";

// SAMPLE: Replace these images with your actual school photos
import heroBg1 from "@/assets/background-images/hero-bg-1.jpg";
import heroBg2 from "@/assets/background-images/hero-bg-2.jpg";
import heroBg3 from "@/assets/background-images/hero-bg-3.jpg";
import heroBg4 from "@/assets/background-images/hero-bg-4.jpg";
import heroBg5 from "@/assets/background-images/hero-bg-5.jpg";

const backgroundImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

export const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentIndex === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
      {/* Lighter gradient overlay for text readability while keeping images visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-secondary/40" />
      {/* Subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};
