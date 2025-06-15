import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Pages/Category/Categories";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Login from "./Pages/Login/Login";
import { OTPLogin } from "./Pages/Login/OTPLogin";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user.user);

  const token = localStorage.getItem("accessToken");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {token?
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/ProductListing" element={<ProductListing />} />
              <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
              <Route path="/MyAccount" element={<MyAccount />} />
            </>
            :
            <>
              <Route path="*" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/OTPLogin" element={<OTPLogin />} />
            </>
          }



        </Routes>
      </BrowserRouter>
    </>
  )
}