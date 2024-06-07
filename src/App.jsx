import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import div_3_1_img from "./assets/div-3-1-img.png";
import div_3_2_img from "./assets/div-3-2-img.png";
import graph_img from "./assets/div-6-graph.png";
import coins_img from "./assets/div-6-coins.png";


export default function App() {

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
        <span className="block font-bold font-gelasio text-9xl">Connecting Dots</span>
        <span className="block font-arial text-6xl">between</span>
        <span className="block font-bold font-gelasio text-9xl">Advertisers</span>
        <span className="block font-arial text-6xl">and</span>
        <span className="block font-bold font-gelasio text-9xl">Brands</span>
      </div>
    </div>

    <div className="div-2 relative bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="text-center text-white font-arial text-8xl mx-40">
        Transforming ideas into media marvels, we’re a dedicated agency crafting campaigns. With data as our compass, we navigate the media landscape, achieving resonance and impact for your brand  
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
      
    </div>

    </>
  )
}