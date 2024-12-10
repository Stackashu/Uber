import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
  const [rideNotification, setRideNotification] = useState(true);
  const rideNotificationPanelRef = useRef(null)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
  const confirmRidePopUpRef = useRef(null)

  // trip pop up msg 
  useGSAP(
    function () {
      if (rideNotification) {
        gsap.to(rideNotificationPanelRef.current, {
       transform:"translateY(0)"
        });
      } else {
        gsap.to(rideNotificationPanelRef.current, {
      transform:"translateY(100%)"
        });
      }
    },
    [rideNotification]
  );

  // confirmed trip pop up message 
  useGSAP(
    function () {
      if (confirmRidePopUp) {
        gsap.to(confirmRidePopUpRef.current, {
       transform:"translateY(0)"
        });
      } else {
        gsap.to(confirmRidePopUpRef.current, {
      transform:"translateY(100%)"
        });
      }
    },
    [confirmRidePopUp]
  );
  return (
    <div className=' h-screen'>
      <div className='absolute flex justify-center items-center'>
        <img className=' h-6 top-5 left-4 fixed  ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt='uber' />
        <Link to="/captain-login" className='fixed text-lg h-10 w-10 rounded-full bg-white flex justify-center items-center top-4 right-4'><i className="ri-logout-box-r-line"></i></Link>
      </div>
      <div className=' h-[65%] '>
        <img className=' h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg" alt='map' />
      </div>
    <div>
    <CaptainDetails/>
    </div>
      {/* trip card */}
      <div ref={rideNotificationPanelRef}  className=" fixed bottom-0 w-full translate-y-full  bg-white px-3 py-6 z-10 ">
        <RidePopUp setRideNotification={setRideNotification} setConfirmRidePopUp={setConfirmRidePopUp} />
      </div>
     {/* confirmed ride details part  */}
      <div ref={confirmRidePopUpRef}  className=" fixed bottom-0 w-full h-screen translate-y-full  bg-white px-3 py-6 z-10 ">
      <ConfirmRidePopUp setRideNotification={setRideNotification} setConfirmRidePopUp={setConfirmRidePopUp} />
      </div>

    </div>
  )
}

export default CaptainHome