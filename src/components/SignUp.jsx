import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <>
    <div className=" flex justify-center ">
    <div className=" flex justify-center w-[30vw] h-[60vh] bg-blue-950 mt-6 rounded-xl">
        <div>
        <h2 className=" mt-3 font-semibold text-gray-400 text-2xl ml-[34%]">Sign Up</h2>
          <form action="" className=" grid grid-row-6 grid-flow-row space-y-6 mt-5 text-white">
            <div>
              <input className=" w-[290px] h-[37px] rounded-xl placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 " type="text" placeholder="Username" id="user" />
            </div>
            <div>
              <input className=" w-[290px] h-[37px] rounded-xl placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 " type="email" placeholder="Email" id="email" />
            </div>
            <div>
              <input className=" w-[290px] h-[37px] rounded-xl placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 " type="password" placeholder="Password" id="pswd" />
            </div>
            <div>
              <input className=" w-[290px] h-[37px] rounded-xl placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 " type="text" placeholder="Confirm Password" id="Conpswd" />
            </div>
            <div>
              <button  type="submit" className="w-[290px] h-[37px] rounded-xl bg-pink-600 hover:bg-pink-900 ring-1 ring-gray-500 text-white">Sign up</button>
            </div>
            <div>
              <nav>if already have an account please<NavLink to="/login" className=' text-red-600 p-2 rounded-xl hover:text-red-800'>Login</NavLink></nav>
            </div>
          </form>
        </div>
      </div>
    </div>
      
    </>
  );
}
export default SignUp;
