import React, { useState, useEffect, useRef } from "react";
import './filter.css'

const Filter = () => {

     const [minValue, setMinValue] = useState(0);
        const [maxValue, setMaxValue] = useState(50000);
        const priceGap = 5000;
        const maxRange = 100000;
        const progressRef = useRef();
        const colors = ['Gold', 'Rose Gold', 'Silver'];
        const stone = ["Diamond", "White stone", "Silver stone", "Hemitate stone"];
        const colorsCode = [
            { name: 'Black', code: '#000000' },
            { name: 'White', code: '#f3ebea' },
            { name: 'Red', code: '#c62828' },
            { name: 'Blue', code: '#1a144f' },
        ];
    
        const [filter, setFilter] = useState(true)
    
        const handleMinChange = (e) => {
            const value = parseInt(e.target.value);
            if (maxValue - value >= priceGap) setMinValue(value);
        };
    
        const handleMaxChange = (e) => {
            const value = parseInt(e.target.value);
            if (value - minValue >= priceGap) setMaxValue(value);
        };
    
        const handleRangeChange = (e, type) => {
            const value = parseInt(e.target.value);
            if (type === "min") {
                if (maxValue - value >= priceGap) setMinValue(value);
            } else {
                if (value - minValue >= priceGap) setMaxValue(value);
            }
        };
    
        useEffect(() => {
            const minPercent = (minValue / maxRange) * 100;
            const maxPercent = (maxValue / maxRange) * 100;
            if (progressRef.current) {
                progressRef.current.style.left = `${minPercent}%`;
                progressRef.current.style.right = `${100 - maxPercent}%`;
            }
        }, [minValue, maxValue]);




    return (
        <div>

            <div
                className={`col-span-12 md:col-span-3 px-4 pt-1 border-[#e0dbdb] transform transition-all duration-500 ease-in-out ${filter ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
            >
                <div>
                    <div>
                        <div className="bg-[#f4f4f4] w-full p-3 flex justify-center items-center">
                            <p className="text-[#7d6a4f] text-[19px] font-[500] poppins">SHOP BY CATEGORIES</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-4 space-y-1 transition-opacity duration-300">
                                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Ball Chain / Bead Chain</p>
                                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Rolo Chain</p>
                                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Curb Chain</p>
                                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Rope Chain</p>
                                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Wheat Chain</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                            <p className="text-[#563a14] text-[15px] font-[500] poppins">PRICE</p>
                            <a className="text-[#85602e]" href="#">Any Price</a>
                        </div>

                        <div className="w-full max-w-xl mx-auto p-6">
                            {/* Price Tooltips */}
                            <div className="relative mb-12">
                                <div
                                    className="absolute bg-[#7B5725] text-white font-semibold text-sm px-4 py-1 rounded-md left-0 transform -translate-x-1/2"
                                    style={{ left: `${(minValue / maxRange) * 100}%` }}
                                >
                                    {minValue}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7B5725] rotate-45 bottom-[-6px]" />
                                </div>
                                <div
                                    className="absolute bg-[#7B5725] text-white font-semibold text-sm px-4 py-1 rounded-md left-0 transform -translate-x-1/2"
                                    style={{ left: `${(maxValue / maxRange) * 100}%` }}
                                >
                                    {maxValue}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7B5725] rotate-45 bottom-[-6px]" />
                                </div>
                            </div>

                            {/* Slider Track */}
                            <div className="relative h-[4px] bg-[#dddddd] rounded">
                                <div ref={progressRef} className="absolute h-full bg-[#7B5725] rounded"></div>

                                {/* Slider Inputs */}
                                <input
                                    type="range"
                                    min="0"
                                    max={maxRange}
                                    value={minValue}
                                    onChange={(e) => handleRangeChange(e, "min")}
                                    className="range-thumb w-full absolute top-[-6px] appearance-none pointer-events-auto bg-transparent"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={maxRange}
                                    value={maxValue}
                                    onChange={(e) => handleRangeChange(e, "max")}
                                    className="range-thumb w-full absolute top-[-6px] appearance-none pointer-events-auto bg-transparent"
                                />
                            </div>

                            {/* Input Fields */}
                            <div className="flex items-center justify-center gap-2 mt-10">
                                <input
                                    type="number"
                                    value={minValue}
                                    onChange={handleMinChange}
                                    className="border border-[#7B5725] text-[14px] w-24 px-4 py-2 text-center font-semibold text-[#7B5725]"
                                />
                                <span className="text-[#7B5725] text-xl">–</span>
                                <input
                                    type="number"
                                    value={maxValue}
                                    onChange={handleMaxChange}
                                    className="border border-[#7B5725] w-24 text-[14px] px-4 py-2 text-center font-semibold text-[#7B5725]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                            <p className="text-[#563a14] text-[15px] font-[500] poppins">BRAND</p>
                        </div>

                        <p className="text-[#534634] text-[15px] instrument-san px-10 mt-5">my jewelry my design</p>
                    </div>

                    <div className="">
                        <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                            <p className="text-[#563a14] text-[15px] font-[500] poppins">MATERIAL</p>
                        </div>

                        <div className="font-sans text-[#5c3b00] text-base pl-10 pt-6">
                            {colors.map((color) => (
                                <label key={color} className="flex items-center mb-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 mr-2 border border-[#d7b18f] appearance-none checked:bg-[#d7b18f] checked:border-[#d7b18f] relative after:content-['✓'] after:absolute after:top-[1px] after:left-[3px]  after:text-white after:text-sm after:leading-none after:font-bold checked:after:block after:hidden"
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                            <p className="text-[#563a14] text-[15px] font-[500] poppins">STONES</p>
                        </div>

                        <div>
                            <div className="flex flex-wrap pl-4 mt-5">
                                {stone.map((item) => (
                                    <div key={item} className="px-4 py-[1px] mr-2 mb-2 border border-[#d2b48c] font-[600]">
                                        <p className="text-[#563a14] text-[15px]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="mb-[50px]">
                        <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                            <p className="text-[#563a14] text-[15px] font-[500] poppins">STONES</p>
                        </div>

                        <div className="font-sans text-base text-black space-y-2 pl-6 pt-5">
                            {colorsCode.map((color) => (
                                <label key={color.name} className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 mr-2 border border-[#d7b18f] appearance-none checked:bg-[#d7b18f] checked:border-[#d7b18f] relative after:content-['✓'] after:absolute after:top-[1px] after:left-[3px]  after:text-white after:text-sm after:leading-none after:font-bold checked:after:block after:hidden"
                                    />
                                    <span
                                        className="w-4 h-4 mr-2 inline-block"
                                        style={{ backgroundColor: color.code }}
                                    />
                                    <span className="text-[15px] font-medium flex ">{color.name}</span>
                                </label>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter