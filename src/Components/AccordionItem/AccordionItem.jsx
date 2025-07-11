import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ index, title, content, isOpen, toggle, icon, mobileIcon }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
        }
    }, [isOpen]);

    const downSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 20 20"><path fill="#56433d" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" /></svg>
    );

    const upSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 20 20"><path fill="#56433d" fill-rule="evenodd" d="M10.103 7.222q5.17 5.202 6.89 6.887c.198.185.539.56 1.046.07q.508-.49-.039-1.073l-7.444-7.43a.64.64 0 0 0-.455-.176a.7.7 0 0 0-.472.176l-7.453 7.635q-.362.582.03.98q.39.398.95.043z" /></svg>
    );

    console.log(content, " contentssssss");


    return (
        <div className="border-b border-slate-200 ">
            <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center md:py-5 py-3 text-slate-800 "
            >
                <span className="md:flex gap-5 poppins text-[#56433d] md:text-[16px] text-[12px] hidden ">
                    {icon}
                    {title}
                </span>
                <span className="flex gap-5 poppins text-[#56433d] md:text-[16px] text-[12px] md:hidden">
                    {mobileIcon}
                    {title}
                </span>
                <span className="text-slate-800 transition-transform duration-300">
                    {isOpen ? upSVG : downSVG}
                </span>
            </button>
            <div
                ref={contentRef}
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out flex-wrap "
            >
                <div className="grid grid-cols-12 gap-x-2 md:gap-y-16 gap-y-6 md:px-[60px] md:py-[40px] px-[20px] py-[10px] ">

                    {content.map((item, i) => (
                        <div
                            key={i}
                            className={
                                item.discription === "" || !item.discription
                                    ? "col-span-12"
                                    : "col-span-4 md:col-span-4"
                            }
                        >
                            <h4 className={`text-[#56433d]  ${item.discription === "" || !item.discription
                                    ? "md:text-[15px] text-[13px]"
                                    : "md:text-[24px] bolkit text-[15px] font-[600]"
                                } `}>
                                {item.heading || item.description}
                            </h4>

                            {item.discription && (
                                <p className="text-[#b2b0b0] md:text-[16px] text-[10px] poppins font-[400]">
                                    {item.discription}
                                </p>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};


export default AccordionItem 