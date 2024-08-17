import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hero_image from './assets/hero_img.jpg'
import './App.css'
import BottomNav from './Bottomnav'
import FinalCarousel from './carosoul'
import Footer from './footer'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)
  const phoneNumber = "918445659152";
  // Default message (URL encoded)
  const defaultMessage = encodeURIComponent("Hello there, I would like to ask you some question about Cricket Prediction.");
  const username = "tips_insight";
  function handleclick() {
    // Phone number with country code
    const phoneNumber = "918445659152";
    // Default message (URL encoded)
    const defaultMessage = encodeURIComponent(`Hello there, I would like to talk to you about the leagues prediction.`);
    // Construct WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  }

  return (
    <>
    <div className='mt-4 animate-combined bg-gradient-to-r from-customRed via-customBrown to-orange-500 bg-clip-text text-transparent text-2xl font-black mb-0 py-0'>
  { "Welcome to Tipsinsight" }
  </div>
  <div className='text-black font-bold text-2xl'>
  💲
 Mauka hai <span className='text-green-500'>Paisa</span> kamane ka 💲

  </div>
  <FinalCarousel/>

  
     <div className='hero_img'>
      <img className='hero_img' src={hero_image} alt="" height onClick={handleclick}/>
     </div>
     <div className='text-black mt-6 text-2xl font-bold'>
    India's Most <span className='text-customRed font-extrabold'>Reliable</span> Predictions
  </div>
  
            <button onClick={handleclick}className="my-4 md:my-8 font-mont font-semibold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
  Message us on whatsapp
</button>


<p className="mb-8 lg:mb-16 font-semibold text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      Want to say something to us? Here you go. We are waiting for your message.
    </p>
    {/* <div className='md:text-4xl md:my-8 md:mx-20 font-black text-3xl my-4 mt-8 mx-4'>Welcome to Tips Insight. </div> */}
    <div className='md:text-xl font-bold text-black md:mt-4 md:mx-20 mx-4 text-xs'>Deciphering the world of Cricket prediction for you!</div>

    <div className="flex my-2 justify-center gap-12  md:p-4 pt-4 pb-2 md:basis-4/12">
<a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`}><FaWhatsapp className="text-2xl md:text-3xl text-black cursor-pointer"/></a>
<a href={`https://t.me/${username}`}><FaTelegram className="text-2xl md:text-3xl text-black cursor-pointer"/></a>
<a href="https://www.instagram.com/tipsinsight?igsh=bzltMXE0c2V1d293"><FaInstagram className="text-2xl md:text-3xl text-black cursor-pointer"/></a>


</div>


     <div className='bottom-nav-parent flex justify-center'>
<div className='bottom-nav w-[80%] mb-3 rounded-full border-[0px] bg-gradient-to-r00 bg-white from-customRed to-customBrown'>
{/* <BottomNav/> */}
<Footer/>
</div>

</div>
    </>
  )
}

export default App
