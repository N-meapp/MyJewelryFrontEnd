import { useState } from 'react';
import './MegaDropdown.css';
import { useNavigate } from "react-router-dom";

const MegaDropdown = ({ data }) => {
    const [activeTab, setActiveTab] = useState('Category');
    const tabs = Object.keys(data?.mega || {});
    const navigate = useNavigate();


     const handleClick = (tab, item)=>{
        if(tab === 'Occasions'){
            navigate("/ProductListing", {state: { occasionId: `${item.id}` } })
        }else if(tab === 'Price'){
            navigate("/ProductListing", {state: { priceId: `${item.id}` } })
        }else if(tab === 'Gender'){
          navigate(`/categories`, { state: { id: item.id } })
        }
    }

// ()=> navigate(`/categories`, { state: { id: item.id } })
    return (
        <div className="absolute top-full w-screen left-0 right-[20px] mt-1  bg-white shadow-2xl rounded-xl  z-50 fade-inn">
            <div className="flex  gap-6">
                {/* Tabs Column */}
                <div className="w-1/5 space-y-2 bg-[#f7f6f5] py-[100px] px-12 rounded-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onMouseEnter={() => setActiveTab(tab)}
                            className={`block w-full text-left px-4 py-2 rounded-[16px] font-medium text-[#56433d] transition duration-500 ease-in-out ${activeTab === tab ? 'bg-white border-2 border-[#56433d] shadow-lg' : 'hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Dynamic Data Column */}
                <div className="w-3/5  py-[50px] px-[10px] " >
                   
                        {activeTab === 'Category' ? (
                            <>
                             <div className="grid grid-cols-3 gap-11 pt-5">
                                {data?.mega?.[activeTab]?.map((item) => (
                                    <div key={item.id} onClick={() => navigate("/ProductListing", {state: { id: `${item.id}` } })} className="grid grid-cols-12 ">
                                        <div className="col-span-12 md:col-span-12 flex">
                                            <img src={item.icon} alt="icon" className="w-10 h-10 rounded-full" />
                                            <span className="text-[13px] poppins text-[#56433d] mt-2">{item.label}</span>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </>
                        ) : (
                            <>
                             <div className="grid grid-cols-4 gap-11 pt-5">
                                {data?.mega?.[activeTab]?.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12">
                                        <div onClick={()=>handleClick(activeTab, item)} className="col-span-12 md:col-span-12 text-center" >
                                            <img src={item.icon} alt="icon" className="w-full h-[150px] rounded-[16px] object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                                            <span className="text-[13px] poppins text-[#56433d] text-center mt-2">{item.label}</span>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </>
                        )}


                    <hr className='mt-14 border border-[#f0f0f0] mb-4' />

                    <img className='w-full rounded-[10px] h-[118px] object-cover' src='/public/assets/Images/subcategory/center1.png' />
                    <div className='flex justify-end mt-[-20px]'>
                        <button className="bg-[#b68c6b] text-white px-4 py-2 text-sm rounded-md mr-4">
                            View all collection
                        </button>
                    </div>

                </div>

                {/* Image + CTA */}
                <div className="w-1/5 flex flex-col justify-between items-center py-12 px-4">
                    <img
                        src={'/public/assets/Images/subcategory/sideimg1.png'}
                        alt="Jewelry"
                        className="rounded-[20px] object-cover w-full h-full"
                    />
                    <div className="mt-4  px-2">
                        <p className="text-[16px] text-[#56433d] mb-2 bolkit ">
                            {data?.description || 'Crafted from gold, made to celebrate your most radiant moments.'}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaDropdown;

