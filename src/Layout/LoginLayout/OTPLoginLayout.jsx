import React, { useState } from 'react'
import Login from '../../Components/Login/Login'
import { postLoginNumber } from '../../API/userAPI'
import OTPVerification from '../../Components/Login/OTPForm';


const OTPLoginLayout = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberValidation, setNumberValidation] = useState('');

    const handleNumber = (e) => {
      const input = e.target.value;
    
      if (/^\d{0,14}$/.test(input)) {
        setPhoneNumber(input);
        setNumberValidation('');
      } else {
        setNumberValidation('Phone number must be 14 digits');
      }
    };
    
    const submitLogin = () => {
      if (phoneNumber.length === 14 && numberValidation === '') {
        postLoginNumber({ phoneNumber });
      } else {
        setNumberValidation('Phone number must be 14 digits');
      }
    };
    

    return (
        <>
            <Login
                HeadContent={""}
                mainContent={
                <>
                    <OTPVerification />
                </>
                }
            />
        </>
    )
}

export default OTPLoginLayout