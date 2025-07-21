
import React, { useState, useEffect, useRef } from "react";
import SideNav from "../SideNav/SideNav"
import { getSearchProducts } from "../../API/userAPI";


export default function SecondarySearch({searchTerm,setSearchTerm,setSearchResult}) {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);


    useEffect(() => {
        if (!searchTerm) {
            return setSearchResult([])
        }
        getSearchProducts(searchTerm).then((result) => {
            setSearchResult(result);
        });
    },[searchTerm])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setIsSideNavOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    

    return (
        <>

            <div className="md:mt-[245px] mt-[90px] md:w-[60%]  w-[92%] mx-auto relative flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#946E55" className="absolute md:left-[2%] left-[4%] top-2.5 size-[25px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                    value={searchTerm}
                    onChange={handleChange}
                    type='text' className="md:w-[100%] w-full h-[42px] placeholder:tracking-wide border-[1px]  rounded-[15px] border-[#D2B48C] placeholder:text-[#9B9797] text-sm tracking-wider text-[#9B9797] poppins  pl-[40px] pr-[18.33px] py-[11.45px] placeholder:text-[13px]" placeholder="">
                </input>

                <button onClick={() => setIsSideNavOpen(true)} type="button" class="text-white bg-[#D2B48C] hover:bg-[#84675e]  font-medium rounded-[5px]  px-1 py-1 w-[40px] h-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="26px" viewBox="0 0 24 24"><path fill="none" stroke="#f0f0f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z" /></svg>
                </button>
            </div>
            <SideNav

                isOpen={isSideNavOpen}
                onClose={() => setIsSideNavOpen(false)}
            />



        </>
    )
}