import React, { useEffect, useState } from 'react'
import { fetchingClassicCollections } from '../../API/userAPI'
import { useNavigate } from "react-router-dom"

const HomeClassicCollection = () => {

  const [classicCollectionData, setClassicCollectionData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchingClassicCollections(setClassicCollectionData)
  }, [])



  return (

    <div className="">
      <div className="md:px-[10px] px-[10px] sm:px-[100px] md:py-[100px] md:h-[750px] ">
        <div>
          <h3 className="md:text-[26px] text-[18px] text-[#352727] text-center bolkit font-bold">Classic Collection</h3>
          <p className="text-[#aaa9a6] md:text-[15px] text-[10px] text-center instrument-san mt-1 pb-3">
            Elegant necklaces and bracelets to dazzling rings and earrings, each <br className="md:hidden block" />{" "}
            piece is a <br className='hidden md:block' /> work of art. Shop now & add a touch of sparkle to your style.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-2 md:mt-8 mt-5 justify-center">
          {classicCollectionData.map((item, index) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/ProductDetailPage`, { state: { id: item.id } })
              }
              className={`md:w-1/5 max-w-[50%] px-1 md:px-1 mb-4 md:mb-0 cursor-pointer ${index === 2 ? 'flex items-center md:mt-0 mt-[-115px]' : ''
                }`}
            >
              <div className="w-full">

                {/* {item?.is_wishlisted ?
                            <svg onClick={(e)=>{e.stopPropagation(); setWishlist(false);}} className="transition-transform duration-300 ease-in-out hover:scale-125 " xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                <path fill="#7b5725" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" />
                            </svg>
                            :
                            <svg onClick={(e)=>{e.stopPropagation(); setWishlist(true);}} className="transition-transform duration-300 ease-in-out hover:scale-125 " xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                <path className="shadow-md" fill="#7b5725" fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd" />
                            </svg>
                        } */}
                <img
                  className={`md:w-full md:rounded-[15px] rounded-[8px] object-cover transition-all duration-500 hover:translate-y-[-10px]
                   ${index === 0 ? 'w-[170px] h-[165px] md:h-[37vh]' : ''}
                   ${index === 1 ? 'w-[167px] h-[202px] md:h-[54vh]' : ''}
                   ${index === 2 ? 'w-[160px] h-[180px] md:h-[37vh]' : ''}
                   ${index === 3 ? 'w-[171px] h-[221px] md:h-[56vh]' : ''}
                  `}
                  src={item.images}
                  alt={item.head}
                />
                <div className="flex px-1 justify-between">
                  <div>
                    <h5 className="md:text-[18px] text-[10px] text-[#000000] bolkit mt-1">{item.head}</h5>
                    <p className="text-[#56433d] md:text-[12.51px] text-[10.7px] robo font-[600]">{item.grand_total}</p>
                  </div>
                  <div className="mr-[40px] md:mr-0 grid justify-end">
                    {/* Heart Icon SVG */}
                    {item.wishlist ?
                      <svg className="cursor-pointer mt-2 md:mr-0 md:w-5 md:h-5 w-[12px] h-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path fill="#7b5725" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" />
                      </svg>
                      :
                      <svg className="cursor-pointer mt-2 md:mr-0 md:w-5 md:h-5 w-[12px] h-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path fill="#513535" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" />
                      </svg>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeClassicCollection
