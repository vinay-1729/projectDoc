import React from 'react'
import "./PatientDashboard.css" 
import patient from '../../img/patient.jpg';
import { MdOutlineSpaceDashboard,MdOutlineFavorite,MdPassword} from 'react-icons/md';
import { FiMessageSquare} from 'react-icons/fi';
import {GrUserSettings} from 'react-icons/gr';
import {RiLogoutBoxRLine} from 'react-icons/ri'
import Tabs from './Tabs/PatientTab'

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
            <div className="bg-grey-100 h-auto shadow-lg w-2/12">
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
                <ul>
                <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
                    <div className="flex text-left	px-4 text-md capitalize text-gray-600	hover:text-sky-400">
                    <MdOutlineSpaceDashboard /><a className="ml-2" >Dashboard</a>
                    </div>
                </li>
                <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
                    <div className="flex text-left	px-4 text-md capitalize text-gray-600	hover:text-sky-400">
                    <MdOutlineFavorite /><a className="ml-2" >Favorites</a>
                    </div>
                </li>
                <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
                    <div className="flex text-left	px-4 text-md capitalize text-gray-600	hover:text-sky-400">
                    <FiMessageSquare /><a className="ml-2" >Messages</a>
                    </div>
                </li>
                <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
                    <div className="flex text-left	px-4 text-md capitalize text-gray-600	hover:text-sky-400">
                    <GrUserSettings /><a className="ml-2" >User Settings</a>
                    </div>
                </li>

                <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
                    <div className="flex text-left	px-4 text-md capitalize text-gray-600	hover:text-sky-400">
                    <MdPassword /><a className="ml-2" >Change Password</a>
                    </div>
                </li>
                <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
                    <div className="flex text-left	px-4 text-md capitalize text-gray-600	hover:text-sky-400">
                    <RiLogoutBoxRLine /><a className="ml-2" >Logout</a>
                    </div>
                </li>
                </ul>
            </div>
            <div className="w-10/12 ml-8 px-3 py-2 shadow-lg h-screen overflow-y-auto">
            <Tabs name1={"Appointments"} name2={"Prescriptions"} />
            </div>
      </div>
      </div>
  )
}

export default PatientDashboard