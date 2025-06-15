import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import { useSelector } from "react-redux";

const ProfileView = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const user = useSelector((state) => state.user.user);

    console.log(user, "useeeeeeeeeeeeee");
    
    return (
        <>

            <div className=' relative cursor-pointer'>
                <img className='rounded-full w-[206px] h-[206px]' src='/public/assets/Images/MyAccount/profile.png' />
                <span onClick={() => setModalOpen(true)} className='rounded-full w-[33px] h-[33px] bg-[#fff] shadow-md absolute right-[18px] bottom-3 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="#56433d" d="M18.58 2.944a2 2 0 0 0-2.828 0L14.107 4.59l5.303 5.303l1.645-1.644a2 2 0 0 0 0-2.829zm-.584 8.363l-5.303-5.303l-8.835 8.835l-1.076 6.38l6.38-1.077z" /></svg>
                </span>
            </div>
            <p className='text-[24px] text-[#000] poppins font-[600] mt-3'>Name : {user?.user}</p>
            <p className='text-[15px] text-[#000] poppins'>Ms</p>

            <div className='flex gap-1'>
                <img className='w-[20px] h-[20px]' src='/public/assets/Images/MyAccount/flag.png' />
                <p className='text-[15px] poppins'>India</p>
            </div>



            <Modal
                isOpen={isModalOpen}
                modalWrapDiv={"fixed top-0 right-0 left-0 bg-[#cececeb3] z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                mainModalClass={"relative p-4 w-full max-w-lg max-h-full"}
                onClose={() =>
                    setModalOpen(false)}
                content={(
                    <div>

                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>

                        <div className='flex justify-center items-cenetr mt-5'>
                            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Save image
                            </button>

                        </div>

                    </div>
                )}
            />
        </>
    )
}

export default ProfileView