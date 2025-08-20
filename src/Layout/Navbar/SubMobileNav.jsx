// import React, { useEffect, useState } from 'react'
import { FetchProfileData, fetchSearchData, getSearchProducts } from '../../API/userAPI'
import SearchLayout from '../SearchLayout/SearchLayout';


import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";

const SubMobileNav = ({ searchTerm, setSearchTerm, setSearchResult, searchResult }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showSearchLayout, setShowSearchLayout] = useState(false)
  const searchRef = useRef(null);
  const [seachData, setSearchData] = useState([])
  const [searchChange, setSearchChange] = useState(false)
  const [profileData, setProfileData] = useState([])

  const [navSearchResult, setNavSearchResult] = useState([]);

  useEffect(() => {
    FetchProfileData(setProfileData)
  }, [])

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) {
      return setSearchResult([])
    }
    getSearchProducts(searchTerm).then((result) => {
      setSearchResult(result)
    })
  }, [searchTerm])

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      setSearchChange(true);
    } else {
      setSearchChange(false);
    }

    getSearchProducts(value).then((result) => {
      setSearchResult(result);
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchLayout(false);
      }

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSideNavOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);



  useEffect(() => {
    setNavSearchResult(searchResult)
  }, [searchResult])

 const searchClickHandle = async ()=>{
    setShowSearchLayout(true)
    await fetchSearchData(setSearchResult)
  }

  return (
    <>
    <div className='w-[90%] mx-auto h-[60px] md:mt-[49px] mt-[10px] flex justify-between md:hidden '>
      <img src='/public/assets/Images/logo/logo.png' className='md:block hidden' />
      <svg className='md:hidden mt-[20px]  block w-[12px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24">
        <path fill="#6B3535" fill-rule="evenodd" d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5L10 4.563L2.682 12z" /></svg>        <div className='flex gap-3 items-center'>
        <div className='flex gap-3 items-center'>
          {/* <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
        <path fill="#513535" d="M14.559 51.953h27.586c4.218 0 6.656-2.437 6.656-7.266V20.43c0-4.828-2.461-7.266-7.36-7.266h-3.726c-.14-4.922-4.406-9.117-9.703-9.117c-5.32 0-9.586 4.195-9.727 9.117H14.56c-4.875 0-7.36 2.414-7.36 7.266v24.258c0 4.851 2.485 7.265 7.36 7.265M28.012 7.61c3.304 0 5.812 2.485 5.93 5.555h-11.86c.094-3.07 2.602-5.555 5.93-5.555M14.629 48.18c-2.344 0-3.656-1.242-3.656-3.679V20.617c0-2.437 1.312-3.68 3.656-3.68h26.766c2.296 0 3.632 1.243 3.632 3.68V44.5c0 2.438-1.336 3.68-2.953 3.68Z" /></svg>
      <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#513535" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" /></svg>
      <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#513535" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20.75a1 1 0 0 0 1-1v-1.246c.004-2.806-3.974-5.004-8-5.004s-8 2.198-8 5.004v1.246a1 1 0 0 0 1 1zM15.604 6.854a3.604 3.604 0 1 1-7.208 0a3.604 3.604 0 0 1 7.208 0" /></svg> */}
          <img src='/public/assets/Images/category/profile.png' className='w-12 h-12 rounded-full object-cover cursor-pointer md:block hidden ' />
          <div class="relative flex items-center mr-[-10px] bg-[#ffffff] h-10 rounded-full px-2 transition-all duration-400 group  pl-[12px] ">
            <input
              type="text"
              placeholder="Type to Search"
              autoComplete='off'
              onClick={searchClickHandle}
              value={searchTerm}
              onChange={handleSearch}
              class="border-none bg-transparent outline-none  text-[12px] leading-10 w-0 group-hover:w-[240px] px-0 group-hover:px-2 transition-all duration-400"
            />
            <a href="#" class="flex  w-5 h-5 rounded-full   transition-all duration-400 group-hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#513535" className="size-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </a>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 24 24"><path fill="none" stroke="#513535" stroke-linecap="round" className=' md:hidden '
            stroke-linejoin="round" stroke-width="1.5" d="M9.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5-5.5l-5 3.5m5 7.5l-5-3.5m10 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" /></svg>
        </div>
      </div>
     
    </div>

     <div className='mb-3'>
        {showSearchLayout && <SearchLayout searchData={navSearchResult} searchStatus={searchChange} mobailNavClosing={() => setShowSearchLayout(false)} />}
      </div>
      </>
  )
}

export default SubMobileNav

export const AccountMobileView = () => {
  return (
    <div className='w-[90%] px-[20px] mx-auto h-[60px] md:mt-[49px] mt-[10px] flex justify-between md:hidden'>

      <svg onClick={() => window.history.back()} className='md:hidden mt-[20px]  block w-[12px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24">
        <path fill="#6B3535" fill-rule="evenodd" d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5L10 4.563L2.682 12z" /></svg>
      <div className='flex gap-3 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 256 256" >
          <path fill="#6B3535" d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16" /></svg>
      </div>


    </div>
  )
}

