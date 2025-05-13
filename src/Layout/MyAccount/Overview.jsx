import React from 'react'
import ProfileView from '../../Components/ProfileView/ProfileView'

const Overview = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center md-mt-0 md:mt-[-20px] mt-[-75px] '>
                  <ProfileView />
                <p className='bolkit md:text-[32px] text-[12px] md:mt-5 mt-2'>Account Overview</p>
            </div>


            <div className='md:mt-16 mt-[90px] pb-10'>

                <div>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Full Name</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>Ahana.k</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Date of birth</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>09/10/2000</p>
                    <hr className='border border-[#b3b3b3] max-w-sm mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Address</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>123, MG Road, Kochi, Kerala, 682001</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Country</p>
                    <div className='flex gap-2'>
                        <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>India</p>
                        <img className='w-[20px] h-[20px] mt-2' src='/public/assets/Images/MyAccount/flag.png' />
                    </div>
                    <hr className='border border-[#b3b3b3] max-w-[200px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Phone number</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>+91 9895012345</p>
                    <hr className='border border-[#b3b3b3] max-w-[200px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Email adress</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>Ahanakalarikkal2025@gmail.com</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>

            </div>

        </div>
    )
}

export default Overview