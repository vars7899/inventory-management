import { theme } from "./styles/globalTheme.style";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen.screen";
import PageNotFound from "./screens/PageNotFound/PageNotFound.screen";
import DashBoard from "./screens/DashBoard/DashBoard.screen";
import SupplierScreen from "./screens/SupplierScreen/SupplierScreen.screen";
import LoginScreen from "./screens/LoginScreen/LoginScreen.screen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen.screen";
import PasswordResetEmail from "./screens/Authentication/PasswordResetEmail.screen";
import PasswordUpdateForm from "./screens/Authentication/PasswordUpdateForm.screen";
import NewProduct from "./screens/DashBoard/NewProduct.screen";
import Product from "./screens/DashBoard/Product.screen";
import UpdateProduct from "./screens/DashBoard/UpdateProduct.screen";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// save cookies we get from back
axios.defaults.withCredentials = true;

function App() {
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
            <Route path="/dashboard/dashboard" element={<DashBoard />} />
            {/* Product routes */}
            <Route path="/dashboard/product" element={<Product />} />
            <Route path="/dashboard/product/new" element={<NewProduct />} />
            <Route
              path="/dashboard/product/:productId"
              element={<UpdateProduct />}
            />
            {/* Supplier routes */}
            <Route path="/dashboard/supplier" element={<SupplierScreen />} />
            {/* 404 page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={5000} theme="light" />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
