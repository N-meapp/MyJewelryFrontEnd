import React, { useState, useEffect, useRef } from "react";
import './ProductListingLayout.css'
import ProductCard from "../../Components/Cards/ProductCard";
import { fetchProductsDataByCategory } from "../../API/userAPI";
import { useLocation } from "react-router-dom";
import Filter from "../../Components/Filter/Filter";

const ProductListingLayout = ({ searchTerm, searchResult }) => {

  const location = useLocation();
  const id = location.state?.id

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50000);
  const priceGap = 5000;
  const maxRange = 100000;
  const progressRef = useRef();
  const [filter, setFilter] = useState(true)
  const [productData, setProductData] = useState({ products: [] });

  useEffect(() => {
    if (!searchTerm) {
      fetchProductsDataByCategory(id, (data) => {
        if (data?.products) {
          setProductData(data);
          setCurrentPage(1); // Reset to first page when new data is fetched
          window.scrollTo(0, 0);
        } else {
          setProductData({ products: [] });
        }
      });
    }
  }, [searchTerm]);

  useEffect(() => {
    const minPercent = (minValue / maxRange) * 100;
    const maxPercent = (maxValue / maxRange) * 100;
    if (progressRef.current) {
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${100 - maxPercent}%`;
    }
  }, [minValue, maxValue]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(productData.products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const productsToDisplay = productData.products.slice(startIndex, startIndex + itemsPerPage);


  return (

    <div className="transition-all duration-500 ease-in-out mb-[50px] md:mb-0 justify-center grid">

      {!filter && (
        <button
          onClick={() => setFilter(true)}
          type="button"
          className="bg-[#fafafa] w-[45px] flex justify-center border border-none focus:outline-none hover:bg-[#eeeeee]  rounded-lg px-1 py-2 me-2 mb-2 ml-4 mt-2 transition-all duration-300 "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#563a14"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
            />
          </svg>
        </button>
      )}

      <div className="grid md:grid-cols-12 grid-cols-2 justify-center gap-1 w-full transition-all duration-500 ease-in-out  ">
        {/* Left Sidebar */}
        {filter && (
          <div
            className={`col-span-12 md:col-span-3 px-4 pt-1 border-r-2 border-[#e0dbdb] transform transition-all duration-500 ease-in-out md:block hidden ${filter ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'

              }`}
          >
            <button
              onClick={() => setFilter((prev) => !prev)}
              type="button"
              className="bg-[#fafafa] border border-none focus:outline-none hover:bg-[#f6f6f6] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#563a14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M21 12.013L3.211 12m6.777 7L3 12l6.988-7"
                />
              </svg>
            </button>
            <Filter />
          </div>
        )}

        {/* Right Content Area */}
        <div

          className={`transition-all duration-500 ease-in-out   ${filter
            ? 'col-span-6 md:col-span-9 px-[10px] md:px-[40px] py-[20px] md:py-[40px]'
            : 'col-span-12 px-[10px] md:px-[40px] py-[20px] md:py-[40px]'
            }`}
        >
          <div>
            <p
              className={`text-[20px] text-[#46322c] alice transition-all duration-500  ${filter ? '' : 'md:px-[80px]'
                }`}
            >
              {productData.category}

            </p>

            {/* <div className={` grid gap-[15px] md:gap-[14px]  transition-all duration-500 mt-[25px] md:mt-[20px]  ${filter
              ? 'grid-cols-2  lg:grid-cols-3 w-fit'
              : 'grid-cols-2 md:grid-cols-4 md:px-[80px]'}`}>

              {productsToDisplay?.map((item, index) => (
                <ProductCard key={item.id || index} item={item} />
              ))}

            </div>

            <div className="mt-9 flex justify-center items-center gap-2">
              <button
                className="px-3 py-1 rounded bg-[#ebe7e3f6] text-[#732525] hover:text-[#fff] hover:bg-[#aa6b6b] disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#732525] text-white' : 'bg-gray-200 text-black'
                    } hover:bg-[#c8983e] hover:text-[#fff]`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded bg-[#ebe7e3f6] text-[#732525] hover:text-[#fff] hover:bg-[#aa6b6b] disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div> */}

            {!productsToDisplay.length === 0 ?
              <p className="text-center mt-4 text-[16px] text-[#732525]">Product not found</p>
              :
              <div className={`grid gap-[15px] md:gap-[14px] transition-all duration-500 mt-[25px] md:mt-[20px] ${filter ? 'grid-cols-2 lg:grid-cols-3 w-fit' : 'grid-cols-2 md:grid-cols-4 md:px-[80px]'
                }`}>
                {productsToDisplay.map((item, index) => (
                  <ProductCard key={item?.id || index} item={item} />
                ))}
              </div>
            }

            <div className="mt-9 flex justify-center items-center gap-2">
              <button
                className="px-3 py-1 rounded bg-[#ebe7e3f6] text-[#732525] hover:text-white hover:bg-[#aa6b6b] disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1
                    ? 'bg-[#732525] text-white'
                    : 'bg-gray-200 text-black'
                    } hover:bg-[#c8983e] hover:text-white`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="px-3 py-1 rounded bg-[#ebe7e3f6] text-[#732525] hover:text-white hover:bg-[#aa6b6b] disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>


          </div>
        </div>

      </div>
    </div>


  )
}

export default ProductListingLayout