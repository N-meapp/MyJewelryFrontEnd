
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

// Search Products
export const getSearchProducts = async (value) => {
    try {
        const result = await api.get(`${BASE_URL}products/search/?q=${value}`)
        // console.log('resss',result);

        return result.data
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