import React from 'react';
import './HomeFeuture.css'; 
import f1 from '../../../public/assets/Images/feutuers/f1.png'
import f2 from '../../../public/assets/Images/feutuers/f2.png'
import f3 from '../../../public/assets/Images/feutuers/f1.png'
const HomeFeuture = () => {
    return (
        <div
           
            className='bg-[#f9f9f9] p-12 md:mt-[20px] mt-[50px] mainDivBorder mx-auto md:px-[55px] '
        >
            <div className='w-full flex flex-col md:flex-row md:items-start md:justify-between md:mt-[10px] mt-[-20px]  md:border-0'>
                {/* Heading Section */}
                <div className='md:w-4/12 text-center md:text-left'>
                    <p className='md:text-[50px] text-[30px] text-[#563a14] bolkit'>
                        My Jewelry <br className='md:block hidden' />
                        my  <br className='md:hidden block' /> Designs
                    </p>
                </div>

                {/* Feature Items Section */}
                <div className="md:w-8/12 w-full flex flex-wrap justify-center md:justify-start gap-y-6 gap-x-4 md:gap-x-6 mt-[35px] md:mt-0 ">

                    {/* Feature Item */}
                  <div className="w-[45%] md:w-[200px] flex flex-col items-center p-3 text-center">

                        <p className='md:text-[13.87px] text-[10px] text-[#56433d] instrument-san font-semibold'>
                            24 X 7 Search
                        </p>
                        <svg
                            className='mt-1.5 mb-1.5'
                            xmlns='http://www.w3.org/2000/svg'
                            width='41'
                            height='41'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='none'
                                stroke='#c8983e'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='1.5'
                                d='M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20'
                            />
                        </svg>
                        <p className='text-[#56433d] md:text-[13px] text-[9px] instrument-san font-[500]'>
                            Search Products anytime 24 X 7 throughout the year.
                        </p>
                    </div>

                    {/* Custom Requests */}
                    <div className="w-[45%] md:w-[200px] flex flex-col items-center p-3 text-center">

                        <p className='md:text-[13.87px] text-[10px] text-[#56433d] instrument-san font-semibold'>
                            Custom Requests
                        </p>
                        <img
                            className='w-[41px] h-[41px] mt-1.5 mb-1.5'
                            src={f1}
                            alt='Custom'
                        />
                        <p className='text-[#56433d] md:text-[13px] text-[9px] instrument-san font-[500]'>
                            Connect with expert jewelers to create personalized designs
                        </p>
                    </div>

                    {/* Latest Designs (1) */}
                  <div className="w-[45%] md:w-[200px] flex flex-col items-center p-3 text-center">

                        <p className='md:text-[13.87px] text-[10px] text-[#56433d] instrument-san font-semibold'>
                            Latest Designs
                        </p>
                        <img
                            className='w-[41px] h-[41px] mt-1.5 mb-1.5'
                            src={f2}
                            alt='Latest Designs'
                        />
                        <p className='text-[#56433d] md:text-[13px] text-[8.9px] instrument-san font-[500]'>
                            Designs that reflect the latest trends of the modern era.
                        </p>
                    </div>

                    {/* Latest Designs (2) - optional duplicate */}
                  <div className="w-[45%] md:w-[200px] flex flex-col items-center p-3 text-center">

                        <p className='md:text-[13.87px] text-[10px] text-[#56433d] instrument-san font-semibold'>
                            Latest Designs
                        </p>
                        <img
                            className='w-[41px] h-[41px] mt-1.5 mb-1'
                            src={f2}
                            alt='Latest Designs'
                        />
                        <p className='text-[#56433d] md:text-[13px] text-[8.9px] instrument-san font-[500]'>
                            Designs that reflect the latest trends of the modern era.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFeuture;
