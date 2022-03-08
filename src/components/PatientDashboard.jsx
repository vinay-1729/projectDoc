import React from 'react'
import patient from '../img/patient.jpg';
import doctor from '../img/doctor-thumb-02.jpg';


const PatientDashboard = () => {
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
            <div className="bg-grey-100 h-auto shadow-md w-1/4">
                    <div className="w-full flex  justify-center p-2">
                        <img src={patient} alt="" width="120" height="120" className="border-4 border-gray-200 rounded-full"/>
                    </div>
                <div className="text-center">
                    <p className="font-semibold text-lg">Richard Wilson</p>
                    <p className="font-normal text-gray-400 text-sm p-1">
                    <i class="fa-solid fa-cake-candles"></i>
                        24 Jul 1983, 38 years</p>
                    <p className="font-normal text-gray-400 text-sm p-1">Newyork, USA</p>
                </div>
                <li className="container-fluid list-none border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-blue-400" >
                    <i class="fa fa-columns p-2" />
                        Dashboard</p>
                </li>
                <li className="container-fluid list-none border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >
                    <i class="fa fa-bookmark p-2"></i>
                        Favorites</p>
                </li>
                <li className="container-fluid list-none border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >
                    <i class="fa fa-comments p-2"></i>
                        Message</p>
                </li>
                <li className="container-fluid list-none border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >
                    <i class="fa-solid fa-user-gear p-2"></i>
                        Profile Settings</p>
                </li>
                <li className="container-fluid list-none border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >
                    <i class="fa fa-lock p-2"></i>
                        Change Password</p>
                </li>
                <li className="container-fluid list-none border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >
                    <i class="fa-solid fa-arrow-right-from-bracket p-2"></i>
                        Logout</p>
                </li>
            </div>
            <div className="w-3/4 ml-8 px-3 py-2 h-screen overflow-y-auto">
            <nav class="user-tabs mb-4">
                <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" data-toggle="tab">Appointments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="tab">Prescriptions</a>
                    </li>
                </ul>
            </nav>
                
            </div>
      </div>
      </div>
  )
}

export default PatientDashboard