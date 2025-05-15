import React,{ useState, useEffect, useRef } from 'react'
import CategoryList from '../../Components/CategoryList/CategoryList'
import SideNav from '../../Components/SideNav/SideNav'
import { useNavigate } from "react-router-dom";


const Navbar = ({hideSearch=false, mobailView}) => {


    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  
      useEffect(() => {
          const handleEsc = (e) => {
              if (e.key === 'Escape') setIsSideNavOpen(false);
          };
          window.addEventListener('keydown', handleEsc);
          return () => window.removeEventListener('keydown', handleEsc);
      }, []);
  return (
    <div >
      <div className='md:flex px-20 py-10  w-full hidden '>
        <div className=' w-3/12'>
          <img src='/public/assets/Images/logo/logo.png' className='max-w-[100px]' />
        </div>
        <div className=' w-6/12'>
          <form class="flex items-center max-w-full mx-auto mt-10">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#56433D]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <div className='bg-gray-50 border border-[#AF9F9F] px-6 py-[2px] rounded-[21px]'>
                <input type="text" id="simple-search" class="bg-gray-50 text-gray-900 text-sm rounded-[19px] w-full ps-10 p-2.5 focus:outline-none dark:placeholder-gray-400 dark:text-white" placeholder="Search for Gold Jewellery, Diamond Jewellery...." required />
              </div>
            </div>
          </form>
        </div>
        <div className='w-3/12 flex justify-end'>
          <div className='flex gap-3'>
            <div>
              <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><path fill="#513535" d="M14.559 51.953h27.586c4.218 0 6.656-2.437 6.656-7.266V20.43c0-4.828-2.461-7.266-7.36-7.266h-3.726c-.14-4.922-4.406-9.117-9.703-9.117c-5.32 0-9.586 4.195-9.727 9.117H14.56c-4.875 0-7.36 2.414-7.36 7.266v24.258c0 4.851 2.485 7.265 7.36 7.265M28.012 7.61c3.304 0 5.812 2.485 5.93 5.555h-11.86c.094-3.07 2.602-5.555 5.93-5.555M14.629 48.18c-2.344 0-3.656-1.242-3.656-3.679V20.617c0-2.437 1.312-3.68 3.656-3.68h26.766c2.296 0 3.632 1.243 3.632 3.68V44.5c0 2.438-1.336 3.68-2.953 3.68Z" /></svg>
            </div>
            <div>
              <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#513535" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" /></svg>
            </div>
            <div>
              <svg  className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#513535" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20.75a1 1 0 0 0 1-1v-1.246c.004-2.806-3.974-5.004-8-5.004s-8 2.198-8 5.004v1.246a1 1 0 0 0 1 1zM15.604 6.854a3.604 3.604 0 1 1-7.208 0a3.604 3.604 0 0 1 7.208 0" /></svg>
            </div>
          </div>
        </div>
      </div>

      
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