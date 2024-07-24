import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hero_image from './assets/hero_img.jpg'
import './App.css'
import BottomNav from './Bottomnav'
import Footer from './footer'
function App() {
  const [count, setCount] = useState(0)
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
     <div className='hero_img'>
      <img className='hero_img' src={hero_image} alt="" height onClick={handleclick}/>
     </div>
     <div className='bottom-nav-parent   flex justify-center'>
<div className='bottom-nav w-[80%] mb-3 rounded-full border-[0px] bg-gradient-to-r00 bg-white from-customRed to-customBrown'>
<BottomNav/>
<Footer/>
</div>

</div>
    </>
  )
}

export default App
