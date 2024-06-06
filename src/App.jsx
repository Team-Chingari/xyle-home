import './App.css';

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

    <div className="div-3 relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <div className="text-center text-white font-gelasio font-bold text-8xl mx-40">
        Our Brands
      </div>
      <div className="flex space-x-10">
          <img src="/assets/brand1.png" alt="Brand 1" className="w-1/3" />
          <img src="/assets/div-3-2-img.png" alt="Brand 2" className="w-1/3" />
        </div>
    </div>

    </>
  )
}