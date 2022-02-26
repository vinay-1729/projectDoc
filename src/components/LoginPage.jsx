import React from 'react'
import { Link } from 'react-router-dom';  
import background from "../img/login-banner.png";  

export default function LoginPage() {
  return (
		<div className="container">
			<div className="flex justify-center px-6 my-12 p-4">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div className="m-4 w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                        <div
                            className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{backgroundImage: `url(${background})`,width:600,height:400}}
                        >
                    </div>

                    </div>
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="container w-10/12 shadow-md border rounded-lg border-bg-gray-100 p-3">
                            <h3 className="pt-4 text-3xl text-gray-800 text-center text-left mr-16">Sign into your account</h3>
                            <br />  
                            <form className="px-8 pt-2 pb-8 mb-4 bg-white rounded">
                                <div className="mb-6 md:flex md:justify-between">
                                    <input type="email" placeholder="EMAIL" className="border border-gray-300 rounded text-sm py-3 px-2 w-full" />
                                </div>
                                <div className="mb-5 md:flex md:justify-between">
                                    <input type="password" placeholder="***********" className="border border-gray-300 rounded text-sm py-3 px-2 w-full" />
                                </div>
                                <div className="mb-2">
                                    {/* <Link    className='text-gray-500'> */}
                                    <div className="text-gray-400 font text-md flex flex-row-reverse">
                                    Forgot Password?
                                    </div>
                                    
                                    {/* </Link> */}
                                </div>
                                
                                
                                {/* <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div> */}
                                
                                <div className="mb-4 text-center">
                                    <button
                                        className="w-full px-4 text-xl text-white bg-green-600  rounded-lg py-2 hover:bg-green-500 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="flex justify-items-center">
                                    <hr className="mb-6 w-5/12 border-t mt-3"/> 
                                    <span className="w-2/12 text-gray-300">or</span> 
                                    <hr className="mt-3 w-6/12 mb-6 border-t" />
                                </div> 
                                
                                <div class="">
								<div class="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">

                                    < img class="h-5 cursor-pointer " src="https://i.imgur.com/arC60SB.png" alt="" />
									<button >sign-in with google</button>
								</div>
							</div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
					</div>
				</div>
			</div>
		</div>
  )
}
