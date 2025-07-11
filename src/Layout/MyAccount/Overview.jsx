import React, { useEffect, useState } from 'react'
import ProfileView from '../../Components/ProfileView/ProfileView'
import { FetchProfileData } from '../../API/userAPI'

const Overview = () => {
       const [profileData, setProfileData] = useState([])

           useEffect(()=>{
              FetchProfileData(setProfileData)
           },[])
       
           console.log(profileData, "......................");
    return (
        <div className=''>
            <div className='flex flex-col items-center md-mt-0 md:mt-[-20px] mt-[-75px] '>
                  <ProfileView />
                <p className='bolkit md:text-[32px] text-[15px] md:mt-5 mt-2'>Account Overview</p>
            </div>


            <div className='md:mt-16 mt-[90px] pb-10'>

                <div>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Full Name</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData.full_name}</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Date of birth</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.date_of_birth}</p>
                    <hr className='border border-[#b3b3b3] max-w-sm mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Address</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.address}</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Country</p>
                    <div className='flex gap-2'>
                        <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.country}</p>
                        {/* <img className='w-[20px] h-[20px] mt-2' src='/public/assets/Images/MyAccount/flag.png' /> */}
                    </div>
                    <hr className='border border-[#b3b3b3] max-w-[200px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Phone number</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.phone_number}</p>
                    <hr className='border border-[#b3b3b3] max-w-[200px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Email adress</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.email}</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>

            </div>

        </div>
    )
}

export default Overview