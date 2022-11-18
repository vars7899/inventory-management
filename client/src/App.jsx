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

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/dashboard/home" element={<DashBoard />} />
            <Route path="/dashboard/supplier" element={<SupplierScreen />} />
            {/* 404 page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
