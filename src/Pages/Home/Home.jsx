import React, { useState } from 'react'

import Navbar from '../../Layout/Navbar/Navbar';
import MainHeader from '../../Layout/MainHeader/MainHeader';
import HomeExplore from '../../Layout/HomeExplore/HomeExplore';
import HomeFeuture from '../../Layout/HomeFeuture/HomeFeuture';
import HomeNewArrivals from '../../Layout/HomeNewArrivals/HomeNewArrivals';
import HomeCategory from '../../Layout/HomeCategory/HomeCategory';
import HomeClassicCollection from '../../Layout/HomeClassicCollection/HomeClassicCollection';
import HomeEnquire from '../../Layout/HomeEnquire/HomeEnquire';
import Footer from '../../Layout/Footer/Footer';
import TopCategories from '../../Layout/HomeExplore/TopCategories';
import MainMobileNav from '../../Layout/Navbar/MainMobileNav';
import ChatBoat from '../../Components/ChatBot/ChatBoat';



const Home = () => {
  const [searchTerm,setSearchTerm]=useState('')
    const [searchResult,setSearchResult]=useState([])


    console.log(searchTerm, "Search taermmmmm");
    console.log(searchResult, "Search Result");
    


    
  return (
    <>
      <Navbar mobailView={<MainMobileNav searchTerm={searchTerm}   setSearchTerm={setSearchTerm} searchResult={searchResult} setSearchResult={setSearchResult} />} searchResult={searchResult} searchTerm={searchTerm}   setSearchTerm={setSearchTerm} setSearchResult={setSearchResult}/>
      <MainHeader />
      <HomeExplore />
      <TopCategories/>
      <HomeFeuture />
      <HomeNewArrivals />
      <HomeCategory />
      <HomeClassicCollection />
       <ChatBoat />
      <HomeEnquire />
      <Footer />
    </>
  )
}

export default Home;