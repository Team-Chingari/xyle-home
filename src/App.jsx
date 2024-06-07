import './App.css';
import div_3_1_img from "./assets/div-3-1-img.png";
import div_3_2_img from "./assets/div-3-2-img.png";


export default function App() {

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
      <div className='div-4-2 h-100 flex justify-center space-x-60 text-center text-white px-96'>
        <div className='py-4'>
          <span className="block font-bold font-gelasio text-6xl px-5 p-2">150+</span>
          <span className="block font-arial text-3xl">Clients</span>
        </div>

        <div className='py-4'>
          <span className="block font-bold font-gelasio text-6xl px-5 p-2">320+</span>
          <span className="block font-arial text-3xl">Websites/Apps</span>
        </div>

        <div className='py-4'>
          <span className="block font-bold font-gelasio text-6xl px-5 p-2">95%</span>
          <span className="block font-arial text-3xl">Customer Retention</span>
        </div>
        
      </div>
    </div>

    </>
  )
}