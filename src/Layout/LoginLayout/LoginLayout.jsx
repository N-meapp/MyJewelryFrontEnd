import React, { useState } from 'react'
import Login from '../../Components/Login/Login'
import { postLoginNumber } from '../../API/userAPI'
import { useNavigate } from "react-router-dom";

const LoginLayout = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberValidation, setNumberValidation] = useState('');
    const navigate = useNavigate();
    // const handleNumber = (e) => {
    //   const input = e.target.value;
    
    //   if (phoneNumber.length > 0) {
    //     // setPhoneNumber(input);
    //     setNumberValidation('');
    //   } else {
    //     setNumberValidation('Phone number must be 14 digits');
    //   }
    // };
    
   const submitLogin = () => {
  if (phoneNumber.length === 13) {
    postLoginNumber({ phoneNumber })
      .then((res) => {
        console.log(res, "✅ OTP response received");
          if(res.message === "OTP sent successfully."){
           navigate(`/OTPLogin`, {state:{number:phoneNumber}})
          }
      })
      .catch((err) => {
        console.error("Error in OTP request:", err);
      });
  } else {
    setNumberValidation('Phone number must be 14 digits');
  }
};

    

    return (
        <>
            <Login
                HeadContent={"Sign in <br /> discover timeless <br /> elegance"}
                mainContent={
                    <>
                        <div className="relative w-full max-w-[340px] mt-5 gap-8 mx-auto md:mx-0 md:ml-[100px]">
                            <input
                                className="robo shadow appearance-none border border-gray-500 placeholder-gray-700 rounded-[8px] w-full py-3 px-5 mt-5 gap-6 leading-tight text-center focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Continue with Google"
                                readOnly
                            />
                            <img
                                src="/assets/Images/logo/Google Logo.png"
                                alt="Google logo"
                                className="absolute left-5 md:left-5 top-[43px] transform -translate-y-1/2 w-[24px] h-[24px]"
                            />
                        </div>

                        <div className="relative w-full max-w-[340px] gap-8 mx-auto md:mx-0 md:ml-[100px]">
                            <input
                                className="robo shadow appearance-none border border-gray-500 placeholder-gray-700 rounded-[8px] w-full py-3 px-5 mt-5 gap-6 leading-tight text-center focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Continue with Apple"
                                readOnly
                            />
                            <img
                                src="/assets/Images/logo/apple-logo.png"
                                alt="Apple logo"
                                className="absolute left-5 md:left-5 top-[43px] transform -translate-y-1/2 w-[24px] h-[24px]"
                            />
                        </div>

                        <p className="flex justify-center mt-[20px] roboto-flex">or</p>

                        <div className="relative w-full max-w-[340px] gap-8 mx-auto md:mx-0 md:ml-[100px]">
                            <input
                                className="robo shadow appearance-none border text-center border-gray-500 rounded-[8px] w-full py-3 px-5 mt-5 gap-6 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="text"  // Use "text" to control input format via regex
                                placeholder="+91 Enter number to login"
                                value={phoneNumber}
                                onChange={(e)=>setPhoneNumber(e.target.value)}
                            />

                            {numberValidation && (
                                <p className="text-red-500 text-sm mt-2">{numberValidation}</p>
                            )}
                            <img
                                src="/assets/Images/logo/india-logo.png"
                                alt="India logo"
                                className="absolute left-5 md:left-5 top-[43px] transform -translate-y-1/2 w-[24px] h-[24px]"
                            />
                        </div>

                        <div className="w-full max-w-[340px] mx-auto md:mx-0 md:ml-[100px] mt-6">
                            <button onClick={submitLogin} className="bg-[#854836] text-white w-full font-bold py-3 px-5 rounded-[8px] robo text-[16px]">
                                Continue
                            </button>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default LoginLayout