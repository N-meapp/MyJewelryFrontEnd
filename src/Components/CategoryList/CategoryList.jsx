import { useEffect, useRef, useState } from 'react';
import './CategoryList.css';
import MegaDropdown from '../MegaDropdown/MegaDropdown';
import { categorySubData } from '../../constants/category';
import { fetchMegaDropdownData, fetchNavCategory } from '../../API/userAPI';


const CategoryList = ({ cateNav }) => {

  const scrollRef = useRef(null);
  // const [categoryData, setCategoryData] = useState([]);
  const [navCategoryData, setNavCategoryData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [megaData, setMegaData] = useState([])

  console.log(megaData, "megaaa dataaaa");
  
  
  useEffect(() => {
    // setCategoryData(navCategory);
    fetchNavCategory(setNavCategoryData)
    fetchMegaDropdownData(setMegaData)
  }, []);

  const slideLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  };


  const slideRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full px-[100px] mt-[-20px] relative">
      <div className="flex items-center justify-between mb-4">
        <button onClick={slideLeft} className="bg-transparent p-1 rounded-full transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 48 48">
            <path fill="none" stroke="#56433d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M31 36L19 24l12-12" />
          </svg>
        </button>
        {/* overflow-x-auto */}
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef} style={{ scrollBehavior: 'smooth' }}>
          {/* relative */}
          <div className="flex gap-3 min-w-max w-[500px] ">
            {navCategoryData.map((item, index) => {
              const matchedSubData = megaData.find((data) => data.title === item.name);

              return (
                <div
                  key={item.title + index} // Ensure unique key
                  // relative
                  className=" w-[150px]  select-none cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className='flex items-center justify-center gap-2'>
                    <img className="w-[20px] mb-1" src={item.image} alt="icon" />
                    <p className={`poppins-regular text-[13px] font-[500] ${hoveredIndex === index ? "text-[#804848]" : "text-[#474141]"}`}
                    >
                      {item.name}
                    </p>
                  </ div>

                  {/* {hoveredIndex === index ? <div className='flex justify-center px-3'> <hr className='border w-full border-[#804848] mt-1' /> </div> : <span></span>} */}
                  <div className="relative w-full h-[2px]">
                    <div className={`absolute bottom-0 left-0  w-full h-0.5 bg-[#804848] transform transition-transform duration-300 rounded-full ease-in-out mt-3 ${hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                        }`}
                    />
                  </div>

                  {hoveredIndex === index && matchedSubData && (
                    <div className="absolute top-full mt-[-6px] left-0 z-999">
                      <MegaDropdown data={matchedSubData} />
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>

        <button onClick={slideRight} className="bg-transparent p-1 mr-2 rounded-full transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 48 48">
            <path fill="none" stroke="#56433d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
