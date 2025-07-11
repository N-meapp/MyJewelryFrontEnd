import React, { useState, useContext } from 'react'
import Footer from '../../Layout/Footer/Footer'
import RelatedProducts from '../../Layout/CategoryPage/RelatedProducts'
import DetailHeader from '../../Layout/ProductDetail/DetailHeader'
import ProductDetails from '../../Layout/ProductDetail/ProductDetails'
import PriceBreakup from '../../Layout/ProductDetail/PriceBreakup'
import JewelryTryOn from '../../Components/AR3DModel/VirtualTryOn'
import Navbar from '../../Layout/Navbar/Navbar'
import SubMobileNav from '../../Layout/Navbar/subMobileNav'

import { ProductContext } from "../../Layout/ProductDetail/ProductContext.js"


const ProductDetailPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

    const [detailProductData, setDetailProductData] = useState(null);

    console.log(detailProductData,"llllllllllllllllllllllllll");
    

  return (
    <div>
      <Navbar mobailView={<SubMobileNav />} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchResult={setSearchResult} />

      <ProductContext.Provider value={{ detailProductData, setDetailProductData }}>
        <DetailHeader />
        <ProductDetails />
        <PriceBreakup  />
      </ProductContext.Provider>
      <RelatedProducts />
      <Footer />
    </div>
  )
}

export default ProductDetailPage