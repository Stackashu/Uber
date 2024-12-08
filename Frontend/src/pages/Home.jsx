import React, { useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [upPannel, setUpPannel] = useState(false);
  const panelRef = useRef(null);
  const closePanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
 const confirmedRideRef = useRef(null)
 const [vehicleFound, setVehicleFound] = useState(false)
 const vehicleFoundRef = useRef(null)
 const [driverDetails, setDriverDetails] = useState(false)
 const driverDetailsRef = useRef(null)
 const [lookingDriverPanel, setlookingDriverPanel] = useState(true)
const lookingDriverRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };

  useGSAP(
    function () {
      if (upPannel) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(closePanelRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(closePanelRef.current, {
          opacity: 0,
        });
      }
    },
    [upPannel]
  );

  // for selecting vehicles
  useGSAP(function () {
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[vehiclePanelOpen]);

  // for confirmed Ride
  useGSAP(function () {
    if(confirmRidePanel){
      gsap.to(confirmedRideRef.current, {
        transform: "translateY(0)",
      });
    }else{
      gsap.to(confirmedRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[confirmRidePanel]);

  // vehicle found panel
  useGSAP(function () {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[vehicleFound]);

  // drive details
  useGSAP(function () {
    if(driverDetails){
      gsap.to(driverDetailsRef.current, {
        transform: "translateY(0)",
      });
    }else{
      gsap.to(driverDetailsRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[driverDetails]);

  // loooking driver panel 
  useGSAP(function () {
    if(lookingDriverPanel){
      gsap.to(lookingDriverRef.current, {
        transform: "translateY(0)",
      });
    }else{
      gsap.to(lookingDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[lookingDriverPanel]);

  return (
    <div>
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="UBER"
      />
      <div  className="h-screen w-screen">
        {/* This image is for temporary user */}
        <img
          className=" h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg"
          alt="map"
        />
      </div>
      <div className=" overflow-hidden absolute h-screen w-full flex flex-col justify-end  top-0 ">
        <div className=" bg-white relative h-[30%] p-5">
          <h5
            ref={closePanelRef}
            onClick={() => setUpPannel(false)}
            className="text-2xl absolute right-10"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className=" text-2xl font-semibold ">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className=" line h-14 w-1 rounded-lg absolute bg-gray-950 left-8 top-[48%] "></div>
            <input
              onClick={() => setUpPannel(true)}
              className=" bg-[#eee] rounded-lg text-base py-2 px-8 mt-4 w-full"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
            />
            <input
              className=" bg-[#eee] rounded-lg text-base py-2 px-8  mt-5 w-full"
              type="text"
              onClick={() => setUpPannel(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter the destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" h-[0%] bg-white ">
          <LocationSearchPanel
         setUpPannel={setUpPannel}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      {/* types of vehicle will visible */}
      <div ref={vehiclePanelRef} className=" fixed bottom-0 w-full translate-y-full  bg-white px-3 py-6 z-10 ">
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      {/* your Selected Ride will be visible */}
      <div ref={confirmedRideRef} className=" fixed bottom-0 w-full translate-y-full  bg-white px-3 py-6 z-10 ">
      <ConfirmedRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      {/* looking for a driver panel willl be visible */}
      <div ref={vehicleFoundRef}  className=" fixed bottom-0 w-full translate-y-full  bg-white px-3 py-6 z-10 ">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      {/* Driver Detils will be shown */}
      <div ref={driverDetailsRef}  className=" fixed bottom-0 w-full translate-y-full  bg-white px-3 py-6 z-10 ">
        <WaitingForDriver setDriverDetails={setDriverDetails} />
      </div>
    </div>
  );
};

export default Home;
