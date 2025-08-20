import React, { useEffect, useState } from 'react';
import ProfileView from '../../Components/ProfileView/ProfileView';
import Modal from '../../Components/Modal/Modal';
import { editProfileData, FetchProfileData } from '../../API/userAPI';

const PersonalDetails = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [profileData, setProfileData] = useState({});
    const [formData, setFormData] = useState({
        title: '',
        full_name: '',
        date_of_birth: '',
        country: '',
        address: '',
        phone_number: '',
        email: '',
        agree: false,
    });

    useEffect(() => {
        FetchProfileData(setProfileData);
    }, []);

    useEffect(() => {
        if (profileData && Object.keys(profileData).length > 0) {
            setFormData((prev) => ({
                ...prev,
                ...profileData,
                agree: profileData.agree ?? false,
            }));
        }
    }, [profileData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.agree) {
            alert("Please agree to the privacy policy.");
            return;
        }

        const data = new FormData();
        data.append('title', formData.title);
        data.append('full_name', formData.full_name);
        data.append('date_of_birth', formData.date_of_birth);
        data.append('country', formData.country);
        data.append('address', formData.address);
        data.append('phone_number', formData.phone_number);
        data.append('email', formData.email);
        data.append('agree', formData.agree ? 'true' : 'false');

        try {
            const result = await editProfileData(data);
            console.log('Form submitted successfully:', result);
            alert("Form submitted successfully!");
            setModalOpen(false);
        } catch (error) {
            console.error('Submission failed:', error);
            alert("Form submission failed.");
        }
    };

    return (
        <div>
            {/* Profile header */}
            <div className='flex flex-col items-center md:mt-[-20px] mt-[-75px]'>
                <ProfileView />
                <p className='bolkit md:text-[32px] text-[15px] md:mt-5 mt-2'>Personal Information</p>
            </div>

            {/* Edit button */}
            <div className='relative'>
                <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="md:px-10 px-5 absolute md:mt-0 mt-[60px] right-6 text-[#56433d] hover:text-white border border-[#56433d] hover:bg-[#56433d] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm md:py-2.5 py-1.5 text-center me-2 mb-2"
                >
                    Edit details
                </button>
            </div>

            {/* Profile display */}
            <div className='md:mt-10 mt-[100px] pb-10'>
                <div>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Title</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.title}</p>
                    <hr className='border border-[#b3b3b3] max-w-[70px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Full Name</p>
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.full_name}</p>
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
                    <p className='md:text-[15px] text-[12px] text-[#949191] Poppins font-[500] mt-2'>{profileData?.country}</p>
                    <hr className='border border-[#b3b3b3] max-w-[200px] mt-1' />
                </div>
                <div className='mt-9'>
                    <p className='text-[20px] font-[600] poppins text-[#56433d]'>Contact details</p>
                </div>
                <div className='mt-9 flex gap-11'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Phone number</p>
                    <p className='md:text-[15px] text-[12px] text-[#878787] Poppins font-[500]'>{profileData?.phone_number}</p>
                </div>
                <div className='mt-9 flex gap-11'>
                    <p className='md:text-[17px] text-[15px] text-[#56433d] Poppins font-[550]'>Email address</p>
                    <p className='md:text-[15px] text-[12px] text-[#878787] Poppins font-[500]'>{profileData?.email}</p>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                modalWrapDiv="fixed top-0 right-0 left-0 bg-[#cececeb3] z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
                mainModalClass="relative p-4 w-full max-w-3xl max-h-full"
                onClose={() => setModalOpen(false)}
                content={(
                    <div>
                        <div className='border-b border-[#dad9d9] pb-3'>
                            <p className='poppins text-[20px]'>Personal Information</p>
                        </div>

                        <div className='grid grid-cols-12 gap-6 w-full mt-6'>
                            {/* Title */}
                            <div className='col-span-12 md:col-span-6'>
                                <label htmlFor="title" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Title</label>
                                <select
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    id="title"
                                    className="bg-[#fff] border py-4 border-[#000] rounded-[5px] block w-full p-2.5"
                                >
                                    <option value="">Select a title</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Dr">Dr</option>
                                </select>
                            </div>

                            {/* Full Name */}
                            <div className='col-span-12 md:col-span-6'>
                                <label htmlFor="full_name" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Full name</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    className="bg-[#fff] border py-4 border-[#000] rounded-[5px] block w-full p-2.5"
                                />
                            </div>

                            {/* DOB */}
                            <div className='col-span-12 md:col-span-6'>
                                <label htmlFor="date_of_birth" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Date of birth</label>
                                <input
                                    type="date"
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleChange}
                                    className="bg-[#fff] border py-4 border-[#000] rounded-[5px] block w-full p-2.5"
                                />
                            </div>

                            {/* Country */}
                            <div className='col-span-12 md:col-span-6'>
                                <label htmlFor="country" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="bg-[#fff] border py-4 border-[#000] rounded-[5px] block w-full p-2.5"
                                />
                            </div>

                            {/* Address */}
                            <div className='col-span-12'>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows="4"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-[#fff] rounded-lg border border-[#000]"
                                ></textarea>
                            </div>
                        </div>

                        {/* Agree */}
                        <div className="flex items-center mb-4 mt-4">
                            <input
                                id="agree"
                                name="agree"
                                type="checkbox"
                                checked={formData.agree}
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="agree" className="ml-2 text-sm poppins text-gray-900">
                                I agree to the use of my personal information as per the Privacy Policy.
                            </label>
                        </div>

                        <div className='text-[20px] font-[500] mt-6 poppins'>Contact Details</div>
                        <hr className='mt-4' />

                        {/* Phone & Email */}
                        <div className='grid grid-cols-12 gap-6 w-full mt-6'>
                            <div className='col-span-12 md:col-span-6'>
                                <label htmlFor="phone_number" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Phone no</label>
                                <input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    className="bg-[#fff] border py-4 border-[#000] rounded-[5px] block w-full p-2.5"
                                />
                            </div>

                            <div className='col-span-12 md:col-span-6'>
                                <label htmlFor="email" className="block mb-2 font-medium text-[#56433d] poppins text-[14px]">Email id</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-[#fff] border py-4 border-[#000] rounded-[5px] block w-full p-2.5"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <hr className='mt-4' />
                        <div className='flex justify-end items-center mt-6 gap-6'>
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 rounded-md text-sm px-9 py-3"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="text-[#fff] bg-[#474141] py-3 border border-[#474141] hover:bg-gray-900 rounded-md text-sm px-12"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default PersonalDetails;
