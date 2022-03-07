import React from 'react';
import banner from '../img/banner.jpg'
import choose from '../img/choose.jpg'
import connect from '../img/connect.jpg'
import prepare from '../img/prepare.jpg'

const HomePage = () => {
  return (
    <div className="container-fluid">
        <div class=" px-2 mx-auto my-4 lg:flex">
            <img src={banner} alt="" />
        </div>
        <div className="mx-2">
            <div className="">
            </div>
            <div className="mx-2 lg:mx-12 my-4 shadow-md justify-between bg-gray-50">
                    
                <div className="py-4 px-8 grid grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center">
                    <div className="w-full m-3 shadow-md bg-white justify-center place-items-center">
                        <p className="my-8 font-semibold text-center text-3xl">Choose</p>
                        <img src={choose} alt="" width="250" className=" my-6" />
                        <p className="m-12 text-center text-1xl">Find Doctors and hospitals based on the factors that matter most to you.</p>
                    </div>
                    <div className="w-full m-3 shadow-md bg-white justify-center place-items-center">
                        <p className="my-8 font-semibold text-center text-3xl">Connect</p>
                        <img src={connect} alt="" width="250" className=" my-6" />
                        <p className="m-12 text-center text-1xl">Conveniently shedule your appointment by phone or online when available.</p>
                    </div>
                    <div className="w-full lg:m-3 shadow-md bg-white justify-center place-items-center">
                        <p className="my-8 font-semibold text-center text-3xl">Prepare</p>
                        <img src={prepare} alt="" width="250" className=" my-6" />
                        <p className="m-12  text-center text-1xl">Learn what you need to know and which questions to ask your doctor.</p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default HomePage