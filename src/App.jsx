import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hero_image from './assets/hero_img.jpg'
import './App.css'

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
     <div className='hero_img'>
      <img className='hero_img' src={hero_image} alt="" height onClick={handleclick}/>
     </div>
    </>
  )
}

export default App
