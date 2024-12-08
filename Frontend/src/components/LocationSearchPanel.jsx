import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {

    const locations = [
        "   D-Block , gali no.1 , roshan nagar, faridabad",
        "Delhi , Dwarka , Sector-8",
        "Sultanpur , UttarPradesh "
    ]
  return (
    <div className=" m-5   ">
      {/* this is just a sample data */}
      {locations.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setUpPannel(false)
        }} className="flex gap-5 border-gray-50 active:border-black border-2 p-2 my-4 items-center rounded-xl">
        <h5 className=" w-12 h-10 rounded-full bg-[#eee] flex justify-center items-center text-lg">
          <i className="ri-map-pin-line"></i>
        </h5>
        <p className=" font-medium">
        {elem}
        </p>
      </div>
      })}
    
    
    </div>
  );
};

export default LocationSearchPanel;
