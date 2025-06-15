import React, { useState } from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import ProductListingLayout from '../../Layout/ProductListingLayout/ProductListingLayout'
import Footer from '../../Layout/Footer/Footer'
import MainMobileNav from '../../Layout/Navbar/MainMobileNav'

const ProductListing = () => {

  const [searchTerm,setSearchTerm]=useState('')
  const [searchResult,setSearchResult]=useState([])
  return (
    <div>
       <Navbar mobailView={<MainMobileNav searchTerm={searchTerm}   setSearchTerm={setSearchTerm} setSearchResult={setSearchResult} />} searchTerm={searchTerm}   setSearchTerm={setSearchTerm} setSearchResult={setSearchResult}/>
       <ProductListingLayout  searchTerm={searchTerm}  searchResult={searchResult} />
       <Footer />
    </div>
  )
}

export default ProductListing