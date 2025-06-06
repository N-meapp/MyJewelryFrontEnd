import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ProductCard({ item }) {
    
    const navigate = useNavigate()
    const id = item.id
  
    
    const [starArray, setStarArray] = useState([1, 2, 3, 4, 5])
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleDescription = () => {
        setIsExpanded(!isExpanded)
    }


    return (
        <>
            <div
             onClick={(e)=>{e.preventDefault()
                {navigate(`/ProductDetailPage`,{state:{id:id}})}
             }}
             className=" md:max-w-[302px] max-w-[180px] cursor-pointer h-auto rounded-[3%] md:py-[3%] md:px-[4%] px[1%] flex flex-col md:gap-[2%] p-1 border-[0.5px] border-[#C8983E] items-center ">
                {/* <div className="md:w-[302px] w-[180px] md:h-auto h-[228px] md:rounded-[10px] rounded-[6px] py-[11px] px-[12px] flex flex-col  gap-[8px] border-[0.5px] border-[#C8983E]"> */}
                <div className="md:w-full md:h-[200px] h-[108px] w-[166px]  overflow-hidden flex justify-center  ">
                    <img className="transition-transform duration-500 ease-in-out hover:scale-110" alt="product image" src={item.images ? item.images[0] : ''  || item.first_image}></img>
                </div>
                <div className="w-full h-[88.37px] relative">
                    <h1 className="md:text-[16.85px] text-[15px] font-bold bolkit text-[#474141] truncate">{item?.head}</h1>
                    <div className="md:text-[10px] text-[9px] leading-[13.48px] text-[#474141B2] instrument-san">{item.description
                        ? isExpanded
                            ? item.description
                            : item.description.slice(0, 100)
                        : 'No description available'}
                        {item.description > 100 && (
                            <span
                                onClick={toggleDescription}
                                className="text-black cursor-pointer ml-1  instrument-san"
                            >
                                {isExpanded ? " show less" : " ...more"}
                            </span>
                        )}
                    </div>
                    <div className="w-full flex absolute bottom-0 items-center justify-between">

                        <div className="w-fit flex">

                            {starArray.map((count) => {

                                if (count <= item.star) {
                                    return (
                                        <>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#C8983E" viewBox="0 0 24 24" stroke-width="1" stroke="C8983E" class="size-[12px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </>
                                    )

                                } else {
                                    return (
                                        <>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#C8983E" class="size-[12px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </>
                                    )
                                }

                            })}
                        </div>

                        <h1 className="text-[15.43px] font-bold robo text-[#56433D]">₹ {item.grand_total}</h1>
                    </div>
                </div>
            </div>


        </>
    )
}