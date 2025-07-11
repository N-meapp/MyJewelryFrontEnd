import { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard"
import LoadMoreButton from "../../Components/Buttons/LoadMoreButton";
import { fetchProductsDataByGender } from "../../API/userAPI";


export default function CategoryProductsListing({ selectedCategory,searchTerm,searchResult }) {
    
    const [productData, setProductData] = useState([])

    console.log(selectedCategory,searchTerm,searchResult , "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    

    useEffect(() => {
        if (selectedCategory && !searchTerm ) {
            fetchProductsDataByGender(selectedCategory, setProductData);
        }
    }, [selectedCategory,searchTerm]);
     const filteredProducts = searchTerm ? searchResult : productData;
     
    //   pagination functions
      const itemsPerPage = 9; 
      const [currentPage, setCurrentPage] = useState(1);
    
      const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const productsToDisplay = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
     
    return (
        <>
            <div className="h-full w-fit md:mt-[40px] mt-[15px] grid md:grid-cols-3 grid-cols-2 gap-[10px] mx-auto">
        {productsToDisplay.map((item, index) => (
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
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-[#732525] text-white' : 'bg-gray-200 text-black'
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
      </div>

            {/* <LoadMoreButton /> */}
        </>
    )
}