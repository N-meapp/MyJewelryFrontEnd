import React, { useState, useEffect, useRef } from "react";
import './filter.css';
import { clearFilterData, PostFilterData } from "../../API/userAPI";

const Filter = ({ item, onApplyFilter }) => {
  const colorsCode = [
    { name: 'Black', code: '#000000' },
    { name: 'White', code: '#f3ebea' },
    { name: 'Red', code: '#c62828' },
    { name: 'Blue', code: '#1a144f' },
  ];

  const priceGap = 5000;  
  const maxRange = 1000000;
  const progressRef = useRef();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000);
  const [filter, setFilter] = useState(true);

  const [filterState, setFilterState] = useState({
    CategoryId: '',
    category: [],
    price: { min: 0, max: 1000000 },
    materials: [],
    gemstones: [],
    colors: [],
  });

  useEffect(() => {
    if (item?.category?.id) {
      setFilterState((prev) => ({
        ...prev,
        CategoryId: item.category.id,
      }));
    }
  }, [item]);

  console.log(item, "itemmssss");


  // console.log(filterState, "tttttttt");


  useEffect(() => {
    if (item?.price_range) {
      const min = Math.floor(item.price_range.min);
      const max = Math.ceil(item.price_range.max);
      setMinValue(min);
      setMaxValue(max);
      setFilterState((prev) => ({
        ...prev,
        price: { min, max }
      }));
    }
  }, [item]);

  const handleRangeChange = (e, type) => {
    const value = parseFloat(e.target.value);
    if (type === "min") {
      if (value >= 0 && value <= maxValue - priceGap) {
        setMinValue(value);
        setFilterState((prev) => ({ ...prev, price: { ...prev.price, min: value } }));
      }
    } else {
      if (value <= maxRange && value >= minValue + priceGap) {
        setMaxValue(value);
        setFilterState((prev) => ({ ...prev, price: { ...prev.price, max: value } }));
      }
    }
  };

  const handleMinChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= maxValue - priceGap) {
      setMinValue(value);
      setFilterState((prev) => ({ ...prev, price: { ...prev.price, min: value } }));
    }
  };

  const handleMaxChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value <= maxRange && value >= minValue + priceGap) {
      setMaxValue(value);
      setFilterState((prev) => ({ ...prev, price: { ...prev.price, max: value } }));
    }
  };

  const handleMaterialChange = (name) => {
    setFilterState((prev) => {
      const isSelected = prev.materials.includes(name);
      const materials = isSelected
        ? prev.materials.filter((mat) => mat !== name)
        : [...prev.materials, name];
      return { ...prev, materials };
    });
  };

  const handleGemstoneChange = (name) => {
    setFilterState((prev) => {
      const isSelected = prev.gemstones.includes(name);
      const gemstones = isSelected
        ? prev.gemstones.filter((g) => g !== name)
        : [...prev.gemstones, name];
      return { ...prev, gemstones };
    });
  };

  const handleColorChange = (name) => {
    setFilterState((prev) => {
      const isSelected = prev.colors.includes(name);
      const colors = isSelected
        ? prev.colors.filter((c) => c !== name)
        : [...prev.colors, name];
      return { ...prev, colors };
    });
  };

  const handleCategoryname = (name) => {
    setFilterState((prev) => {
      const isSelected = prev.category.includes(name);
      const category = isSelected
        ? prev.category.filter((c) => c !== name)
        : [...prev.category, name];
      return { ...prev, category };
    });
  };

  const handleApply = async () => {
    console.log("Selected Filters:", filterState);

    const result = await PostFilterData({ filterState, })
    onApplyFilter(result)
    console.log(result, "resultssssssssss");

  };

  useEffect(() => {
    const minPercent = (minValue / maxRange) * 100;
    const maxPercent = (maxValue / maxRange) * 100;
    if (progressRef.current) {
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${100 - maxPercent}%`;
    }
  }, [minValue, maxValue]);

  const handleClearFilter = async () => {
    setFilterState({ gemstones: [], colors: [], category: [] });
     const result = await clearFilterData({filterState})
  
     onApplyFilter(result)
  }

  return (
    <div>
      <div className={`col-span-12 md:col-span-3 px-4 pt-1 border-[#e0dbdb] transform transition-all duration-500 ease-in-out ${filter ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <div>
          {/* Categories */}
          <div className="bg-[#f4f4f4] w-full p-3 flex justify-center items-center">
            <p className="text-[#7d6a4f] text-[19px] font-[500] poppins">SHOP BY CATEGORIES</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 space-y-1">
            {item?.subcategories?.map(sub => (
              <p key={sub.id}
                onClick={() => handleCategoryname(sub.sub_name)}
                className={`${filterState.category.includes(sub.sub_name)
                  ? 'text-[#cd9348]'
                  : 'text-[#85602e]'
                  } text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]`}>
                {sub.sub_name}
              </p>
            ))}
          </div>

          {/* Price Filter */}
          <div className="bg-[#f4f4f4] py-3 px-11 flex justify-between items-center mt-8">
            <p className="text-[#563a14] text-[15px] font-[500] poppins">PRICE</p>
            <a className="text-[#85602e]" href="#">Any Price</a>
          </div>
          <div className="w-full max-w-xl mx-auto p-6">
            <div className="relative mb-12">
              <div className="absolute bg-[#7B5725] text-white font-semibold text-sm px-4 py-1 rounded-md left-0 transform -translate-x-1/2" style={{ left: `${(minValue / maxRange) * 100}%` }}>
                {minValue}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7B5725] rotate-45 bottom-[-6px]" />
              </div>
              <div className="absolute bg-[#7B5725] text-white font-semibold text-sm px-4 py-1 rounded-md left-0 transform -translate-x-1/2" style={{ left: `${(maxValue / maxRange) * 100}%` }}>
                {maxValue}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7B5725] rotate-45 bottom-[-6px]" />
              </div>
            </div>
            <div className="relative h-[4px] bg-[#dddddd] rounded">
              <div ref={progressRef} className="absolute h-full bg-[#7B5725] rounded z-10"></div>
              <input type="range" min="0" max={maxRange} value={minValue} onChange={(e) => handleRangeChange(e, "min")} className="range-thumb w-full absolute top-[-6px] appearance-none z-30 bg-transparent" />
              <input type="range" min="0" max={maxRange} value={maxValue} onChange={(e) => handleRangeChange(e, "max")} className="range-thumb w-full absolute top-[-6px] appearance-none z-20 bg-transparent" />
            </div>
            <div className="flex items-center justify-center gap-2 mt-10">
              <input type="number" value={minValue} onChange={handleMinChange} className="border border-[#7B5725] text-[14px] w-24 px-4 py-2 text-center font-semibold text-[#7B5725]" />
              <span className="text-[#7B5725] text-xl">–</span>
              <input type="number" value={maxValue} onChange={handleMaxChange} className="border border-[#7B5725] w-24 text-[14px] px-4 py-2 text-center font-semibold text-[#7B5725]" />
            </div>
          </div>

          {/* Brand */}
          {item?.brand && (
            <div>
              <div className="bg-[#f4f4f4] py-3 px-11 flex justify-between items-center mt-8">
                <p className="text-[#563a14] text-[15px] font-[500] poppins">BRAND</p>
              </div>
              <p className="text-[#534634] text-[15px] px-10 mt-5">{item.brand}</p>
            </div>
          )}

          {/* Materials */}
          {item?.materials?.length > 0 && (
            <div>
              <div className="bg-[#f4f4f4] py-3 px-11 flex justify-between items-center mt-8">
                <p className="text-[#563a14] text-[15px] font-[500] poppins">MATERIAL</p>
              </div>
              <div className="font-sans text-[#5c3b00] text-base pl-10 pt-6">
                {item.materials.map((mat) => (
                  <label key={mat.id} className="flex items-center mb-2 cursor-pointer">
                    <input type="checkbox" onChange={() => handleMaterialChange(mat?.name)} checked={filterState.materials?.includes(mat?.name)} className="w-4 h-4 mr-2 border border-[#d7b18f] appearance-none checked:bg-[#d7b18f] checked:border-[#d7b18f] relative after:content-['✓'] after:absolute after:top-[1px] after:left-[3px] after:text-white after:text-sm after:leading-none after:font-bold checked:after:block after:hidden" />
                    {mat?.name}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Gemstones */}
          {item?.gemstones?.length > 0 && (
            <div>
              <div className="bg-[#f4f4f4] py-3 px-11 flex justify-between items-center mt-8">
                <p className="text-[#563a14] text-[15px] font-[500] poppins">STONES</p>
              </div>
              <div className="w-[100vh] flex flex-wrap pl-4 mt-5">
                {item.gemstones.map((gem) => (
                  <div key={gem.id} onClick={() => handleGemstoneChange(gem.name)} className={`px-4 py-[1px] mr-2 mb-2 border ${filterState.gemstones.includes(gem.name) ? "border-[#7B5725] bg-[#f5eee4]" : "border-[#d2b48c]"} font-[600] cursor-pointer`}>
                    <p className="text-[#563a14] text-[15px]">{gem.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          <div className="mb-[50px]">
            <div className="bg-[#f4f4f4] py-3 px-11 flex justify-between items-center mt-8">
              <p className="text-[#563a14] text-[15px] font-[500] poppins">COLORS</p>
            </div>
            <div className="font-sans text-base text-black space-y-2 pl-6 pt-5">
              {item?.colors.map((color) => (
                <label key={color.color} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => handleColorChange(color.color)}
                    checked={filterState.colors.includes(color.color)}
                    className="w-4 h-4 mr-2 border border-[#d7b18f] appearance-none checked:bg-[#d7b18f] checked:border-[#d7b18f] relative after:content-['✓'] after:absolute after:top-[1px] after:left-[3px]  after:text-white after:text-sm after:leading-none after:font-bold checked:after:block after:hidden"
                  />
                  <span className="w-4 h-4 mr-2 inline-block" style={{ backgroundColor: color.code }} />
                  <span className="text-[15px] font-medium flex ">{color.color}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Apply Button */}
          <div className="flex justify-center mb-10 gap-4">
            <button onClick={handleClearFilter} className="bg-[#ececec] text-[#8f8f8f] hover:text-[#ffff] px-6 py-2 rounded-md font-semibold hover:bg-[#d2d2d2] transition-all">Clear</button>
            <button onClick={handleApply} className="bg-[#7B5725] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#6a4e20] transition-all">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
