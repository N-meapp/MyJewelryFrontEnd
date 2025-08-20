import React, { useEffect, useState, useRef, useContext } from 'react';
import Modal from '../../Components/Modal/Modal'
import VirtualTryOn from '../../Components/AR3DModel/VirtualTryOn.jsx';
import { addToWishlist, fetchProductsDetails, ProductSharing, removeToWishlist, sentEnquery } from '../../API/userAPI.js';
import { useLocation } from 'react-router-dom';
import { ProductContext } from "./ProductContext.js";
import goldGif from '../../../public/assets/Images/ProductDetails/gold.gif'
import diamondGif from '../../../public/assets/Images/ProductDetails/diamond.gif'
import enqu from '../../../public/assets/Images/ProductDetails/w1.png'

const DetailHeader = () => {
    const location = useLocation()
    const id = location?.state?.id
    console.log('iddd', id);

    const [isModalOpen, setModalOpen] = useState(false);
    const [showTryItOn, setShowTryItOn] = useState(false);

    const [isModalTryitOnOpen, setModalTryitOnOpen] = useState(false);
    const { setDetailProductData } = useContext(ProductContext);
    const [productData, setProductData] = useState([])
    const [shareData, setShareData] = useState([])
    const [isShareModalOpen, setShareModalOpen] = useState(false);

    // console.log(productData, "wwwwwwwwwwwwwwwwww");
    useEffect(() => {
        fetchProductsDetails(id, setProductData)
        window.scrollTo(0, 0);
    }, [id])

    useEffect(() => {
        const interval = setInterval(() => {
            setShowTryItOn(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const imgRef = useRef(null);
    const images = [
        "/public/assets/Images/ProductDetails/gallery/g1.png",
        "/public/assets/Images/ProductDetails/gallery/g2.png",
        "/public/assets/Images/ProductDetails/gallery/g3.png",
        "/public/assets/Images/ProductDetails/gallery/g4.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showGlass, setShowGlass] = useState(false);
    const [glassPos, setGlassPos] = useState({ x: 0, y: 0 });
    const zoom = 2;
    const glassSize = 200;

    const handleMouseMove = (e) => {
        const img = imgRef.current;
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            setShowGlass(false);
            return;
        }

        setShowGlass(true);
        setGlassPos({ x, y });
    };

    const handleMouseLeave = () => setShowGlass(false);


    const addWishlist = (id) => {
        console.log(id, "idddddddddddddd");
        addToWishlist({ id });

        setProductData((prev) => ({ ...prev, is_wishlisted: true }));
    };

    const removeWishlist = (id) => {
        console.log(id, "idddddddddddddd");
        removeToWishlist({ id });
        setProductData((prev) => ({ ...prev, is_wishlisted: false }));
    };

    const sentToEnquery = async (p_id) => {
        try {
            const res = await sentEnquery({ id: p_id });
            console.log("Enquiry sent:", res);
            if (res.message == "Enquiry submitted successfully.") {
                alert("Enquiry submitted successfully");
            }
        } catch (error) {
            console.log("Enquiry failed:", error);
        }
    };

    useEffect(() => {
        if (productData?.id) {
            setDetailProductData(productData); // Send to context
        }
    }, [productData]);

    const handleShareProduct = async () => {
        const id = productData.id
        const ShareRes = await ProductSharing({ id })
        setShareData(ShareRes)
    }


    return (
        <>
            <div className='w-full px-4 sm:px-6 md:px-[100px]  py-6 md:py-[50px] '>

                {/* <div className='bg-[#ffffff] md:rounded-[16px] rounded-[20px] md:px-[55px] md:py-[30px] ' style={{ 'box-shadow': '4px 0px 50px 0px rgba(0, 0, 0, 0.1)' }}> */}
                <div className="bg-[#ffffff] md:rounded-[16px] rounded-[20px] px-[10px] md:px-[55px] md:py-[30px] md:shadow-xl">

                    <div className='grid grid-cols-12 gap-1 '>
                        <div className='col-span-12 md:col-span-4'>
                            <div className='border-2 border-[#ccc4b8] rounded-[20px] relative  flex justify-center'>
                                <div className=" absolute right-5 top-3 cursor-pointer">
                                    {productData.is_wishlisted ?
                                        <svg onClick={(e) => { e.stopPropagation(); removeWishlist(productData.id) }} className="rounded-full p-[2px] shadow-md z-50 transition-transform duration-300 ease-in-out hover:scale-125 " xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                            <path fill="#7b5725" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" />
                                        </svg>
                                        :
                                        <svg onClick={(e) => { e.stopPropagation(); addWishlist(productData.id); }} className=" rounded-full p-[2px] shadow-md transition-transform duration-300 ease-in-out hover:scale-125 " xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                            <path className="shadow-md" fill="#7b5725" fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd" />
                                        </svg>
                                    }
                                </div>
                                <img className='md:w-full md:h-[330px]  w-[358px] h-[325px]  object-cover rounded-[20px] ' src={productData.images ? productData.images[currentIndex] : ''} />
                                <div className="absolute bottom-2 right-2 z-50">

                                    <div className="relative md:w-[140px] md:h-[42px] w-[128px] h-[34px] ">
                                        {/* View Similar Button */}
                                        <button
                                            onClick={() => {
                                                setModalOpen(true);
                                                setShowTryItOn(false);
                                            }}
                                            className={`absolute  inset-0 w-full h-full  bg-white border border-[#ccc4b8] text-[#56433d] text-[13px] font-[550] rounded-[10px] px-3 py-2 flex items-center justify-center hover:bg-gray-100 shadow transition-all duration-500 ease-in-out
                                           ${!showTryItOn ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}

                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 256">
                                                <path fill="#56433d" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36" />
                                            </svg>
                                            <span className="ml-2">View similar</span>
                                        </button>

                                        {/* Try it on Button */}
                                        <button
                                            onClick={() => setModalTryitOnOpen(true)}
                                            className={`absolute inset-0 md:w-full md:h-full  w-[128px] h-[33px] bg-white border border-[#ccc4b8] text-[#56433d] text-[13px] font-[550] rounded-[10px] px-3 py-2 flex items-center justify-center hover:bg-gray-100 shadow transition-all duration-500 ease-in-out

                                        ${showTryItOn ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                                <g fill="none" stroke="#56433d" stroke-width="1.5">
                                                    <circle cx="12" cy="13" r="3" />
                                                    <path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" />
                                                    <path stroke-linecap="round" d="M19 10h-1" />
                                                </g>
                                            </svg>
                                            <span className="ml-2">Try it on</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-8 md:px-[30px] py-[10px] md:py-[40px] md:relative'>

                            <div className=''>
                                <p className='md:text-[32px] text-[18px] text-[#474141] alice'>{productData.head}</p>
                                <svg
                                    onClick={() => { handleShareProduct(); setShareModalOpen(true); }}
                                    className='absolute top-2 right-2 cursor-pointer md:block hidden'
                                    xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#474141" fill-rule="evenodd" d="M14.25 5.5a3.25 3.25 0 1 1 .833 2.173l-2.717 1.482l-3.04 1.737a3.25 3.25 0 0 1 .31 2.464l5.447 2.971a3.25 3.25 0 1 1-.719 1.316l-5.447-2.97a3.25 3.25 0 1 1-.652-4.902l3.37-1.926l2.729-1.489a3.3 3.3 0 0 1-.114-.856m3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m-11 7a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m9.25 7.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd" /></svg>
                                <div className='flex gap-2 md:mt-0 mt-[50px] md:justify-start justify-center'>
                                    <div className='flex'>
                                        <img className='md:w-[40px] md:h-[40px] w-[26px] h-[26px]' src={goldGif} alt="Computer man" />
                                        <p className='md:text-[16px] font-semibold text-[13px] text-[#474141] poppins md:mt-2 mt-1'>{productData.karat} Karat</p>
                                    </div>
                                    <div className='flex'>
                                        <img className='md:w-[40px] md:h-[40px] w-[26px] h-[26px]' src={diamondGif} alt="Computer man" />
                                        <p className='md:text-[16px] font-semibold text-[13px] text-[#474141] poppins md:mt-2 mt-1'>0.226 ct</p>
                                    </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 md:mt-2 mt-[-70px]'>
                                    <svg className='md:mt-2' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 32 32"><path fill="#474141" d="M5 4a1 1 0 0 0 0 2h1.557l-3.491 9.143A1 1 0 0 0 3 15.5C3 18.077 4.923 20 7.5 20s4.5-1.923 4.5-4.5a1 1 0 0 0-.066-.357L8.445 6H15v16H9a3 3 0 1 0 0 6h14a3 3 0 0 0 0-6h-6V6h6.434l-3.372 9.154A1 1 0 0 0 20 15.5c0 2.577 1.923 4.5 4.5 4.5s4.5-1.923 4.5-4.5a1 1 0 0 0-.062-.346L25.566 6H27a1 1 0 1 0 0-2zm2.5 5.137L9.548 14.5H5.452zM22.434 14.5L24.5 8.893l2.066 5.607z" /></svg>
                                    <p className='poppins md:font-[300] text-[#474141] md:text-[16px] text-[10px]'>weight: &nbsp; <span className='font-[600] md:text-[19px] text-[10px] poppins'>{productData.metal_weight} g</span> </p>
                                </div>

                                <div className='flex flex-wrap justify-between w-full md:mt-[100px] mt-[70px]'>
                                    <div>
                                        <div className='flex gap-2'>
                                            <p className='inter md:text-[32px] text-[22px] font-[600] text-[#474141]'>₹{productData.grand_total}</p>
                                            <span className='md:mt-3 mt-2 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 15 15"><path fill="none" stroke="#474141" stroke-linecap="square" d="m14 5l-6.5 7L1 5" stroke-width="1" /></svg></span>
                                        </div>
                                        <p className='inter md:text-[12px] text-[9px] text-[#a29f9f]'>Incl. taxes and charges </p>
                                    </div>
                                    <div>
                                        <button onClick={() => sentToEnquery(productData.id)} type="button" class="text-white flex  md:gap-2 gap-2  bg-[#56433D] hover:bg-[#795f57] poppins font-medium md:rounded-lg rounded-[10px] text-[14px]  md:px-24 px-[60px] py-2.5 md:py-2.5 md:me-2 mb-2">
                                            <img className='md:w-[20px] md:h-[20px] w-[15px] h-[15px] md:mt-0 mt-1' src={enqu} />
                                            Enquire
                                        </button>
                                    </div>
                                </div>
                                {/* <div className='mt-5 md:hidden block instrument-san text-[13px] '>
                                    <p className='text-[#636060] text-[14px]'>About</p>
                                    <p className='text-[#474141B2] text-[14px] mt-2'> Shop these sparkling collection of Gold Plated Royal Floral Carved Ear Cuff by SUHANI PITTIE online at Aza Fashions.Perfect for life's most memorable moments or as a cherished everyday treasure, its design captures both classic charm and modern luxury.</p>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                mainModalClass={"relative p-4 w-full max-w-7xl max-h-full"}
                modalWrapDiv={"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                onClose={() =>
                    setModalOpen(false)}
                content={(
                    <div>
                        <div className="flex flex-col items-center gap-2 md:gap-4 py-3 md:py-7 w-full">
                            <div
                                className="relative w-full md:w-[400px] h-[250px] md:h-[350px] object-cover overflow-hidden border border-[#ccc4b8] rounded-[20px]"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    ref={imgRef}
                                    src={productData.images ? productData.images[currentIndex] : '' || "/placeholder.svg"}
                                    className="w-full h-full object-cover select-none pointer-events-none"
                                    alt="Zoomable product"
                                />

                                {showGlass && imgRef.current && (
                                    <div
                                        className="absolute pointer-events-none rounded-full border-2 border-white shadow-md"
                                        style={{
                                            width: `${glassSize}px`,
                                            height: `${glassSize}px`,
                                            top: `${glassPos.y - glassSize / 2}px`,
                                            left: `${glassPos.x - glassSize / 2}px`,
                                            backgroundImage: `url(${productData.images[currentIndex]})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: `${imgRef.current.offsetWidth * zoom}px ${imgRef.current.offsetHeight * zoom}px`,
                                            backgroundPosition: `-${glassPos.x * zoom - glassSize / 2}px -${glassPos.y * zoom - glassSize / 2}px`,
                                            zIndex: 10,
                                        }}
                                    />
                                )}
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-5 px-2">
                                {productData.images ? productData.images.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src || "/placeholder.svg"}
                                        alt={`thumbnail-${index}`}
                                        className={`w-14 h-12 md:w-28 md:h-24 object-cover cursor-pointer border rounded-[10px] ${index === currentIndex ? "border-[#5f3f36] border-2" : "border-gray-300"
                                            }`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                )) : ''}
                            </div>
                        </div>
                    </div>
                )}
            />


            {/* try it on virtual modal */}

            <Modal
                isOpen={isModalTryitOnOpen}
                mainModalClass={"relative p-4 w-full max-w-7xl max-h-full"}
                modalWrapDiv={"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                onClose={() =>
                    setModalTryitOnOpen(false)}
                content={(
                    <div>
                        <VirtualTryOn setModalTryitOnOpen={() => setModalTryitOnOpen(false)} />
                    </div>
                )}
            />

           {/* Share Options Moadal */}
            <Modal
                isOpen={isShareModalOpen}
                modalWrapDiv={"fixed top-0 right-0 left-0 bg-[#cececeb3] z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                mainModalClass={"relative p-10 w-full max-w-2xl max-h-full"}
                onClose={() =>
                    setShareModalOpen(false)}
                content={(
                    <div className='flex justify-center items-center gap-2'>
                        <div>
                            <div className='w-full h-full p-9'>
                                <p className='text-[#56433d] text-center text-[22px] border-l mb-3 alice'>{shareData?.product_head}</p>
                                <img className='w-full max-h-[200px] h-full object-cover rounded-2xl' src={shareData?.product_image} />
                            </div>

                            <a href={shareData?.share_links?.whatsapp} target="_blank" type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-[#56433d]  font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#56433d" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                                &nbsp; Whatsapp
                            </a>
                            <a href={shareData?.share_links?.telegram} target="_blank" type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-[#56433d]  font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#56433d" d="m16.463 8.846l-1.09 6.979a.588.588 0 0 1-.894.407l-3.65-2.287a.588.588 0 0 1-.095-.923l3.03-2.904c.034-.032-.006-.085-.046-.061l-4.392 2.628a1.23 1.23 0 0 1-.87.153l-1.59-.307c-.574-.111-.653-.899-.114-1.122l8.502-3.515a.882.882 0 0 1 1.21.952" /><path fill="#56433d" fill-rule="evenodd" d="M12 1.706C6.315 1.706 1.706 6.315 1.706 12S6.315 22.294 12 22.294S22.294 17.685 22.294 12S17.685 1.706 12 1.706M3.47 12a8.53 8.53 0 1 1 17.06 0a8.53 8.53 0 0 1-17.06 0" clip-rule="evenodd" /></svg>
                                &nbsp; Telegram
                            </a>
                            <a href={shareData?.share_links?.facebook} target="_blank" type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-[#56433d]  font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#56433d" stroke-linecap="round" stroke-width="1.5" d="M10.478 21.125a9.3 9.3 0 0 0 3.037.002m-3.038-.002A9.25 9.25 0 0 1 2.75 12a9.25 9.25 0 1 1 10.765 9.127m-3.038-.002V16.12H8.58a.6.6 0 0 1-.6-.6v-1.838a.6.6 0 0 1 .6-.6h1.897V9.95a3 3 0 0 1 3-3h1.81a1 1 0 0 1 1 1v1.04a1 1 0 0 1-1 1h-.772a1 1 0 0 0-1 1v2.092h2.297a.6.6 0 0 1 .592.698l-.25 1.504a1 1 0 0 1-.986.836h-1.653v5.007" /></svg>
                                &nbsp; Facebook
                            </a>
                            <a href={shareData?.share_links?.instagram} target="_blank" type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-[#56433d]  font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#56433d" fill-rule="evenodd" d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772a4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153a4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772a4.9 4.9 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0" /></svg>
                                &nbsp; Instagram
                            </a>
                        </div>
                    </div>
                )}
            />
        </>
    )
}

export default DetailHeader