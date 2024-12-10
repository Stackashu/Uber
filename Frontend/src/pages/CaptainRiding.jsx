import React, { useRef ,useState } from 'react'
import { Link } from 'react-router-dom'
import  {useGSAP} from "@gsap/react" 
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRideRef = useRef(null)

    useGSAP(function () {
        if(finishRidePanel){
          gsap.to(finishRideRef.current, {
            transform: "translateY(0)",
          });
        }else{
          gsap.to(finishRideRef.current, {
            transform: "translateY(100%)",
          });
        }
      },[finishRidePanel]);
    
   
  return (
    <div className=' h-screen'>
    <div className='absolute flex justify-center items-center'>
      <img className=' h-6 top-5 left-4 fixed  ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt='uber' />
      <Link to="/captain-login" className='fixed text-lg h-10 w-10 rounded-full bg-white flex justify-center items-center top-4 right-4'><i className="ri-logout-box-r-line"></i></Link>
    </div>
    <div className=' h-[80%] '>
      <img className=' h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg" alt='map' />
    </div>


     
    <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
                onClick={() => {
                   setFinishRidePanel(true)
                }}
            >
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

            <div ref={finishRideRef}  className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
               <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>


  </div>
  )
}

export default CaptainRiding
