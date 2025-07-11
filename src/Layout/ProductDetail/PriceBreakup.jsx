import React, { useEffect, useState, useContext } from 'react'
import './PriceBreakup.css'
import { ProductContext } from './ProductContext';

const PriceBreakup = () => {

    const { detailProductData } = useContext(ProductContext);
    console.log(detailProductData, "priceyyyyyyyyyyyyyyyyy");


    // useEffect(() => {
    //     const data = getPriceBreakupData(); // No axios needed
    //     setPriceData(data);
    // }, []);

    if (!detailProductData) return <div className='text-center'>Loading...</div>;
    return (
        <div className='mb-[100px] md:mb-0'>
            <div className='md:px-[20%] px-[5px] md:py-[100px] price'>
                <p className='text-center text-[#4f4542] md:text-[20px] text-[15px] bolkit font-[600]'>Price Breakup</p>
                <div className="relative overflow-x-auto md:mt-9 mt-3 px-[0px] py-[0px] md:rounded-[26px] rounded-[10px] overflow-hidden border border-[#e0e0e0]">
                    <table className="w-full text-sm md:text-left rtl:text-right text-[#636161] poppins">
                        <thead className="md:text-[14px] text-[6px] poppins font-[500] text-[#acacac] bg-[#fff] md:py-4">
                            <tr className='border-b border-gray-300 text-center'>
                                <th className="md:px-6 md:py-4 px-2 font-[500]">PRODUCT DETAILS</th>
                                <th className="md:px-6 md:py-4 px-2 font-[500]">RATE</th>
                                <th className="md:px-6 md:py-4 px-2 font-[500]">WEIGHT</th>
                                <th className="md:px-6 md:py-4 px-2 font-[500]">DISCOUNT</th>
                                <th className="md:text-center font-[500]">VALUE</th>
                            </tr>
                        </thead>
                        <tbody className='text-left'>
                            {detailProductData?.items?.map((item, index) => (
                                <tr key={index} className="bg-white border-b border-gray-300">
                                    {item.type === "product" && "stone" ? (
                                        <>
                                            <td className="md:px-6 md:py-4 flex md:gap-2 items-center">
                                                <img
                                                    className="md:w-[50px] md:h-[50px] h-[25px] w-[25px] object-contain"
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                                <div>
                                                    <p className="md:text-[14px] text-[7px] font-medium text-gray-900">
                                                        {item.name || "-"}
                                                    </p>
                                                    {item.subLabel ? (
                                                        <p className="md:text-[14px] text-[7px] font-[400] text-[#636161] text-center">
                                                            {item.subLabel}
                                                        </p>
                                                    ) : (
                                                        <p className="md:text-[14px] text-[7px] font-[400] text-[#636161] text-center">-</p>
                                                    )}
                                                </div>
                                            </td>

                                            <td className="md:px-6 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.rate || "-"}
                                            </td>

                                            <td className="md:px-6 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.weight || "-"}
                                            </td>

                                            <td className="md:px-6 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.discount || "-"}
                                            </td>

                                            <td className="md:text-right md:px-4 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.value || "-"}
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="md:px-6 md:py-4 font-medium text-[#636161] md:text-[14px] text-[7px]">
                                                {item.label || "-"}
                                            </td>

                                            <td className="md:px-6 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.rate || "-"}
                                            </td>

                                            <td className="md:px-6 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.weight || "-"}
                                            </td>

                                            <td className="md:px-6 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.discount || "-"}
                                            </td>

                                            <td className="md:text-right md:px-4 md:py-4 text-center md:text-[14px] text-[7px]">
                                                {item.value || "-"}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <div className='w-full md:px-[23px] px-[23px] py-[20px] flex justify-between bg-[#f2f1f1]'>
                        <p className='md:text-[16px] text-[8px] font-[500]'>Grand Total</p>
                        <p className='md:text-[16px] text-[8px] font-[500]'>{detailProductData?.grand_total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceBreakup