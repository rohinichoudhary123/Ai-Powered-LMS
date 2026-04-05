import React, { useState } from "react";
import { useNavigate } from "react-router";

const ForgetPass = () => {
  const [step, setStep] = useState(3);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-100 px-4">
      {/* step 1 */}
      {step == 1 && (
        <div className=" bg-white shadow-md rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Forget Your Password
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm   font-medium text-gray-700 "
              >
                Enter your Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="you@gmail.com"
                required
                className="mt-1 w-full px-4 py-2   border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-[black] cursor-pointer"
              />
              <button className="  mt-2 w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md cursor-pointer">
                Send OTP
              </button>
            </div>
          </form>
              {/* <span onClick={() => navigate("/login")} className="block mt-1 text-center cursor-pointer">Back To Login</span> */}
              <div onClick={()=> navigate("/login")} className="text-sm text-center mt-3 ">Back To Login</div>
          
        </div>
      )}
      {/* step 2 */}
      {step == 2 &&  <div className=" bg-white shadow-md rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Enter OTP
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm   font-medium text-gray-700 "
              >
                Please enter the 4-digit code sent to your email
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Enter Here"
                required
                className="mt-1 w-full px-4 py-2   border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-[black] cursor-pointer"
              />
              <button className="  mt-2 w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md cursor-pointer">
                Verify OTP
              </button>
            </div>
          </form>
              {/* <span onClick={() => navigate("/login")} className="block mt-1 text-center cursor-pointer">Back To Login</span> */}
              <div onClick={()=> navigate("/login")} className="text-sm text-center mt-3 ">Back To Login</div>
          
        </div>}
      {/* step 3 */}
      {step == 3 &&  <div className=" bg-white shadow-md rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6  text-center text-gray-800">
            Forget Your Password
          </h2>
          {/* <p className="text-sm mb-2.5 text-gray-400">Enter a new password below to regain access to your account</p> */}
          <p className="text-sm text-center text-gray-500 mb-6 ">Enter a new password below to regain access to your account</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm   font-medium text-gray-700 "
              >
               New Password
              </label>
              <input
                type="text"
                id="password"
                placeholder="Enter New Password"
                required
                className="mt-1 w-full px-4 py-2   border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-[black] cursor-pointer"
              />
              
            </div>
              <div>
              <label
                htmlFor=" ConPassword"
                className="block text-sm   font-medium text-gray-700 "
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="ConPassword"
                placeholder="Re-render new password"
                required
                className="mt-1 w-full px-4 py-2   border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-[black] cursor-pointer"
              />
              <button className="  mt-2 w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md cursor-pointer">
                Reset Password
              </button>
            </div>
          </form>
              {/* <span onClick={() => navigate("/login")} className="block mt-1 text-center cursor-pointer">Back To Login</span> */}
              <div onClick={()=> navigate("/login")} className="text-sm text-center mt-4 ">Back To Login</div>
          
        </div>}
    </div>
  );
};

export default ForgetPass;
