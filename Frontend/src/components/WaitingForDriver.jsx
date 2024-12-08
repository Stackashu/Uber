import React from 'react'

const WaitingForDriver = () => {
  return (
    <div>
     <div className='flex  justify-between items-center p-3'>
        <h3 className=' font-semibold text-xl'>Meet at the pickup point</h3>
        <div className=' bg-black text-white flex flex-col justify-center items-center py-2 px-4 '><span>2</span><span> min</span></div>
     </div>
     <hr></hr>
     <div className=' py-6 relative  flex justify-between items-center'>
        <div> 
            <img className=' absolute rounded-full h-14 left-1  top-10 ' src='data:image/jpeg;base64,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' alt=''/>
            <img className="h-20 ml-3 mt-6" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        </div>
        <div className=' leading-tight'>
            <h3 className=' font-semibold text-right text-lg'>Ashish</h3>
            <h4 className=' font-bold text-right'>DL 0S EX 0001</h4>
            <h4 className=' font-base text-right text-gray-600 '>Swift</h4>
        </div>
     </div>
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
    </div>
  )
}

export default WaitingForDriver
