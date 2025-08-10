import React, { useEffect, useState } from 'react'
import Filter from "../Filter/Filter";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SideNav = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isCategory = location.pathname.includes('/categories');


  const [filterData, setFilterData] = useState(null);

  
  const mobileFilterData = useSelector((state) => state.filter.mobileFilterData);
  const genderFilterData = useSelector((state) => state.genderfilter.genderFilterData);
console.log(genderFilterData, "gender filter da");

  useEffect(() => {
    if (!isCategory) {
           setFilterData(mobileFilterData);
    } else {
        setFilterData(genderFilterData);
    }
  }, [isCategory, mobileFilterData, genderFilterData]);



  const handleFilterResult = (result) => {
    dispatch({
      type: isCategory ? "SET_GENDER_FILTERED_DATA" : "SET_CATEGORY_FILTERED_DATA",
      payload: result,
    });
  };

  

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-40 w-80 h-screen overflow-y-auto bg-white shadow-md transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>
        <Filter item={filterData} onApplyFilter={handleFilterResult} />
      </aside>
    </>
  );
};

export default SideNav;
