import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Carousel({ images, title, description, date }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPtagVisible, setIsPtagVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  const handleCarouselMouseEnter = () => {
    setIsPtagVisible(true);
  };

  const handleCarouselMouseLeave = () => {
    setIsPtagVisible(false);
  };

  const handleCarouselClick = () => {
    setIsPtagVisible(!isPtagVisible);
  };

  return (
    <div
      className="carousel h-[60vh] lg:w-[40vw] lg:mx-[10vh] w-[90vw] border-[#008E50] opacity-95 rounded-2xl border-2 border-solid mx-auto relative mt-[10vh]  "
      onMouseEnter={handleCarouselMouseEnter}
      onMouseLeave={handleCarouselMouseLeave}
      onClick={handleCarouselClick}
    >
      <div
        className={`flex flex-col items-center flex-1 h-full w-full mx-[px] ${
          isPtagVisible ? "bg-[#008E50] rounded-xl" : ""
        }`}
      >
        <img
          src={images[currentImageIndex]}
          alt=""
          loading="lazy"
          className={`h-[50vh] w-[80vw] lg:w-[35vw] mt-4 rounded-2xl  ${
            isPtagVisible ? "hidden " : ""
          }`}
        />
        <h2
          className={`text-[#008E50] text-sm lg:text-xl font-bold text-justify mt-auto absolute bottom-0 pb-4 ${
            isPtagVisible ? "hidden" : ""
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-white h-[50vh] w-[90vw] lg:w-[40vw] p-[2rem] pt-12 text-justify flex justify-center items-center absolute ${
            isPtagVisible ? "" : "hidden"
          }`}
        >
          {description}
        </p>
        <p
          className={`h-[10vh] w-[90vw] lg:w-[40vw] p-[2rem] absolute bottom-0 text-white ${
            isPtagVisible ? "" : "hidden"
          }`}
        >
          <span className="font-bold text-white">Date</span>: {date}
        </p>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Carousel;
