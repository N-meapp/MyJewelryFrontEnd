import React, { useEffect, useState } from 'react'
import { fetchHomeCategory } from '../../API/userAPI'
import { useNavigate } from "react-router-dom";

const HomeExplore = () => {

    const [categoryData, setCategoryData] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        fetchHomeCategory(setCategoryData)
    }, [])

    return (
        <>
            <div className='md:block hidden'>
                <div className='pt-[130px] pb-[150px]'>
                    <h3 className='text-center text-[#2f2421] text-[30px] alice'>Explore Our Finest Creations</h3>
                    <h5 className='text-center text-[18px] text-[#70695d] instrument-san font-[500]'>Discover unique designs and premium craftsmanship in our latest collection.</h5>
                    <div className="px-[80px] mt-[40px] space-y-20">
                        {/* First row (5 items) */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
                            {categoryData.slice(0, 5).map((product) => (
                                <div onClick={() => navigate("/ProductListing", {state: { id: `${product.id}` } })} key={product.id} className="coll h-[284px]">
                                    <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px] font-[500]"> {product.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Second row (remaining 2 items + "View More") */}
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 w-full">
                            {categoryData.slice(5, 7).map((product) => (
                                <div onClick={() => navigate("/ProductListing", {state: { id: `${product.id}` } })} key={product.id} className="coll h-[284px]">
                                    <div className="card h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <p className="text-[#563a14] text-center mt-2 bolkit">{product.name}</p>
                                </div>
                            ))}

                            {/* Static View More Card as 8th item */}
                            <div className="coll h-[284px]">
                                <div 
                                 onClick={()=>{navigate('/categories')}}
                                 className="card w-full h-[254px] border border-[#d2b48c] bg-[#d2b48c] relative overflow-hidden cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover invisible"
                                        src="/assets/Images/products/p1.png"
                                        alt="View More"
                                    />
                                    <p className="text-[#513535] text-[16px] text-center bolkit absolute inset-0 flex items-center justify-center">
                                        View More
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeExplore