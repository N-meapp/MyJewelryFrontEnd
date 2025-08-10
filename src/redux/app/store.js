// src/store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

// User Reducer
const initialUserState = {
  user: null,
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload, 
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

// Admin Reducer
const initialAdminState = {
  admin: null,
};

function adminReducer(state = initialAdminState, action) {
  switch (action.type) {
    case 'SET_ADMIN':
      return {
        ...state,
        admin: action.payload, // Save admin user data
      };
    case 'ADMIN_LOGOUT':
      return {
        ...state,
        admin: null,
      };
    default:
      return state;
  }
}

const initialFilterState = {
  mobileFilterData: null,
};


function filterReducer(state = initialFilterState, action) {
  switch (action.type) {
    case 'SET_MOBILE_FILTER_DATA':
      return {
        ...state,
        mobileFilterData: action.payload,
      };
    case 'CLEAR_MOBILE_FILTER_DATA':
      return {
        ...state,
        mobileFilterData: null,
      };
    default:
      return state;
  }
}



const initialFilteredState = {
  categoryFilteredData: null,
};


function categoryFilteredReducer(state = initialFilteredState, action) {
  switch (action.type) {
    case 'SET_CATEGORY_FILTERED_DATA':
      return {
        ...state,
        categoryFilteredData: action.payload,
      };
    case 'CLEAR_CATEGORY_FILTERED_DATA':
      return {
        ...state,
        categoryFilteredData: null,
      };
    default:
      return state;
  }
}




const initialGenderFilterState = {
  genderFilterData: null,
};


function genderFilterReducer(state = initialGenderFilterState, action) {
  switch (action.type) {
    case 'SET_GENDER_FILTER_DATA':
      return {
        ...state,
        genderFilterData: action.payload,
      };
    case 'CLEAR_GENDER_FILTER_DATA':
      return {
        ...state,
        genderFilterData: null,
      };
    default:
      return state;
  }
}



const initialGenderFilteredState = {
  genderFilteredData: null,
};


function genderFilteredReducer(state = initialGenderFilteredState, action) {
  switch (action.type) {
    case 'SET_GENDER_FILTERED_DATA':
      return {
        ...state,
        genderFilteredData: action.payload,
      };
    case 'CLEAR_GENDER_FILTERED_DATA':
      return {
        ...state,
        genderFilteredData: null,
      };
    default:
      return state;
  }
}

const initialGenderSelectedId = {
  genderFilterSelectedId: null,
};


function genderSelectedIdReducer(state = initialGenderSelectedId, action) {
  switch (action.type) {
    case 'SET_GENDER_SELECT_ID':
      return {
        ...state,
        genderFilterSelectedId: action.payload,
      };
    case 'CLEAR_GENDER_SELECT_ID':
      return {
        ...state,
        genderFilterSelectedId: null,
      };
    default:
      return state;
  }
}


// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  filter: filterReducer,
  categoryfiltered:categoryFilteredReducer,
  genderfilter: genderFilterReducer,
  genderfiltered: genderFilteredReducer,
  genderSelectedId: genderSelectedIdReducer
});

// Persist Config
const persistConfig = {
  key: 'root', // key for the persisted data
  storage,     // localStorage (can also use sessionStorage or other storages)
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with the persisted reducer
const store = createStore(persistedReducer);

// Persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };
