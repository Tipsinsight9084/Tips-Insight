import React from "react";

export default function Prediction(){

    let btn_heading = "Get Predictons"
    

    function redirectToWhatsApp() {
        // Phone number with country code
        const phoneNumber = "918445659152";
        // Default message (URL encoded)
        const defaultMessage = encodeURIComponent(`Hello there, I just saw your website and I am intresting in buying cricket prediction tips`);
        // Construct WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
        // Redirect to WhatsApp
        window.location.href = whatsappUrl;
      }

// className=" mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto font-mont"
  return(
    <>
    {/* <div className="mb-8 mt-8 flex flex-column justify-center mx-4"> */}
    
    <div className="font-mont bg-black flex flex-col items-center justify-center">
    <div className="font-mont text-white items-center text-2xl mt-8 mx-2 md:text-3xl md:my-8 font-bold" >
       CRICKET PREDICTIONS THAT HELP YOU WIN
        </div>
        <div className="border-2 border-solid border-yellow-700 w-[80%] mt-2 rounded-2xl">

        </div>
      <div className="font-mont text-white items-center my-4 text-1.5xl mx-2 md:text-2xl md:my-8 font-semibold" >
      WE OFFER ACCURATE CRICKET PREDICTIONS FOR ALL MAJOR TOURNAMENTS
        </div>
        <div className=""> 
      
       <button onClick={redirectToWhatsApp} className="my-4 md:my-8 font-mont font-semibold text-base md:text-xl rounded-3xl px-8 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
{btn_heading}
</button>



</div>
       </div>
     
      </>
  )

}


