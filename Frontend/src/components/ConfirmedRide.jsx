import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
        <h4 onClick={() => {   props.setConfirmRidePanel(false) }} className=" text-2xl absolute right-10 top-5"> <i className="ri-arrow-down-s-line"></i></h4>
        <h3 className=" font-semibold mb-5 text-xl">Confirm your Ride</h3>
        <hr></hr>
     <div className='w-full flex justify-center items-center my-5'>
        <img className="h-20"src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"alt=""/>
    </div>
    <hr></hr>
      <div className='mb-7'>
        <div className=' flex w-full items-center p-4 gap-6  border-b-2 border-gray-100'>
            {/* current location */}
            <h3 className=' text-xl'><i className="ri-map-pin-3-fill"></i></h3>
            <div className=''>
                <h3 className="font-semibold text-lg ">h-44 , d-block</h3>
                <h4 className=' text-gray-500 text-sm'>  roshan nagar , faridabad , haryana</h4>
                
            </div >

        </div>
        
        <div className=' flex w-full items-center p-4 gap-6   border-b-2 border-gray-100'>
            {/* destination location */}
            <h3 className=' text-xl'><i className="ri-map-pin-line"></i></h3>
            <div>
                <h3 className="font-semibold text-lg ">sector -148</h3>
                <h4 className=' text-gray-500 text-sm'>  Pari chowk , grtr noida</h4>
            </div>
        </div>
        <div className=' flex w-full items-center p-4 gap-6 '>
            {/*  price */}
            <h3 className=' text-xl'><i className="ri-cash-line"></i></h3>
            <div>
                <h3 className="font-semibold text-lg ">₹101</h3>
                <h4 className=' text-gray-500 text-sm'> Fare, Cash
                </h4>
            </div>
        </div>
    </div>
       <div onClick={()=>{
        props.setConfirmRidePanel(false)
        props.setVehicleFound(true)
       }} className=' w-full bg-emerald-500 text-black py-2 font-semibold mt-10   flex items-center justify-center text-lg'>Confirm </div>
    </div>
  )
}

export default ConfirmedRide
