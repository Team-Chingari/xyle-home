import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(items.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    if (currentIndex === 0) {
      setPrevIndex(items.length - 1);
      setNextIndex(currentIndex + 1);
    } else {
      setPrevIndex(currentIndex - 1);
      setNextIndex((currentIndex + 1) % items.length);
    }
  }, [currentIndex, items.length]);

  return (
    <div className="z-50">
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="bg-[#FFFFFF] bg-opacity-25 flex flex-col items-center justify-center rounded-3xl px-6 pt-6 pb-3 w-1/2 shadow-2xl">
          <p className="px-16 text-white text-3xl text-center">
            {items[currentIndex].quote}
          </p>
          <div className="w-full flex justify-end mt-2">
            <div className="text-xl">
              <p className="text-white">{items[currentIndex].author}</p>
              <p className="text-gray-300">{items[currentIndex].designation}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] bg-opacity-25 flex flex-col items-center justify-center rounded-3xl px-6 pt-6 pb-3 w-1/2 absolute -left-[20%] translate-y-24 blur-[3px]">
          <p className="px-16 text-white text-3xl text-center">
            {items[prevIndex].quote}
          </p>
          <div className="w-full flex justify-end mt-2">
            <div className="text-xl">
              <p className="text-white">{items[prevIndex].author}</p>
              <p className="text-gray-300">{items[prevIndex].designation}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] bg-opacity-25 flex flex-col items-center justify-center rounded-3xl px-6 pt-6 pb-3 w-1/2 absolute -right-[20%] translate-y-24 blur-[3px]">
          <p className="px-16 text-white text-3xl text-center">
            {items[nextIndex].quote}
          </p>
          <div className="w-full flex justify-end mt-2">
            <div className="text-xl">
              <p className="text-white">{items[nextIndex].author}</p>
              <p className="text-gray-300">{items[nextIndex].designation}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-8 mt-20">
        <p
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + items.length) % items.length)
          }
          className="bg-[#92898947] p-2 text-xl rounded-full text-[#FFFFFF] cursor-pointer hover:scale-110 transition duration-100ms z-50"
        >
          {"<"}
        </p>
        <p
          onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
          className="bg-[#92898947] p-2 text-xl rounded-full text-[#FFFFFF] cursor-pointer hover:scale-110 transition duration-100ms z-50"
        >
          {">"}
        </p>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
