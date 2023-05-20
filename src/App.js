import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./slices/authSlice";
// import CheckoutSuccess from "./components/CheckoutSuccess";
// import Dashboard from "./components/admin/Dashboard";
// import Users from "./components/admin/Users";
// import Orders from "./components/admin/Oders";
// import Summary from "./components/admin/Summary";
// import CreateProduct from "./components/admin/CreateProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/checkout-success" element={<CheckoutSuccess />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/admin" element={<Dashboard />}>
              <Route path="summary" element={<Summary />} /> */}
              {/* <Route path="products" element={<Products />}>
                <Route path="create-product" element={<CreateProduct />} />
              </Route> */}
              {/* <Route path="users" element={<Users />} /> */}
              {/* <Route path="orders" element={<Orders />} />  */}
             {/* </Route> */} 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;