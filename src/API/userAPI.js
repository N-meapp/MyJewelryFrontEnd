
import axios from 'axios';
import api from './axiosInstence';
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Category Tab 
export const fetchGenderData = async (setFetchGenderData) => {
    try {
        const result = await api.get(`${BASE_URL}genders/`);
        setFetchGenderData(result.data);
    } catch (error) {
        console.log(error);
    }
}

// filtered products by gender - category page
export const fetchProductsDataByGender = async (id, setFetchProductsData) => {
    try {
        const result = await api.get(`${BASE_URL}products/by-gender/?gender=${id}`);
        // console.log('fetchproducts',result.data);

        setFetchProductsData(result.data);

    } catch (error) {
        console.log(error);

    }
}

// Related Products
export const fetchRelatedProductsData = async (setFetchRelatedProductsData) => {
    try {
        const result = await api.get(`${BASE_URL}products/recommend/`)
        setFetchRelatedProductsData(result.data)
    } catch (error) {
        console.log(error);
    }
}



// filtered products by category - product listing page
export const fetchProductsDataByCategory = async (id, setFetchProductsData) => {
    try {
        const result = await api.get(`${BASE_URL}categories/seven/${id}`);
        setFetchProductsData(result.data);
    } catch (error) {
        console.log(error);

    }
}

// contact data feching
export const fetchContactData = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}contact/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
};


// Home Explore Our Finest Creations
export const fetchHomeCategory = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}categories/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
};

// New Arrivals products
export const newArrivalsFetching = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}products/recent-with-fallback/`);
        setFetchedData(result.data.products);
    } catch (error) {
        console.log(error);
    }
};

// Classic collections
export const fetchingClassicCollections = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}products/classic/`);
        setFetchedData(result.data.classic_products);
    } catch (error) {
        console.log(error);
    }
};

// Main Headers
export const fetchHeaderData = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}headers/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
}

export const fetchNavCategory = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}navbar-categories/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
}

export const fetchNavMegaData = async (setFetchedData) => {
    try {
        const result = await api.get(`${BASE_URL}navbar-categories/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
}

// product details 
export const fetchProductsDetails = async (id, setFectchProductsDetailsData) => {
    try {
        const result = await api.get(`${BASE_URL}products/${id}`)
        setFectchProductsDetailsData(result.data)
    } catch (error) {
        console.log(error);
    }
}

export const postLoginNumber = async ({ phoneNumber }) => {
    try {
        const formData = new FormData();
        formData.append('phone', phoneNumber);

        const result = await api.post(`${BASE_URL}send-otp/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // setFetchedData(result); // optional — if you're storing it in state
        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};

export const fetchMegaDropdownData = async (setFectchProductsDetailsData) => {
    try {
        const result = await api.get(`${BASE_URL}MegaNavbar/`)
        setFectchProductsDetailsData(result.data)
    } catch (error) {
        console.log(error);
    }
}

export const fetchSearchData = async (setFectchProductsDetailsData) => {
    try {
        const result = await api.get(`${BASE_URL}combined-suggestions/`)
        setFectchProductsDetailsData(result.data)
    } catch (error) {
        console.log(error);
    }
}

// Otp verification 

export const otpVerification = async ({ number, OtpValue }) => {
    try {
        const formData = new FormData();
        formData.append('phone', number);
        formData.append('otp', OtpValue);

        const result = await axios.post(`${BASE_URL}verify-otp/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(result, "ttttttttttttttttttttt");

        if (result.data.user_id && result.data.username && result.data.access && result.data.refresh) {
            localStorage.setItem("accessToken", result.data.access);
            localStorage.setItem("refreshToken", result.data.refresh);

            console.log("Login successful!");
            return result.data; // Return user data
        } else {
            return false; // Return false if login data is incorrect
        }
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};

// wishlist data fetch
export const FetchWishlistData = async (setFetcheData) => {
    try {
        const result = await api.get(`${BASE_URL}wishlist/`)
        setFetcheData(result.data)
    } catch (error) {
        console.log(error);
    }
}



// Search Products
export const getSearchProducts = async (value) => {
    try {
        const result = await api.get(`${BASE_URL}combined-suggestions/?query=${value}`)
        console.log('vtvttvtvtvt', result.data);
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const addToWishlist = async ({ id }) => {
    try {
        const formData = new FormData();
        formData.append('product_id', id);
        const result = await api.post(`${BASE_URL}wishlist/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // setFetchedData(result); // optional — if you're storing it in state

        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};

export const removeToWishlist = async ({ id }) => {
    try {
        const formData = new FormData();
        formData.append('product_id', id);
        const result = await api.delete(`${BASE_URL}wishlist/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // setFetchedData(result); // optional — if you're storing it in state

        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};


export const FetchProfileData = async (setFetcheData) => {
    try {
        const result = await api.get(`${BASE_URL}profile/`)
        setFetcheData(result.data)
    } catch (error) {
        console.log(error);
    }
}


export const PostProfileImage = async ({ selectedFile }) => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await api.put(`${BASE_URL}profile/image/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    console.log("Image uploaded successfully", response.data);
    return response.data; // Optional: return response if needed
};



export const editProfileData = async (formData) => {
  try {
    const response = await api.put(`${BASE_URL}profile/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const sentEnquery = async ({ id }) => {
    try {
        const formData = new FormData();
        formData.append('quantity', id);
        const result = await api.post(`${BASE_URL}enquiry/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};

export const handleGoogleLogin = async ({tokenResponse}) =>{
    try {
        const res = await api.post(`${BASE_URL}dj-rest-auth/google/`,  {
            access_token: tokenResponse.access_token,
        });

        if(res.data.message && res.data.access && res.data.refresh){
        localStorage.setItem('accessToken', res.data.access);
        localStorage.setItem('refreshToken', res.data.refresh);
        return res.data;

        }else{
            return false
        }
        
    } catch (error) {
        console.log(error, "Login filed");
        
    }
}


export const fetchFilterData = async ({ id }) => {
  try {
    const result = await api.get(`${BASE_URL}filter-options/${id}/`);
    return result.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error);
  }
};



export const PostFilterData = async ({filterState}) => {
    try {
        const formData = new FormData();
        formData.append('subcategory', filterState.category);
        formData.append('price', JSON.stringify(filterState.price));
        formData.append('materials', filterState.materials);
        formData.append('gemstones', filterState.gemstones);
        formData.append('colors', filterState.colors);
        const id = filterState.CategoryId;
        console.log(filterState, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        
        const result = await api.post(`${BASE_URL}categories/seven/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};


export const ProductSharing = async ({ id }) => {
  try {
    const result = await api.get(`${BASE_URL}share/${id}/`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const clearFilterData = async ({filterState}) => {
  try {
     const formData = new FormData();
     formData.append('clear', true);
      const id = filterState.CategoryId;
    const result = await api.post(`${BASE_URL}categories/seven/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};




// export const fetchGenderFilter = async ({ id }) => {
//   try {
//     const result = await api.get(`${BASE_URL}filter-options/${id}/`);
//     return result.data; // Axios automatically parses JSON
//   } catch (error) {
//     console.log(error);
//   }
// };