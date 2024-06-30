import "./Carousel2.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Carousel2 = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleNext = () => {
    setAnimationDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setAnimationDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container z-50">
      {items.map((item, index) => {
        let position = "";
        if (index === currentIndex) {
          position = "main";
        } else if (
          index === (currentIndex - 1 + items.length) % items.length
        ) {
          position = "left";
        } else if (index === (currentIndex + 1) % items.length) {
          position = "right";
        }

        const animationClass =
          position === "main"
            ? animationDirection === "right"
              ? "enter-right"
              : "enter-left"
            : animationDirection === "right"
            ? "exit-right"
            : "exit-left";

        return (
          <div
            key={index}
            className={`carousel-item ${position} ${animationClass} relative flex flex-col items-center justify-center h-full w-full`}
          >
            <div className="bg-[#FFFFFF] bg-opacity-25 flex flex-col items-center justify-center rounded-3xl px-6 pt-6 pb-3 w-1/2 shadow-2xl">
              <p className="px-16 text-white text-3xl text-center">
                {item.quote}
              </p>
              <div className="w-full flex justify-end mt-2">
                <div className="text-xl">
                  <p className="text-white">{item.author}</p>
                  <p className="text-gray-300">{item.designation}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center space-x-8 mt-20">
        <p
          onClick={handlePrev}
          className="bg-[#92898947] p-2 text-xl rounded-full text-[#FFFFFF] cursor-pointer hover:scale-110 transition duration-100ms z-50"
        >
          {"<"}
        </p>
        <p
          onClick={handleNext}
          className="bg-[#92898947] p-2 text-xl rounded-full text-[#FFFFFF] cursor-pointer hover:scale-110 transition duration-100ms z-50"
        >
          {">"}
        </p>
      </div>
    </div>
  );
};

Carousel2.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel2;
