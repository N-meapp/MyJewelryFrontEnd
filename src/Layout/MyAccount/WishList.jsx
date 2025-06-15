import React, { useEffect, useState } from 'react'
import ProfileView from '../../Components/ProfileView/ProfileView'
import WishlistCard from '../../Components/Cards/WishlistCard'
import { wishlistData } from '../../constants/wishlist'
import { FetchWishlistData } from '../../API/userAPI'


const Wishlist = () => {

  const [wishlist, setwishlistData]=useState([])

  console.log(wishlist, "wishlist dataaaaaa");
  

  useEffect(()=>{
    FetchWishlistData(setwishlistData)
  },[])

  return (
    <div className=''>
      <div className='flex flex-col items-center md:mt-[-20px] mt-[-75px] '>
        <ProfileView />
        <p className='bolkit md:text-[32px] text-[15px] md:mt-5 mt-2'>My jewelry my design</p>
      </div>

      <div className='mt-16 pb-10'>
        <p className='poppins text-center text-[#6b6b6b] text-[16px] md:block hidden'>our wishlist is your personal collection of stunning jewelry pieces you love. Save your favorite designs, compare styles, and easily revisit them anytime.</p>

        <div className=" grid-cols-12 w-full mt-[80px] bg-[#f7f7f7] py-5 md:grid hidden">
          <div className='col-span-12 md:col-span-3'></div>
          <div className='col-span-12 md:col-span-5'>
            <p className='poppins text-[#000] text-[16px] font-[500]'>Product Name</p>
          </div>
          <div className='col-span-12 md:col-span-2 '>
            <p className='poppins text-[#000] text-[16px] font-[500]'>Unit Prize</p>
          </div>
          <div className='col-span-12 md:col-span-2 '>
            <p className='poppins text-[#000] text-[16px] font-[500]'>Stock Status</p>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-2 w-full mt-9'>
            <div className='col-span-12  md:col-span-12'>
              {wishlistData.map((item)=>(
                    <WishlistCard stockCss={item.stock_message === "Stock in" ? 'robo text-[13px] text-[#18c20f] font-[700]' :'robo text-[13px] text-[#c20f0f] font-[700]' }
                     img={item.image} productName={item.product_name} unitPrize={item.price}  StockStatus={item.stock_message} productId={item.product_id}  />
              ))}
            </div>
        </div>

      </div>

    </div>
  )
}

export default Wishlist;