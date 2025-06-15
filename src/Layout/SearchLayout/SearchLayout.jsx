import React, { useState } from 'react';
import { popularProducts, popularSearches } from '../../constants/popularSearches';
import { useEffect } from 'react';

const SearchLayout = ({ searchData, searchStatus, mobailNavClosing }) => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(searchData)
    }, [searchData])

    return (
        <div className="absolute lg:h-screen mt-1 lg:mt-[0px] h-[100vh] w-[100%] lg:w-screen left-[-0%] lg:left-[-450px] z-10 overflow-hidden  scroll-hidden">

            <div className="absolute inset-0  backdrop-blur-lg z-0 pointer-events-none " ></div>
            <button onClick={mobailNavClosing} className='block lg:hidden absolute z-50  top-[-1px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" /><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314" /></g></mask></defs><path fill="#513535" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)" /></svg>
                </button>
            <div className="absolute h-[100vh] lg:h-[65vh] mt-3 lg:mt-[0px] left-[0%] lg:left-[450px] z-20 shadow-3xl w-[100%] lg:w-[100vh] bg-white rounded-[30px] p-1 md:p-5 overflow-y-auto scroll-hidden">
              
                {/* Popular Searches */}
                <div className="flex flex-col gap-4 mb-6">
                    <h1 className="text-lg text-[#2f2421] alice mt-8 lg:mt-0">{searchStatus ? "Suggested Categories" : "Popular Searches"}</h1>
                    <div className="flex gap-2 flex-wrap justify-center lg:justify-normal">
                        {(searchStatus ? data.suggested_categories : data.popular_categories)?.map((item, index) => (
                            <p
                                // key={index}
                                className="border metamorphous-regular flex text-[#563a14] border-[#d9d1d1] gap-1 rounded-[8px] px-4 py-1 text-[11px] cursor-pointer hover:bg-gray-100 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-[-6px] text-[#56433D]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25L9 11.25L13.5 15.75L21 8.25" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25H15.75" />
                                </svg>
                                {item?.name}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Popular Products */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg text-[#2f2421] alice">{searchStatus ? "Siggested Products" : "Trending Products" }</h1>
                    <div className="flex gap-4 flex-wrap justify-center lg:justify-normal">
                        {(searchStatus ? data?.suggested_products : data?.popular_products)?.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-[100px] cursor-pointer transform transition duration-300 ease-in-out 
                                hover:scale-110 hover:shadow-xl hover:rounded-md"
                            >
                                <img
                                    className="w-[100px] h-[100px] object-cover rounded-xl p-1"
                                    src={item.image}
                                    alt=""
                                />
                                <p className="text-[8px] text-center mt-1 text-[#563a14] metamorphous-regular">
                                    {item.head}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Popular Products */}
                <div className="flex flex-col gap-4 mt-[40px]">
                    <div className="flex gap-4 flex-wrap">
                        <img className='h-[30vh] w-[100vh] rounded-[10px] contrast-75' src={data.gif} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchLayout;
