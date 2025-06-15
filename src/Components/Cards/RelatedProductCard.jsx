import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RelatedProductCard({ item }) {
    const [wishlist, setWishlist] = useState(false)
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
                onClick={(e) => {
                    e.preventDefault()
                    { navigate(`/ProductDetailPage`, { state: { id: id } }) }
                }}
                className="relative w-[302px] h-auto rounded-[10px] py-[11px] px-[12px] flex flex-col gap-[6px] border-[0.5px] border-[#C8983E] cursor-pointer">
                <div className="w-full h-[214px] overflow-hidden">
               <div className="absolute right-4 top-4 z-20 cursor-pointer">
                        {item?.is_wishlisted ?
                            <svg onClick={(e) => { e.stopPropagation(); setWishlist(false); }} className="rounded-full p-[2px] shadow-md transition-transform duration-300 ease-in-out hover:scale-125" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" >
                                <path fill="#7b5725" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" />
                            </svg>
                            :
                            <svg onClick={(e) => { e.stopPropagation(); setWishlist(true); }} className="bg-white rounded-full p-[4px] shadow-md transition-transform duration-300 ease-in-out hover:scale-125" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24" >
                                <path className="shadow-md" fill="#7b5725" fillRule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd" />
                            </svg>
                        }
                    </div>
                    <img className="transition-transform object-cover duration-500 ease-in-out hover:scale-110 z-10" src={item.images ? item.images[0] : '' || item.first_image}></img>
                </div>
                <div className="w-full h-[88.37px] relative">
                    <h1 className="text-[16.85px] font-bold bolkit text-[#474141] truncate">{item?.head}</h1>
                    <div className="md:text-[10px] text-[9px] leading-[13.48px] text-[#474141B2] instrument-san">{item.description
                        ? isExpanded
                            ? item.description
                            : item.description.slice(0, 100)
                        : 'No description available'}
                        {item.description?.length > 100 && (
                            <span
                                onClick={toggleDescription}
                                className="text-black cursor-pointer ml-1  instrument-san"
                            >
                                {isExpanded ? " show less" : " ...more"}
                            </span>
                        )}
                    </div>                    <div className="w-full flex absolute bottom-0 items-center justify-between">


                        <div className="w-fit flex">

                            {starArray.map((count) => {

                                if (count <= item.average_rating) {
                                    return (
                                        <>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#C8983E" viewBox="0 0 24 24" strokeWidth="1" stroke="C8983E" className="size-[12px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </>
                                    )

                                } else {
                                    return (
                                        <>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#C8983E" className="size-[12px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
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