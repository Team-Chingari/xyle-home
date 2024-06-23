import { useState, useEffect } from "react";
import "./App.css";
import div_3_1_img from "./assets/div-3-1-img.png";
import div_3_2_img from "./assets/div-3-2-img.png";
import div_7_img from "./assets/div-7-img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/HomepageFeatures/Carousel";

export default function App() {
  const [animationDirection, setAnimationDirection] = useState("");

  useEffect(() => {
    if (animationDirection !== "") {
      setTimeout(() => {
        setAnimationDirection("");
      }, 500);
    }
  }, [animationDirection]);


  const carouselItems = [
    { quote: "\"With data as our compass, we navigate the media landscape, achieving resonance and impact for your brand\"", author: "Sumedha", designation: "CEO, ResponsIQ" },
    { quote: "\"Vidit Kothari, why you gotta suck so much butt? Stop crapping everywhere you go, what is this Pranav Dhawan behaviour?\"", author: "Sumedha", designation: "CEO, ResponsIQ" },
    { quote: "\"Pranav Dhawan - khali kanastar, tum kuch karte hi toh nahi ho, yahi toh dikkat hai? Bring your dairy.\"", author: "Sumedha", designation: "CEO, ResponsIQ" },
  ];

  return (
    <>
      <div className="div-1 relative bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <span className="block font-bold font-gelasio text-9xl">
            Connecting Dots
          </span>
          <span className="block font-arial text-6xl">between</span>
          <span className="block font-bold font-gelasio text-9xl">
            Advertisers
          </span>
          <span className="block font-arial text-6xl">and</span>
          <span className="block font-bold font-gelasio text-9xl">Brands</span>
        </div>
      </div>

      <div className="div-2 relative bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="text-center text-white font-arial text-8xl mx-40">
          Transforming ideas into media marvels, we&apos;re a dedicated agency
          crafting campaigns. With data as our compass, we navigate the media
          landscape, achieving resonance and impact for your brand
        </div>
      </div>

      <div className="div-3 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center space-y-20">
        <div className="text-center text-white font-gelasio font-bold text-8xl mx-40">
          Our Brands
        </div>
        <div className="flex space-x-10">
          <img src={div_3_1_img} alt="Brand 1" className="w-100 h-100" />
          <img src={div_3_2_img} alt="Brand 2" className="w-100 h-100" />
        </div>
      </div>

      <div className="div-4 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
        <div className="text-center text-white font-arial text-8xl mx-40 my-20">
          <span className="block font-bold font-gelasio text-9xl">
            Feel The Odds Fall
          </span>
          <span className="block font-bold font-gelasio text-9xl">
            In Your Favour
          </span>
        </div>
        <div className="div42 flex justify-center text-center text-white">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative div42 flex justify-center text-center text-white px-16 py-5">
              <div className="px-4">
                <span className="block font-bold font-gelasio text-7xl px-48 p-2">
                  150+
                </span>
                <span className="block font-arial text-3xl">Clients</span>
              </div>
              <div className="px-4">
                <span className="block font-bold font-gelasio text-7xl px-48 p-2">
                  320+
                </span>
                <span className="block font-arial text-3xl">Websites/Apps</span>
              </div>
              <div className="px-4 w-1/3">
                <span className="block font-bold font-gelasio text-7xl px-48 p-2">
                  95%
                </span>
                <span className="block font-arial text-3xl">
                  Customer Retention
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-6 flex items-center bg-cover bg-center flex-col justify-center p-20">
        <p className="text-9xl text-[#FFFFFF] font-bold">3 Billion</p>
        <p className="text-8xl text-[#FFFFFF]">Impressions Monthly</p>
        <div className="bg-white mt-20 w-[90%] h-96 rounded-2xl"></div>
      </div>
      <div className="relative bg-black py-40">
        <img src={div_7_img} alt="some bg" className="absolute w-full h-full top-0 left-0 z-0 opacity-20"/>
        <Carousel items={carouselItems} />
      </div>

      <div className="div-8 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
        <div className="text-white py-40">
          <span className="block font-bold font-gelasio text-9xl px-60 ">
            Our Partners
          </span>
          <div className="container mt-12">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-1">
              <div className="col">
                <div className="p-3">
                  <img src="/google.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="/amazon.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="appnexus.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="/cnn.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="/cnbc.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="/indexexchange.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="msn.png" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <img src="espn.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-9 relative bg-cover bg-center w-screen flex justify-between items-center p-48">
        <p className="font-gelasio text-white bg-transparent text-9xl w-1/2">
          Let&apos;s Get Acquainted
        </p>
        <div className="bg-[#FFFFFF] p-20 w-1/2 rounded-xl bg-opacity-25">
          <form action="" className="w-full h-full flex flex-col items-center space-y-6">
            <input type="text" placeholder="Name" className="bg-[#FFFFFF] bg-opacity-20 p-3 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"/>
            <input type="text" placeholder="Email" className="bg-[#FFFFFF] bg-opacity-20 p-3 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"/>
            <input type="text" placeholder="Mobile Number" className="bg-[#FFFFFF] bg-opacity-20 p-3 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"/>
            <textarea type="text" placeholder="Add Comments" className="bg-[#FFFFFF] bg-opacity-20 p-3 h-40 rounded-2xl w-full text-[#2B4150] placeholder:text-[#2B4150]"/>
            <button className="p-3 bg-[#FFFFFF] rounded-3xl w-fit text-2xl">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}
