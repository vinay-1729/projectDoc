import React from 'react'
import patient from '../../img/patient.jpg';
import doctor from '../../img/doctor-thumb-02.jpg';
import Tabs from '../Tabs/Tab';

const Dashboard = () => {
  return (
    <div className="">
          <div className="container-fluid h-24" style={{backgroundColor: "#15558d"}}>
          <div className="flex justify-content-start pt-4">
              <div className="pl-4 text-sm text-white">
                  <p>Home / Appointments</p>
              </div>
          </div>
          <div className="flex justify-content-start">
              <div className="pl-4 text-xl font-bold text-white">
                  <p>Appointments</p>
              </div>
          </div>
      </div>
      <div className="bg-gray-50 flex p-6">
            <div className="bg-grey-100 shadow-md bg-white w-1/4">
                    <div className="w-full flex  justify-center p-2">
                        <img src={doctor} alt="" width="120" height="120" className="border-4 border-gray-200 rounded-full"/>
                    </div>
                <div className="text-center">
                    <p className="font-semibold text-lg">Dr. Darren Elder</p>
                    <p className="font-normal text-gray-400 text-sm p-1">Newyork, United States</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-blue-400" >Dashboard</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Appointments</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >My Patients</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Schedule Timings</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Invoices</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Reviews</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Message</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Profile Settings</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Social Media</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Change Password</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Logout</p>
                </div>
            </div>
            <div className="w-3/4 ml-8 px-3 h-screen   ">
                <div className="bg-white shadow-sm mb-5 h-40 grid lg:grid-cols-3 xl:grid-col-3 md:grid-col-3 grid-col-1 p-3">
                    <div className="flex justify-start text-left items-center">
                        <div className="h-20 w-6/12 bg-gray-500">
                        </div>
                        <div className="w-full ml-5">
                            <p className='text-lg text-gray-500 font-bold '>Total Patient</p>
                            <h1 className='text-2xl py-1'>1500</h1>
                            <p className='text-md text-gray-500'>Till Today</p>
                        </div>
                    </div>
                    <div className="flex justify-start text-left items-center">
                        <div className="h-20 w-6/12 bg-gray-500">
                        </div>
                        <div className="w-full ml-5">
                            <p className='text-lg text-gray-500 font-bold '>Total Patient</p>
                            <h1 className='text-2xl py-1'>1500</h1>
                            <p className='text-md text-gray-500'>Till Today</p>
                        </div>
                    </div>
                    <div className="flex justify-start text-left items-center">
                        <div className="h-20 w-6/12 bg-gray-400">
                        </div>
                        <div className="w-full ml-5">
                            <p className='text-lg text-gray-500 font-bold '>Total Patient</p>
                            <h1 className='text-2xl py-1'>1500</h1>
                            <p className='text-md text-gray-500'>Till Today</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    
                    <Tabs />                    
                </div>
                

            </div>
      </div>
      </div>
      
  )
}


export default Dashboard;