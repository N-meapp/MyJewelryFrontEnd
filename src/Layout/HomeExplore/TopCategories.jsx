import React, { useEffect, useState } from 'react'
import { FetchTopCategory } from '../../API/userAPI'
import { useNavigate } from "react-router-dom";

const TopCategories = () => {
    const [topCateData, setTopCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        FetchTopCategory((data) => {
            setTopCategory(data)
            setSelectedCategory(data[0]) // set first category as default
        })
    }, [])

    return (
        <div className='lg:hidden block px-[15px] mt-3'>
            <h2 className='text-[#513535] inter font-bold text-[16px]'>Top Categories</h2>

            <div className='flex gap-[15px] mt-[5px] overflow-x-auto no-scrollbar'>
                {topCateData.map((item, i) => (
                    <div
                        key={item.name + i}
                        onClick={() => setSelectedCategory(item)}
                        className={`flex justify-center items-center min-w-[70px] h-[30px] border rounded-[5px] p-2 shrink-0 cursor-pointer ${selectedCategory?.name === item.name
                            ? 'bg-[#D2B48C] text-white'
                            : 'border-[#D2B48C4D] text-[#513535]'
                            }`}
                    >
                        <p className='inter text-[9.5px] metamorphous-regular font-normal'>{item.name}</p>
                    </div>
                ))}
            </div>

            <div className="flex overflow-x-auto gap-3 mt-4 no-scrollbar h-[147px]">
                {selectedCategory?.images?.map((img, idx) => (
                    <div
                        onClick={() => navigate(`/ProductDetailPage`, { state: { id: img.id } })}
                        key={img.id || idx}
                        className="shrink-0 w-[145px] h-[147px] rounded-[17px] border-[0.43px] border-[#D2B48C] flex justify-center items-center"
                    >
                        <img
                            src={img.url}
                            className="w-[86px] h-[80px] object-cover"
                            alt={`img-${selectedCategory.name}-${idx}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCategories
