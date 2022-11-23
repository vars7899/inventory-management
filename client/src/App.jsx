import { useEffect } from "react";
import axios from "axios";
import HomeScreen from "./screens/Landing/HomeScreen.screen";
import PageNotFound from "./screens/Landing/PageNotFound.screen";
import DashBoard from "./screens/DashBoard/DashBoard.screen";
import SupplierScreen from "./screens/DashBoard/SupplierScreen.screen";
import RegisterScreen from "./screens/Authentication/RegisterScreen.screen";
import PasswordResetEmail from "./screens/Authentication/PasswordResetEmail.screen";
import PasswordUpdateForm from "./screens/Authentication/PasswordUpdateForm.screen";
import NewProduct from "./screens/DashBoard/NewProduct.screen";
import Product from "./screens/DashBoard/Product.screen";
import UpdateProduct from "./screens/DashBoard/UpdateProduct.screen";
import { theme } from "./styles/globalTheme.style";
import { ThemeProvider } from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userLoginStatus } from "./redux/feature/authSlice";
import CustomLoader from "./components/CustomLoader/CustomLoader.component";
import { AnimatePresence } from "framer-motion";
import LoginScreen from "./screens/Authentication/LoginScreen.screen";
import "react-toastify/dist/ReactToastify.css";
import UpdateSupplier from "./screens/DashBoard/UpdateSupplier.screen";
import Document from "./screens/DashBoard/Document.screen";

// save cookies we get from back
axios.defaults.withCredentials = true;

function App() {
  const { isError, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginStatus());
    if (isError) {
      toast.error(message);
    }
  }, [dispatch, isError]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/reset" element={<PasswordResetEmail />} />
            <Route
              path="/reset-password/:resetToken"
              element={<PasswordUpdateForm />}
            />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/dashboard/home" element={<DashBoard />} />
            {/* Product routes */}
            <Route path="/dashboard/product" element={<Product />} />
            <Route path="/dashboard/product/new" element={<NewProduct />} />
            <Route
              path="/dashboard/product/:productId"
              element={<UpdateProduct />}
            />
            {/* Supplier routes */}
            <Route path="/dashboard/supplier" element={<SupplierScreen />} />
            <Route
              path="/dashboard/supplier/:supplierId"
              element={<UpdateSupplier />}
            />
            {/* document routes */}
            <Route path="/dashboard/documents" element={<Document />} />
            {/* 404 page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <AnimatePresence>{isLoading && <CustomLoader />}</AnimatePresence>
          <ToastContainer position="top-right" autoClose={5000} theme="light" />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
