import React, { useEffect, useState } from "react";
import {AiOutlineEye ,AiOutlineEyeInvisible} from 'react-icons/ai'

export default function LoginPage() {
  const [state,setState] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleBtn = () => {
    setState(prevState => !prevState)
  }
    const togglePage = (index) => {
        setToggleState(index);
    };
  return (
    <div className="flex justify-center md:my-12 lg:my-12">
      <div className="flex w-full xl:w-7/12 lg:w-7/12 bg-teal-200 h-[576px] shadow-lg">
        <div className="hidden lg:block lg:w-2/6 ">
        </div>
        <div className="w-full lg:w-4/6 bg-white  lg:rounded-tl-[50px] lg:rounded-bl-[50px] border-2	">
          <div className="text-right text-zinc-500	mr-4 mt-3">
            English (UK)
          </div>
          <div className="mx-6 lg:mx-16">
          <h3 className="ml-2 mt-4 text-1xl md:text-3xl font-semibold md:text-left text-center">
            {(toggleState == 1) ? "Login Form" : "Register Form"}
          </h3>
          <div className="lg:flex">
              <button role="button" className="border border-gray-300 w-3/4 lg:w-full mt-6 rounded-[15px] hover:bg-slate-100">
                <div className="flex mx-2 my-2 justify-center">
                < img class=" h-5 cursor-pointer " src="https://i.imgur.com/arC60SB.png" alt="" />
                <p class="text-md px-2 text-gray-600">Continue with Google</p>
                </div>
                </button>

                <button role="button" className="border border-gray-300 w-3/4 lg:w-full lg:ml-2 mt-6 rounded-[15px] hover:bg-slate-100">
                <div className="flex mx-2 my-2 justify-center">
                < img class=" h-5 cursor-pointer " src="https://i.imgur.com/p0LvxkX.png" alt="" />
                <p class="text-md px-2 text-gray-600">Continue with Facebook</p>
                </div>
                </button>
          </div>
          <div className="flex mt-2 justify-items-center">
              <hr className="mb-6 w-5/12 border-t mt-3"/> 
              <span className="w-2/12 text-gray-500">OR</span>
              <hr className="mt-3 w-5/12 mb-6 border-t" />
          </div> 
            <form action="">
            <div className="relative mb-6 md:flex md:justify-between">
                <input id="email" type="email" placeholder="Email Address" className="border-b-2 cursor-text peer rounded text-sm py-3 px-2 w-full placeholder-transparent  outline-none" />
                <label for="email" class="absolute left-2 -top-3.5 text-gray-600 cursor-text text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>

            </div>
            <div className="relative mb-5 md:flex md:justify-between">
                <input id="password" type={(state)?"text":"password"} placeholder="Password" className="border-b-2 cursor-text peer rounded text-sm py-3 px-2 w-full placeholder-transparent outline-none" />
                <label for="password" class="absolute left-2 -top-3.5 text-gray-600 cursor-text text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                {!state? <AiOutlineEye className="bottom-3 cursor-pointer right-0 absolute" onClick={toggleBtn} /> : 
                    <AiOutlineEyeInvisible className="bottom-3 cursor-pointer right-0 absolute" onClick={toggleBtn} />
                }
            </div>
            </form>  
            <div className="justify-end text-right pr-3 text-gray-500">
                <a href="#" className="text-teal-400">Forgot Password?</a>
            </div>
            <div className="text-center">
            <button role="button" className="bg-teal-400 py-2 px-2 w-2/4 lg:w-full mt-2 rounded-[20px] hover:bg-teal-300 shadow-sm">
                    <p class="font-bold	 text-lg text-white">Login</p>
            </button>
            </div>
            <div className="flex text-right pr-3 ml-12 mt-4 text-gray-500">
            <p>Don't have an Account?</p><a href="#" className="ml-2 text-teal-400" onClick={() => togglePage(1)}>Sign Up</a>
              {/* {(toggleState == 1) ?
               :
              <p>Already have an Account?</p><a href="#" className="ml-2 text-teal-400" onClick={() => toggleTab(2)}>Login</a>
              } */}
                
            </div>
          </div>
          
        </div>
      </div>
    </div>
      
  );
}
