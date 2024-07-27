import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./App.css";
import div_2_1_img from "./assets/div-2-1-img.png";
import div_2_2_img from "./assets/div-2-2-img.png";
import div_2_3_img from "./assets/div-2-3-img.png";
import div_3_1_img from "./assets/div-3-1-img.png";
import div_3_2_img from "./assets/div-3-2-img.png";
import div_5_1_img from "./assets/div-5-1-img.png";
import div_7_img from "./assets/div-7-img.png";

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./assets/xyle-logo.png";
import navbar_logo from "./assets/xyle-navbar-logo.png";

export default function App() {
  const swiperRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [animationDirection, setAnimationDirection] = useState("");
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  useEffect(() => {
    if (animationDirection !== "") {
      setTimeout(() => {
        setAnimationDirection("");
      }, 500);
    }
  }, [animationDirection]);

  const carouselItems = [
    {
      quote:
        '"With data as our compass, we navigate the media landscape, achieving resonance and impact for your brand"',
      author: "Sumedha",
      designation: "CEO, ResponsIQ",
    },
    {
      quote:
        '"Working with Xyle has been a game-changer for our advertising strategy. Their team is incredibly knowledgeable and results-oriented."',
      author: "Tripp Davis",
      designation: "CEO, Innovate Inc.",
    },
    {
      quote:
        '"Xyle’s expertise in media buying has significantly boosted our brand’s visibility. Their data-driven approach is unmatched!"',
      author: "Marshall Medoff",
      designation: "Marketing Director, Blue Ridge Media",
    },
    {
      quote:
        '"Pranav Dhawan - khali kanastar, tum kuch karte hi toh nahi ho, yahi toh dikkat hai? Bring your dairy."',
      author: "Sumedha",
      designation: "CEO, ResponsIQ",
    },
    {
      quote:
        '"Pranav Dhawan - khali kanastar, tum kuch karte hi toh nahi ho, yahi toh dikkat hai? Bring your dairy."',
      author: "Sumedha",
      designation: "CEO, ResponsIQ",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const advertisers = document.querySelector(".advertisers");
      const publishers = document.querySelector(".publishers");
      const div5 = document.querySelector(".div-5");
      const div5Rect = div5.getBoundingClientRect();

      if (div5Rect.top < window.innerHeight && div5Rect.bottom > 0) {
        const scrollPercent =
          (window.innerHeight - div5Rect.top) /
          (window.innerHeight + div5Rect.height);
        advertisers.style.transform = `translateX(${
          50 - scrollPercent * 150
        }%)`;
        publishers.style.transform = `translateX(${scrollPercent * 150 - 50}%)`;
      } else {
        advertisers.style.transform = "translateX(100%)";
        publishers.style.transform = "translateX(-100%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full bg-none bg-opacity-90 p-4 flex flex-col sm:flex-row items-center justify-between z-50">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <img src={navbar_logo} alt="Xyle Logo" className="h-12 sm:h-16" />
          <h1 className="text-white text-xl sm:text-2xl font-alfaSlabOne">
            XYLE
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center text-white underline hover:text-gray-300 font-helvetica space-x-4 sm:space-x-8">
          <a href="#home" className="mb-2 sm:mb-0">
            Home
          </a>
          <a href="#brands" className="mb-2 sm:mb-0">
            Our Brands
          </a>
          <a href="#functions" className="mb-2 sm:mb-0">
            Our Functions
          </a>
          <a href="#contact" className="mb-2 sm:mb-0">
            Contact Us
          </a>
        </div>
      </nav>

      <div
        id="home"
        className="div-1 relative bg-cover bg-center min-h-screen w-full flex items-center justify-center px-4 sm:px-8"
      >
        <div className="text-center text-white">
          <span
            data-aos="fade-up"
            className="block font-georgia text-4xl sm:text-6xl md:text-7xl lg:text-9xl"
          >
            Connecting Dots
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            className="block font-judson text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Between
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="block text-[#31A2C4] font-georgia text-4xl sm:text-6xl md:text-7xl lg:text-9xl -mt-2"
          >
            Brands
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            className="block font-judson text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            And
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="block text-[#31A2C4] font-georgia text-4xl sm:text-6xl md:text-7xl lg:text-9xl -mt-2"
          >
            Audience
          </span>
        </div>
      </div>

      <div className="div-2 overflow-x-clip relative bg-cover bg-center w-full min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-x-40 justify-center items-center px-4 sm:px-8 py-12">
        <div
          className="div-2-1 w-full lg:w-[40%] text-white font-helveticaLight text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl bigger-line-height"
          data-aos="fade-right"
        >
          Transforming ideas into media marvels, we&apos;re a dedicated agency
          crafting campaigns. With data as our compass, we navigate the media
          landscape, achieving resonance and impact for your brand.
        </div>
        <div className="div-2-2 w-full lg:w-[38%] flex flex-col">
          <div className="flex flex-col h-2/5">
            <div className="flex w-full h-full">
              <img
                data-aos="fade-left"
                src={div_2_1_img}
                className="w-3/5"
                alt="Image 1"
              />
              <img
                data-aos="fade-left"
                data-aos-delay="150"
                src={div_2_2_img}
                className="w-2/5"
                alt="Image 2"
              />
            </div>
          </div>
          <div className="h-3/5 pt-3">
            <img
              data-aos="fade-left"
              src={div_2_3_img}
              data-aos-delay="200"
              alt="Image 3"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div
        id="brands"
        className="div-3 relative overflow-x-hidden bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      >
        <video
          src="https://storage.googleapis.com/videobucketxyle/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        ></video>
        <div className="h-[50%] space-y-16 sm:space-y-32 z-10 px-4 sm:px-8">
          <div
            data-aos="fade-down"
            data-aos-offset="100"
            className="text-center text-white font-georgia text-4xl sm:text-6xl md:text-7xl lg:text-8xl mx-4 sm:mx-8 md:mx-16 lg:mx-40"
          >
            Our Brands
          </div>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-32">
            <img
              data-aos="fade-right"
              data-aos-offset="100"
              src={div_3_1_img}
              alt="Brand 1"
              className="w-full sm:w-1/2 lg:w-[36rem]"
            />
            <img
              data-aos="fade-left"
              data-aos-offset="100"
              src={div_3_2_img}
              alt="Brand 2"
              className="w-full sm:w-1/2 lg:w-[36rem]"
            />
          </div>
        </div>
      </div>

      <div className="div-4 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <div className="text-center font-georgia text-white font-arial text-4xl sm:text-6xl lg:text-8xl mx-4 sm:mx-8 lg:mx-40 my-10 sm:my-20">
          <span className="block font-extralight text-5xl sm:text-7xl lg:text-9xl">
            Some Key
          </span>
          <span className="block font-extralight text-5xl sm:text-7xl lg:text-9xl">
            Achievements
          </span>
        </div>
        <div className="div42 flex justify-center text-center text-white w-full">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute inset-0 w-full bg-white blur-lg opacity-5"></div>
            <div className="relative flex justify-center text-center text-white px-4 sm:px-16 py-3 w-full">
              <div className="absolute inset-0 w-full bg-white opacity-25"></div>
              <div className="relative flex flex-col sm:flex-row justify-between text-center text-white px-4 sm:px-16 py-2 w-full max-w-7xl gap-8 sm:gap-4">
                <div className="px-2 sm:px-4">
                  <span className="block font-georgia font-bold text-4xl sm:text-5xl lg:text-7xl p-2">
                    150+
                  </span>
                  <span className="block font-helvetica text-lg sm:text-xl lg:text-3xl">
                    Clients
                  </span>
                </div>
                <div className="px-2 sm:px-4">
                  <span className="block font-georgia font-bold text-4xl sm:text-5xl lg:text-7xl p-2">
                    320+
                  </span>
                  <span className="block font-helvetica text-lg sm:text-xl lg:text-3xl">
                    Websites/Apps
                  </span>
                </div>
                <div className="px-2 sm:px-4">
                  <span className="block font-georgia font-bold text-4xl sm:text-5xl lg:text-7xl p-2">
                    95%
                  </span>
                  <span className="block font-helvetica text-lg sm:text-xl lg:text-3xl">
                    Customer Retention
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="functions"
        className="div-5 bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center space-y-10 py-12 sm:py-24 px-4 sm:px-8"
      >
        <h2
          data-aos="fade-down"
          className="text-center text-white font-georgia text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mx-4 sm:mx-8 md:mx-16 lg:mx-40"
        >
          Our Functions
        </h2>
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-4 flex justify-center">
          <img
            src={div_5_1_img}
            data-aos="fade-up"
            alt="Our Functions"
            className="w-full sm:w-[90%] md:w-[80%] h-auto"
          />
        </div>
      </div>

      <div className="div-6 relative bg-cover min-h-screen w-full flex flex-col items-center justify-center text-white px-4 sm:px-8">
        <video
          src="https://storage.googleapis.com/videobucketxyle/globe.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 opacity-50 w-full h-full object-cover z-0"
          onCanPlay={() => console.log("Video can play")}
          onError={(e) => console.error("Video error:", e)}
        ></video>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-25 z-10"></div>

        <span className="block font-georgia text-5xl sm:text-7xl md:text-8xl lg:text-9xl px-4 sm:px-8 md:px-16 lg:px-60 text-center drop-shadow-2xl relative z-20 text-glow">
          3Billion
        </span>
        <span className="block font-arial text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative z-20 text-glow mt-4">
          Impressions Monthly
        </span>
      </div>

      <div className="relative overflow-x-clip flex flex-col items-center justify-center py-12 sm:py-24 px-8 sm:px-0">
        <img
          src={div_7_img}
          alt="background"
          className="absolute w-full h-full top-0 left-0 z-0 object-cover"
        />
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="w-full"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className={`flex flex-col items-center justify-center rounded-3xl px-4 sm:px-6 pt-6 pb-3 w-full sm:w-[90%] md:w-[80%] h-auto ${
                  activeSlideIndex === index
                    ? "active-slide"
                    : "overlay-background"
                }`}
              >
                <p className="px-4 sm:px-8 md:px-16 text-white text-lg sm:text-2xl md:text-3xl text-center">
                  {item.quote}
                </p>
                <div className="w-full flex justify-end mt-2">
                  <div className="text-base sm:text-xl">
                    <p className="text-white text-lg sm:text-2xl">
                      {item.author}
                    </p>
                    <p className="text-gray-300">{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex space-x-4 z-10 mt-8 sm:mt-12">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white bg-opacity-25 rounded-full p-2 hover:bg-opacity-40 transition-all"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white bg-opacity-25 rounded-full p-2 hover:bg-opacity-40 transition-all"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>

      <div className="div-8 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <span className="block font-georgia text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 sm:mb-12">
          Our Partners
        </span>
        <div className="w-full sm:w-3/4 hidden md:flex flex-col gap-y-8 items-center justify-center border-t-2 border-opacity-10 border-white mt-8 sm:mt-24">
          <div className="w-full flex flex-wrap items-center justify-center sm:justify-between px-4 sm:px-12 md:px-24 gap-8">
            <img
              src="/google.png"
              className="w-24 sm:w-28 md:w-36"
              alt="Google"
            />
            <img
              src="/amazon.png"
              className="w-24 sm:w-28 md:w-36"
              alt="Amazon"
            />
            <img src="/cnbc.png" className="w-36 sm:w-44 md:w-56" alt="CNBC" />
            <img src="/cnn.png" className="w-32 sm:w-36 md:w-44" alt="CNN" />
          </div>
          <div className="w-full flex flex-wrap items-center justify-center sm:justify-between px-4 sm:px-12 md:px-24 gap-8">
            <img src="/bbc.png" className="w-24 sm:w-28 md:w-36" alt="BBC" />
            <img
              src="/indexexchange.png"
              className="w-24 sm:w-28 md:w-36"
              alt="Index Exchange"
            />
            <img src="/msn.png" className="w-36 sm:w-44 md:w-56" alt="MSN" />
            <img src="/espn.png" className="w-32 sm:w-36 md:w-44" alt="ESPN" />
          </div>
        </div>
        {/* Mobile version here */}
        <div className="w-full md:hidden flex items-center justify-between border-t-2 border-opacity-10 border-white">
          <div className="flex flex-col px-4 gap-8 w-1/2 items-center">
            <img
              src="/google.png"
              className="w-24 sm:w-28 md:w-36"
              alt="Google"
            />
            <img src="/bbc.png" className="w-24 sm:w-28 md:w-36" alt="BBC" />
            <img src="/cnbc.png" className="w-36 sm:w-44 md:w-56" alt="CNBC" />
            <img src="/cnn.png" className="w-32 sm:w-36 md:w-44" alt="CNN" />
          </div>
          <div className="flex flex-col px-4 gap-8 w-1/2 items-center">
            <img
              src="/amazon.png"
              className="w-24 sm:w-28 md:w-36"
              alt="Amazon"
            />
            <img
              src="/indexexchange.png"
              className="w-24 sm:w-28 md:w-36"
              alt="Index Exchange"
            />{" "}
            <img src="/msn.png" className="w-36 sm:w-44 md:w-56" alt="MSN" />
            <img src="/espn.png" className="w-32 sm:w-36 md:w-44" alt="ESPN" />
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="div-9 relative bg-cover bg-center w-full flex flex-col lg:flex-row justify-center items-center p-8 lg:p-24 xl:p-48"
      >
        <p className="font-georgia text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 lg:mb-0 lg:mr-16 bg-transparent w-full lg:w-1/2 text-center lg:text-left">
          Let's Get Acquainted
        </p>
        <div className="bg-[#FFFFFF] p-8 lg:p-16 xl:p-20 w-full lg:w-1/2 rounded-xl bg-opacity-25">
          <form
            action=""
            className="w-full h-full flex flex-col items-center space-y-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="bg-[#FFFFFF] font-montserrat bg-opacity-20 p-3 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#FFFFFF] font-montserrat bg-opacity-20 p-3 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-[#FFFFFF] font-montserrat bg-opacity-20 p-3 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"
            />
            <textarea
              placeholder="Add Comments"
              className="bg-[#FFFFFF] font-montserrat bg-opacity-20 mb-5 p-3 h-40 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"
            ></textarea>
            <button className="px-6 py-3 bg-[#FFFFFF] rounded-3xl w-fit text-xl sm:text-2xl text-[#2B4150]">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="footer font-gotham bg-cover bg-center text-[#ffffff] pt-24 lg:pt-48 pb-16 lg:pb-36 flex justify-center">
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row text-center w-full px-4 sm:px-8"
        >
          <div className="w-full sm:w-1/3 flex flex-col items-center text-center mb-8 sm:mb-0">
            <img src={logo} alt="logo" className="w-1/2 sm:w-1/3" />
            <p className="w-full text-md mt-2 font-black">USA | UK | India</p>
          </div>
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-lg font-black">OUR BRANDS</h3>
            <a
              target="_blank"
              href="https://monetiseup.com/"
              rel="noopener noreferrer"
            >
              <p className="text-md mt-2">Monetiseup</p>
            </a>
            <p className="text-md mt-2">ResponsIQ</p>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-black">COMPANY</h3>
            <p className="text-md mt-2">Contact Us</p>
            <p className="text-md mt-2">About Us</p>
            <p className="text-md mt-2">Privacy</p>
            <p className="text-md mt-2">Terms</p>
          </div>
        </div>
      </div>
    </>
  );
}
