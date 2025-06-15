import React, { useEffect, useState } from 'react'
import MainHeaderSlide from '../../Components/MainHeaderSlide/MainHeaderSlide'
import { fetchHeaderData } from '../../API/userAPI'

const MainHeader = () => {
  const [headerData, setHeaderData] = useState([])

  // console.log(headerData, "999999999");

  useEffect(() => {
    fetchHeaderData(setHeaderData)
  }, [])

  return (
    <div className='bg-[#FDFDFD] rounded-b-[50px] pb-8 pt-[2px] shadow-[0_4px_10px_-4px_rgba(232,232,232,1)]'>
      <div className='flex gap-3 w-full md:px-[70px] px-[10px] md:mt-3 mt-[10px]'>
        <div className='md:w-9/12 mx-auto '>
          {headerData.map((item) => (
            <React.Fragment key={item.id}>
              {item.main_mobile_img.map((img, index) => (
                <img
                  key={`mobail-${index}`}
                  className="w-full h-[70vh] object-cover rounded-[30px] md:block hidden"
                  src={img}
                  alt={`mobail-${index}`}
                />
              ))}

              {item.main_img.map((img, index) => (
                <img
                  key={`main-${index}`}
                  className="w-[465px] h-[47vh] object-cover rounded-[30px] md:hidden"
                  src={img}
                  alt={`main-${index}`}
                />
              ))}
            </React.Fragment>
          ))}


        </div>
        <div className='w-3/12 hidden md:block'>
          <MainHeaderSlide slideImg={headerData[0]?.slider_images || []} />
        </div>
      </div>
    </div>
  )
}

export default MainHeader