import React, { useState, useEffect, useRef } from 'react'
import CategoryList from '../../Components/CategoryList/CategoryList'
import SideNav from '../../Components/SideNav/SideNav'
import { useNavigate } from "react-router-dom";
import { fetchSearchData, getSearchProducts } from '../../API/userAPI';
import SearchLayout from '../SearchLayout/SearchLayout';


const Navbar = ({ hideSearch = false, mobailView, searchTerm, setSearchTerm, setSearchResult }) => {
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showSearchLayout, setShowSearchLayout] = useState(false);
  const searchRef = useRef(null);
  const [seachData, setSearchData] = useState([]);
  const [searchChange, setSearchChange]= useState(false);

  console.log(searchChange, "serch workingh");
  
  useEffect(() => {
    if (!searchTerm) {
      return setSearchResult([])
    }
    fetchSearchData(searchTerm).then((result) => {
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

  //  Close SearchLayout when clicking outside
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSideNavOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const searchClickHandle = ()=>{
    setShowSearchLayout(true)
    fetchSearchData(setSearchData)
  }

  return (
    <div >
      <div className='md:flex px-20 py-10  w-full hidden '>
        <div className=' w-3/12'>
          <img onClick={() => navigate('/')} src='/public/assets/Images/logo/logo.png' className='max-w-[100px] cursor-pointer ' />
        </div>
        <div className=' w-6/12'>
          <form class="flex items-center max-w-full mx-auto mt-10">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full " ref={searchRef}>
              <div class="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#56433D]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <div className='bg-gray-50 border  border-[#AF9F9F] px-6 py-[2px] rounded-[21px] '>
                <input
                  autoComplete='off'
                  onClick={searchClickHandle }
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text" id="simple-search" className="bg-gray-50  text-gray-900 text-sm rounded-[19px] w-full ps-10 p-2.5
                   focus:outline-none dark:placeholder-gray-400 dark:text-white" placeholder="Search for Gold Jewellery, Diamond Jewellery...." />
              </div>
              {showSearchLayout && <SearchLayout searchData={seachData} searchStatus={searchChange} />}

            </div>
          </form>
        </div>
        <div className='w-3/12 flex justify-end'>
          <div className='flex gap-3'>
            <div>
              <a href="tel:+9102205500022">
                <svg className='cursor-pointer' href='tel:+9102205500022' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path fill="none" stroke="#513535" stroke-miterlimit="10" stroke-width="28" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160 160 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159 159 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z" /></svg>
              </a>
            </div>
            <div>
              <svg onClick={() => navigate("/MyAccount", { state: { message: "whishlist" } })} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#513535" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" /></svg>
            </div>
            <div>
              <svg onClick={() => navigate("/MyAccount", { state: { message: "overview" } })} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#513535" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20.75a1 1 0 0 0 1-1v-1.246c.004-2.806-3.974-5.004-8-5.004s-8 2.198-8 5.004v1.246a1 1 0 0 0 1 1zM15.604 6.854a3.604 3.604 0 1 1-7.208 0a3.604 3.604 0 0 1 7.208 0" /></svg>
            </div>
          </div>
        </div>
      </div>
      {/* mobail view layout */}
      {mobailView}
      <SideNav
        isOpen={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
      />
      <div className=' hidden md:block'>
        <CategoryList cateNav={'w-full px-[100px] mt-[-20px]'} />
        <div className='px-5 mt-[20px]'>
          <hr className="border-t-2 border-[#E8E8E8]" />
        </div>
      </div>
    </div>
  )
}

export default Navbar