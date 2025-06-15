import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const WishlistCard = ({ img, productName, unitPrize, StockStatus, stockCss, productId }) => {
    const navigate = useNavigate()
    return (
        <div className="w-full py-4 bg-[#f5f5f5] rounded-xl mb-4 transition-all duration-300 ease-in-out hover:shadow-xl">
            <div onClick={() => { navigate(`/ProductDetailPage`, { state: { id: productId } }) }} className="grid grid-cols-12 gap-2 cursor-pointer">

                {/* Image section - always visible */}
                <div className="col-span-4 md:col-span-2 flex items-center justify-center">
                    <div className="relative shadow-md p-4 pl-[5px] pr-[5px]  bg-[#fff] w-fit rounded-[10px] ">
                        <img className="rounded-[10px] w-full max-w-[80px] md:max-w-full" src={img} alt="product" />
                        <p className="poppinse font-[500] text-[12px] text-[#474141] text-center">View more</p>
                        <hr className="w-[60px] border border-[#cdc7c5] absolute bottom-[5px] left-[29%]" />
                    </div>
                    <svg className='relative md:right-[165px] right-[105px] md:top-[3px]' xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" /><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314" /></g></mask></defs><path fill="#474141" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)" /></svg>
                </div>

                {/* Text info for mobile: stacked vertically */}
                <div className="col-span-8 md:hidden flex flex-col justify-center">
                    <p className="bolkit text-[14px] font-[700] text-[#474141]">{productName}</p>
                    <div className='flex gap-[90px]'>
                        <p className="robo text-[13px] text-[#9a8f8c] font-[700] mt-1">₹ {unitPrize}</p>
                        <p className={`text-[13px] mt-1 ${stockCss}`}>{StockStatus}</p>
                    </div>
                </div>

                {/* Desktop view: Product name */}
                <div className="hidden md:flex col-span-6 items-center">
                    <p className="bolkit text-[17px] font-[700] text-[#474141]">{productName}</p>
                </div>

                {/* Desktop view: Price */}
                <div className="hidden md:flex col-span-2 items-center">
                    <p className="robo text-[13px] text-[#9a8f8c] font-[700]">₹ {unitPrize}</p>
                </div>

                {/* Desktop view: Status */}
                <div className="hidden md:flex col-span-2 items-center">
                    <p className={stockCss}>{StockStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;
