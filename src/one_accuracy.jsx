import react from 'react'

export default function Accuracy(props){

    function redirectToWhatsApp() {
        // Phone number with country code
        const phoneNumber = "918445659152";
        // Default message (URL encoded)
        const defaultMessage = encodeURIComponent(`Hello there, I would like to talk to you about the package of ${League} ${Year}.`);
        // Construct WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
        // Redirect to WhatsApp
        window.location.href = whatsappUrl;
      }

      let league = props.league;
      let tosspassed = props.tosspassed
      let matchpassed = props.matchpassed
      let total = props.total


    return(
        <>
        <div className="mb-4 mt-4 flex flex-column justify-center mx-4">
        
        <div className="font-mont bg-white flex flex-col items-center justify-center">
        <div className="font-mont text-black items-center text-2xl mt-2 mx-2 md:text-3xl md:my-8 font-bold" >
           {league} Accuracy
         </div> 
          <div className="font-mont text-black flex flex-col items-center my-4 text-1.5xl mx-2 md:text-2xl md:my-8 font-semibold" >
         <div>
            {tosspassed}/{total} Toss won
         </div>

         <div>
            {matchpassed}/{total} Match won
         </div>

         </div>

        
            <div className=""> 
          
           <button onClick={redirectToWhatsApp} className="my-2 md:my-8 font-mont font-semibold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    Whatsapp us
    </button>
    
    
    
    </div>
           </div>
          </div>
          </>
      )
    
}