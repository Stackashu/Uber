import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h4 onClick={() => { props.setVehiclePanelOpen(false) }} className=" text-2xl absolute right-10 top-5"> <i className="ri-arrow-down-s-line"></i></h4>
            <h3 className=" font-semibold mb-5 text-xl">Choose a Vehicle</h3>
            {/* car */}
            <div onClick={()=>{props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className=" flex gap-3 justify-center mb-3 items-center w-full border-2 rounded-xl px-1 py-2   active:border-black ">
                <img
                    className="h-12"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt=""
                />
                <div className=" w-1/2  ">
                    <h4 className=" font-medium text-base">
                        UberGo
                        <span>
                            <i className="ri-user-fill"></i>
                        </span>
                        4
                    </h4>
                    <h5 className=" font-medium text-sm"> 2 mins away</h5>
                    <p className=" font-medium text-xs text-gray-600">
                        Affordable,compact rides
                    </p>
                </div>
                <h2 className=" text-xl font-semibold">₹200</h2>
            </div>
            {/* motorcycle */}
            <div onClick={()=>{props.setConfirmRidePanel(true) 
                props.setVehiclePanelOpen(false)}} className=" flex gap-3 mb-3 justify-center items-center w-full border-2 rounded-xl px-1 py-2   active:border-black ">
                <img
                    className="h-10 mr-5"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                    alt=""
                />
                <div className="  w-1/2  ">
                    <h4 className=" font-medium text-base">
                        UberGo
                        <span>
                            <i className="ri-user-fill"></i>
                        </span>
                        1
                    </h4>
                    <h5 className=" font-medium text-sm"> 2 mins away</h5>
                    <p className=" font-medium text-xs text-gray-600">
                        Affordable,motorcycles rides
                    </p>
                </div>
                <h2 className=" text-xl font-semibold">₹101</h2>
            </div>
            {/* auto */}
            <div onClick={()=>{props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className=" flex gap-3 justify-center mb-3 items-center w-full border-2 rounded-xl px-1 py-2   active:border-black ">
                <img
                    className="h-10 mr-5"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt=""
                />
                <div className=" w-1/2  ">
                    <h4 className=" font-medium text-base">
                        UberGo
                        <span>
                            <i className="ri-user-fill"></i>
                        </span>
                        3
                    </h4>
                    <h5 className=" font-medium text-sm"> 2 mins away</h5>
                    <p className=" font-medium text-xs text-gray-600">
                        Affordable,Auto rides
                    </p>
                </div>
                <h2 className=" text-xl font-semibold">₹139</h2>
            </div>
        </div>
    )
}

export default VehiclePanel;
