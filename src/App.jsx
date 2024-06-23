import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import div_2_1_img from "./assets/div-2-1-img.png";
import div_2_2_img from "./assets/div-2-2-img.png";
import div_2_3_img from "./assets/div-2-3-img.png";
import div_3_1_img from "./assets/div-3-1-img.png";
import div_3_2_img from "./assets/div-3-2-img.png";
import graph_img from "./assets/div-6-graph.png";
import samplelogo from "./assets/samplelogo.png";
import coins_img from "./assets/div-6-coins.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "react-slick";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const buttonStyle = {
    background: 'transparent',
    border: '2px solid #333',
    color: '#333',
    fontSize: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '0 10px',
  };

  const data = [
    'Quote 1',
    'Quote 2',
    'Quote 3',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextData = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  const prevData = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  const [animationDirection, setAnimationDirection] = useState("");

  useEffect(() => {
    if (animationDirection !== "") {
      setTimeout(() => {
        setAnimationDirection("");
      }, 500);
    }
  }, [animationDirection]);

  const handleNext = () => {
    setAnimationDirection("next");
    nextData();
  };

  const handlePrev = () => {
    setAnimationDirection("prev");
    prevData();
  };

  const [showCoins, setShowCoins] = useState(false);
  const div6Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCoins(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    if (div6Ref.current) {
      observer.observe(div6Ref.current);
    }

    return () => {
      if (div6Ref.current) {
        observer.unobserve(div6Ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="div-1 relative bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <span data-aos="fade-up" className="block font-judson text-9xl">Connecting Dots</span>
          <span data-aos="fade-up" data-aos-delay="50" className="block font-judson text-6xl">Between</span>
          <span data-aos="fade-up" data-aos-delay="100" className="block font-judson text-9xl">Advertisers</span>
          <span data-aos="fade-up" data-aos-delay="150" className="block font-judson text-6xl">And</span>
          <span data-aos="fade-up" data-aos-delay="200" className="block font-judson text-9xl">Brands</span>
        </div>
      </div>

      <div className="div-2 relative bg-cover bg-center min-h-screen flex ">
        <div className="div-2-1 w-1/2 h-full text-white font-jaldi text-6xl p-36 pr-30 leading-relaxed" data-aos="fade-right">
        Transforming ideas into media marvels, we’re a dedicated agency crafting campaigns. With data as our compass, we navigate the media landscape, achieving resonance and impact for your brand
        </div>
        <div className="div-2-2 w-1/2 p-40 pl-24 h-screen flex flex-col">
          <div className="flex flex-col h-2/5">
            <div className="flex w-full h-full">
              <img data-aos="fade-left" src={div_2_1_img} className="w-3/5" />
              <img data-aos="fade-left" data-aos-delay="150" src={div_2_2_img} className="w-2/5" />
            </div>
          </div>
  
          <div className="h-3/5 pt-3">
            <img data-aos="fade-left" src={div_2_3_img} data-aos-delay="200" alt="Image 3" className="w-full" />
          </div>
        </div>
      </div>

      <div className="div-3 relative overflow-x-hidden bg-cover bg-center min-h-screen flex flex-col items-center justify-center space-y-20">
        <div data-aos="fade-down" className="text-center text-white font-georgia text-8xl mx-40">
          Our Brands
        </div>
        <div className="flex space-x-10">
          <img data-aos="fade-right" src={div_3_1_img} alt="Brand 1" className="w-[55rem]" />
          <img data-aos="fade-left" src={div_3_2_img} alt="Brand 2" className="w-[55rem]" />
        </div>
      </div>

      <div className="div-4 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
        <div className="text-center text-white font-arial text-8xl mx-40 my-20">
          <span className="block font-bold font-gelasio text-9xl">Feel The Odds Fall</span>
          <span className="block font-bold font-gelasio text-9xl">In Your Favour</span>
        </div>
        <div className='div42 flex justify-center text-center text-white'>
          <div className='relative w-full flex justify-center items-center'>
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className='relative div42 flex justify-center text-center text-white px-16 py-5'>
              <div className='px-4'>
                <span className="block font-bold font-gelasio text-7xl px-48 p-2">150+</span>
                <span className="block font-arial text-3xl">Clients</span>
              </div>
              <div className='px-4'>
                <span className="block font-bold font-gelasio text-7xl px-48 p-2">320+</span>
                <span className="block font-arial text-3xl">Websites/Apps</span>
              </div>
              <div className='px-4 w-1/3'>
                <span className="block font-bold font-gelasio text-7xl px-48 p-2">95%</span>
                <span className="block font-arial text-3xl">Customer Retention</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="div-6 relative bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="text-center text-white py-40">
          <span className="block font-bold font-gelasio text-9xl px-60">3Billion</span>
          <span className="block font-arial text-6xl">Impressions Monthly</span>

          <div className="relative py-40 mb-40">
            <img src={graph_img} className={`absolute transition-opacity duration-500 ${showCoins ? 'opacity-0' : 'opacity-100'}`} alt='Graph' />
            <img src={coins_img} className={`absolute transition-opacity duration-500 ${showCoins ? 'opacity-100' : 'opacity-0'}`} alt='Coins' />
          </div>
        </div>
      </div>

      <div ref={div6Ref} className="div-7 relative bg-cover bg-center min-h-screen flex items-center justify-center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {data.map((quote, index) => (
              <div
                key={index}
                style={{
                  // width: index === currentIndex ? '1320px' : '1220px', // Change width based on the current index
                  width: '500px',
                  height: '100px',
                  background: 'white',
                  filter: blur('100px'),
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '20px',
                  transform: `translateY(${index === currentIndex ? '-70px' : '0'}) scale(${index === currentIndex ? '1.1' : '1'})`,
                  fontSize: index === currentIndex ? '24px' : '14px',
                  transition: 'transform 0.5s, font-size 0.5s',
                  opacity: index === currentIndex ? '0.6' : '0.5',
                }}
              >
                {quote}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={handlePrev} style={buttonStyle}>{'<'}</button>
            <button onClick={handleNext} style={buttonStyle}>{'>'}</button>
          </div>
        </div>
      </div>

      <div className="div-8 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
        <div className="text-white py-40">
          <span className="block font-bold font-gelasio text-9xl px-60 ">Our Partners</span>
          <div class="container text-center ">
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-1">
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <img src={samplelogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="div-9 relative bg-cover bg-center min-h-screen flex justify-center">
        <div class="container">
          <div class="row align-items-center ">

            <div class="col text-white font-bold font-gelasio text-9xl">
              Let's Get Acquainted
            </div>

            <div class="col text-bg-secondary p-20 opacity-35 rounded-4 font-gotham">
              <form>
                <div class="mb-3">
                  <input type="text" class="form-control" id="nameInput" placeholder="Name" aria-describedby="nameHelp" />
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="emailInput" placeholder="Email address" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <input type="tel" class="form-control" id="mobileInput" placeholder="Mobile Number" />
                </div>
                <div class="mb-3">
                  <textarea class="form-control" id="commentsInput" placeholder="Add Comments" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>


          </div>
        </div>
      </div>

    </>
  );
}
