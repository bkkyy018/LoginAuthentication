import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";
import { auth } from "./Firebase";
import { db } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const {user, setUser,email, setEmail,password, setPassword}=useContext(UserContext)
  const HandleRegister=async (e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      const userB=auth.currentUser
      console.log(userB)
      console.log("Sign up Successfully")
      if(userB)
        {
        await setDoc(doc(db,"User",userB.uid),{
          username:user,
          Email:userB.email,
        })
        }
      // window.location.href='./login'
    }
    catch(error)
    {
        console.log(error)
    }
  }
function x()
{
  console.log("Heyyy")
}
  return (
    <>
      <div className=" flex justify-center ">
        <div className=" flex justify-center w-[30vw] h-[60vh] bg-blue-950 mt-6 rounded-xl">
          <div>
            <h2 className=" mt-3 font-semibold text-gray-400 text-2xl ml-[34%]">
              Sign Up
            </h2>
            <form
            onSubmit={HandleRegister}
              action=""
              className=" grid grid-row-6 grid-flow-row space-y-6 mt-5 text-white"
            >
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="text"
                  value={user}
                  onChange={(e)=>{setUser(e.target.value)}}
                  placeholder="Username"
                  id="user"
                  required
                />
              </div>
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder="Email"
                  id="email"
                  required
                />
              </div>
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  placeholder="Password"
                  id="pswd"
                  required
                />
              </div>
              {/* <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="text"
                  placeholder="Confirm Password"
                  id="Conpswd"
                  required
                />
              </div> */}
              <div>
                <button
                  type="submit"
                  className="w-[290px] h-[37px] rounded-xl bg-pink-600 hover:bg-pink-900 ring-1 ring-gray-500 text-white"
                >
                  Sign up
                </button>
              </div>
              <div>
                <nav>
                  If already have an account please
                  <NavLink
                    to="/login"
                    className=" text-red-600 p-2 rounded-xl hover:text-red-800"
                  >
                    Login
                  </NavLink>
                </nav>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
