import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
        '"Vidit Kothari, why you gotta suck so much butt? Stop crapping everywhere you go, what is this Pranav Dhawan behaviour?"',
      author: "Sumedha",
      designation: "CEO, ResponsIQ",
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
        advertisers.style.transform = `translateX(${50 - scrollPercent * 150
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

      <nav className="navbar fixed top-0 left-0 w-full bg-none bg-opacity-90 p-4 flex items-center justify-between z-50">
        <div className="flex flex-col items-center">
          <img src={navbar_logo} alt="Xyle Logo" className="h-[4rem]" />
          <h1 className="text-white text-[1.37rem] font-alfaSlabOne">XYLE</h1>
        </div>
        <div className="flex items-center text-white underline hover:text-gray-300 font-helvetica space-x-8">
          <a href="#home">Home</a>
          <a href="#brands">Our Brands</a>
          <a href="#functions">Our Functions</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>


      <div id="home" className="div-1 relative bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <span data-aos="fade-up" className="block font-georgia text-9xl">
            Connecting Dots
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            className="block font-judson text-5xl"
          >
            Between
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="block text-[#31A2C4] font-georgia text-9xl -mt-2"
          >
            Brands
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            className="block font-judson text-5xl"
          >
            And
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="block text-[#31A2C4] font-georgia text-9xl -mt-2"
          >
            Audience
          </span>
        </div>
      </div>

      <div className="div-2 relative bg-cover bg-center min-h-screen flex ">
      <div
        className="div-2-1 w-1/2 h-[50%] text-white font-helveticaLight 
                  sm:text-[1rem] 
                  md:text-[1.5rem] 
                  lg:text-[2rem] 
                  xl:text-[4.2rem] 
                  pl-36 pt-44 pr-20 pb-36 md:pr-12 leading-tight"
        data-aos="fade-right"
      >
        Transforming ideas into media marvels, we&apos;re a dedicated agency
        crafting campaigns. With data as our compass, we navigate the media
        landscape, achieving resonance and impact for your brand
      </div>
        <div className="div-2-2 w-1/2 p-40 pt-44 pl-24 h-screen flex flex-col">
          <div className="flex flex-col h-2/5">
            <div className="flex w-full h-full">
              <img data-aos="fade-left" src={div_2_1_img} className="w-3/5" />
              <img
                data-aos="fade-left"
                data-aos-delay="150"
                src={div_2_2_img}
                className="w-2/5"
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

      <div id='brands' className="div-3 relative overflow-x-hidden bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
        <video src="https://storage.googleapis.com/videobucketxyle/vid.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0"></video>
        <div className="h-[50%] space-y-32 z-10">

          <div
            data-aos="fade-down" data-aos-offset="100"
            className="text-center text-white font-georgia text-8xl mx-40"
          >
            Our Brands
          </div>
          <div className="flex space-x-32">
            <img
              data-aos="fade-right"
              data-aos-offset="100"
              src={div_3_1_img}
              alt="Brand 1"
              className="w-[36rem]"
            />
            <img
              data-aos="fade-left"
              data-aos-offset="100"
              src={div_3_2_img}
              alt="Brand 2"
              className="w-[36rem]"
            />
          </div>
        </div>
      </div>

      <div className="div-4 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
        <div className="text-center font-georgia text-white font-arial text-8xl mx-40 my-20">
          <span className="block font-extralight text-9xl">Some Key</span>
          <span className="block font-extralight text-9xl">Achievements</span>
        </div>
        <div className="div42 flex justify-center text-center text-white w-full">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute inset-0 w-full bg-white blur-lg opacity-5"></div>
            <div className="relative flex justify-center text-center text-white px-16 py-3 w-full">
              <div className="absolute inset-0 w-full bg-white opacity-25"></div>
              <div className="relative flex justify-between text-center text-white px-16 py-2 w-full max-w-7xl gap-">
                <div className="px-4">
                  <span className="block font-georgia font-bold text-7xl p-2">
                    150+
                  </span>
                  <span className="block font-helvetica text-3xl">Clients</span>
                </div>
                <div className="px-4">
                  <span className="block font-georgia font-bold text-7xl p-2">
                    320+
                  </span>
                  <span className="block font-helvetica text-3xl">
                    Websites/Apps
                  </span>
                </div>
                <div className="px-4">
                  <span className="block font-georgia font-bold text-7xl p-2">
                    95%
                  </span>
                  <span className="block font-helvetica text-3xl">
                    Customer Retention
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='functions' className="div-5 bg-cover bg-center w-full flex flex-col items-center justify-center space-y-10 py-24">
        <h2
          data-aos="fade-down"
          className="text-center text-white font-georgia text-6xl sm:text-7xl md:text-8xl lg:text-9xl mx-4 sm:mx-8 md:mx-16 lg:mx-40"
        >
          Our Functions
        </h2>
        <div className="w-[60%] px-4 flex justify-center">
          <img
            src={div_5_1_img}
            data-aos="fade-up"
            alt="Our Functions"
            className="w-[80%] h-auto"
          />
        </div>
      </div>

      <div className="div-6 relative bg-cover min-h-screen w-full flex flex-col items-center justify-center text-white">
        <video
          src="https://storage.googleapis.com/videobucketxyle/globe.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 opacity-50 w-full h-full object-cover z-0"
          onCanPlay={() => console.log("Video can play")}
          onError={(e) => console.error("Video error:", e)}
        >        </video>

        <span className="block font-georgia text-9xl px-60 text-center drop-shadow-2xl relative z-10">
          3Billion
        </span>
        <span className="block font-arial text-6xl relative z-10">Impressions Monthly</span>
      </div>

      <div className="relative overflow-x-clip flex flex-col items-center justify-center">
        <img
          src={div_7_img}
          alt="some bg"
          className="absolute w-full h-full top-0 left-0 z-0"
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
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div
                className={`flex flex-col items-center justify-center rounded-3xl px-6 pt-6 pb-3 w-[80%] h-[50%] ${activeSlideIndex === index ? "active-slide" : "overlay-background"
                  }`}
              >
                <p className="px-16 text-white text-3xl text-center">{item.quote}</p>
                <div className="w-full flex justify-end mt-2">
                  <div className="text-xl">
                    <p className="text-white text-2xl">{item.author}</p>
                    <p className="text-gray-300">{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex space-x-4 z-10 pb-[20rem]">
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

      <div className="div-8 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
        <span className="block font-georgia text-8xl text-white">
          Our Partners
        </span>
        <div className="w-3/4 flex flex-col gap-y-8 items-center justify-center border-t-2 border-opacity-10 border-white mt-24">
          <div className="w-full flex items-center justify-between px-24">
            <img src="/google.png" className="w-36" />
            <img src="/amazon.png" className="w-36" />
            <img src="/cnbc.png" className="w-56" />
            <img src="/cnn.png" className="w-44" />
          </div>
          <div className="w-full flex items-center justify-between px-24">
            <img src="/bbc.png" className="w-36" />
            <img src="/indexexchange.png" className="w-36" />
            <img src="/msn.png" className="w-56" />
            <img src="/espn.png" className="w-44" />
          </div>
        </div>
      </div>
      <div id='contact' className="div-9 relative bg-cover bg-center w-full flex justify-center items-center p-48">
        <p className="font-georgia text-white mr-16 bg-transparent text-8xl  w-1/2">
          Let&apos;s Get Acquainted
        </p>
        <div className="bg-[#FFFFFF] p-20 w-1/2 rounded-xl bg-opacity-25">
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
              type="text"
              placeholder="Add Comments"
              className="bg-[#FFFFFF] font-montserrat bg-opacity-20 mb-5 p-3 h-40 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"
            />
            <button className="px-4 py-2 bg-[#FFFFFF] rounded-3xl w-fit text-2xl text-[#2B4150]">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="footer font-gotham bg-cover bg-center text-[#ffffff] pt-48 pb-36 flex justify-center">
        <div data-aos="fade-up" className="flex text-center w-full">
          <div className="w-1/3 flex flex-col items-center text-center">
            <img src={logo} alt="logo" className="w-1/3" />
            <p className="w-full text-md mt-2 font-black">USA | UK | India</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-black">OUR BRANDS</h3>
            <a target="_blank" href="https://monetiseup.com/"><p className="text-md mt-2">Monetiseup</p></a>
            <p className="text-md mt-2">ResponsIQ</p>
          </div>
          <div className="w-1/3">
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
