
import { useEffect, useState } from "react";
import SecondarySearch from "../../Components/Inputs/SecondarySearch";
import CategoryAboutSection from "../../Layout/CategoryPage/CategoryAboutSection";
import CategoryHeader from "../../Layout/CategoryPage/CategoryHeader";
import CategoryProductsListing from "../../Layout/CategoryPage/CategoryProductsListing";
import RelatedProducts from "../../Layout/CategoryPage/RelatedProducts";
import Footer from "../../Layout/Footer/Footer";
import { useLocation } from "react-router-dom";


export default function Categories() {
    const location = useLocation()
    const id = location?.state?.id
    // console.log('iddd',id);
    
    const [selectedCategory, setSelectedCategory] = useState(id || 2)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    

    console.log(selectedCategory, "rrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    
    
    return (
        <>

            <CategoryHeader setSelectedCategory={setSelectedCategory} settselectedCategory={selectedCategory} />
            <SecondarySearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setSearchResult={setSearchResult}
            />

            {/* <CategoryList cateNav={'w-full px-[100px] mt-[20px]'}/> */}

            <CategoryProductsListing
                searchTerm={searchTerm}
                searchResult={searchResult}
                selectedCategory={selectedCategory} />

            <CategoryAboutSection selectedCategory={selectedCategory} />
            <RelatedProducts />
            <Footer />

        </>
    )
}


