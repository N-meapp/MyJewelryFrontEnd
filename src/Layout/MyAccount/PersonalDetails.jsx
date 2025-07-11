import React, { useEffect, useState } from 'react'
import ProfileView from '../../Components/ProfileView/ProfileView'
import Modal from '../../Components/Modal/Modal';
import { editProfileData, FetchProfileData } from '../../API/userAPI';

const PersonalDetails = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [profileData, setProfileData] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        fullName: '',
        dob: '',
        country: '',
        address: '',
        phone: '',
        email: '',
        agree: false,
    });

    useEffect(() => {
        FetchProfileData(setProfileData)
    }, [])

    console.log(profileData, "......................");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...profileData,
      agree: profileData.agree ?? false,
    }));
  }, [profileData]);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async () => {
        if (!formData.agree) {
            alert("Please agree to the privacy policy.");
            return;
        }

        // Convert to FormData object
        const data = new FormData();
        data.append('title', formData.title);
        data.append('full_name', formData.fullName);
        data.append('date_of_birth', formData.dob);
        data.append('country', formData.country);
        data.append('address', formData.address);
        data.append('phone_number', formData.phone);
        data.append('email', formData.email);
        data.append('agree', formData.agree ? 'true' : 'false');

        try {
            const result = await editProfileData(data);
            console.log('Form submitted successfully:', result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error('Submission failed:', error);
            alert("Form submission failed.");
        }
    };


    return (
        <div className=''>
            <div className='flex flex-col items-center md:mt-[-20px] mt-[-75px] '>
                <ProfileView />
                <p className='bolkit md:text-[32px] text-[15px] md:mt-5 mt-2 '>Personal Information</p>
            </div>
            <div className=' relative'>
                <button type="button" onClick={() => setModalOpen(true)} class="md:px-10 px-5 absolute md:mt-0 mt-[60px] right-6 text-[#56433d] hover:text-white border border-[#56433d] hover:bg-[#56433d] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm md:py-2.5 py-1.5 text-center me-2 mb-2">Edit details</button>
            </div>
            <div className='md:mt-10 mt-[100px] pb-10'>
                <div>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Title</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>MS</p>
                    <hr className='border border-[#b3b3b3] max-w-[70px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Full Name</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData.full_name}</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Address</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.address}</p>
                    <hr className='border border-[#b3b3b3] max-w-3xl mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Date of birth</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.date_of_birth}</p>
                    <hr className='border border-[#b3b3b3] max-w-sm mt-1' />
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
                    <p className='text-[20px] font-[600] poppins text-[#56433d]'>Contact details</p>
                </div>
                <div className='mt-9 flex gap-11'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Phone number</p>
                    <p className='md:text-[15px] text-[12px] text-[#878787] Poppins font-[500] '>{profileData?.phone_number}</p>
                </div>
                <div className='mt-9 flex gap-11'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Email adress</p>
                    <p className='md:text-[15px] text-[12px] text-[#878787] Poppins font-[500] '>{profileData?.email}</p>
                </div>
            </div>


            <Modal
                isOpen={isModalOpen}
                modalWrapDiv={"fixed top-0 right-0 left-0 bg-[#cececeb3] z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                mainModalClass={"relative p-4 w-full max-w-3xl max-h-full"}
                onClose={() =>
                    setModalOpen(false)}
                content={(
                    <div>
                        <div className='border-b border-[#dad9d9] pb-3'>
                            <p className='poppins text-[20px]'>Personal Information</p>
                        </div>

                        <div className='grid grid-cols-12 gap-6 w-full mt-6'>
                            <div className='col-span-12 md:col-span-6'>
                                <div className="mb-2">
                                    <label htmlFor="title" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">
                                        Title
                                    </label>
                                    <select
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        id="title"
                                        className="bg-[#fff] border py-4 border-[#000] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Select a title</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-6'>
                                <div className="mb-2">
                                    <label htmlFor="fullName" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Full name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        className="bg-[fff] border py-4 border-[#000] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-6'>
                                <div className="mb-2">
                                    <label htmlFor="dob" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Date of birth</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        className="bg-[fff] border py-4 border-[#000] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-6'>
                                <div className="mb-2">
                                    <label htmlFor="country" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="bg-[fff] border py-4 border-[#000] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-12'>
                                <div className="mb-6">
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        rows="4"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-[]#fff rounded-lg border border-[#000] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <input
                                id="check1"
                                name="agree"
                                type="checkbox"
                                checked={formData.agree}
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="check1" className="ml-2 text-sm poppins font-[400] text-gray-900">
                                I agree to the use of my personal information as per the Privacy Policy.
                            </label>
                        </div>

                        <div className='text-[20px] font-[500] mt-6 poppins'>Contact Details</div>
                        <hr className='mt-4' />

                        <div className='grid grid-cols-12 gap-6 w-full mt-6'>
                            <div className='col-span-12 md:col-span-6'>
                                <div className="mb-2">
                                    <label htmlFor="phone" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Phone no</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="bg-[fff] border py-4 border-[#000] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-6'>
                                <div className="mb-2">
                                    <label htmlFor="email" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Email id</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-[fff] border py-4 border-[#000] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className='mt-4' />
                        <div className='flex justify-end items-center mt-6 gap-6'>
                            <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-9 py-3 text-center me-2 mb-2">
                                Cancel
                            </button>
                            <button onClick={handleSubmit} type="button" className="text-[#fff] bg-[#474141] py-3 hover:text-white border border-[#474141] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-12 text-center me-2 mb-2">
                                Save
                            </button>
                        </div>
                    </div>
                )}
            />

        </div>
    )
}

export default PersonalDetails;