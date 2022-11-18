import { theme } from "./styles/globalTheme.style";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen.screen";
import PageNotFound from "./screens/PageNotFound/PageNotFound.screen";
import DashBoard from "./screens/DashBoard/DashBoard.screen";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard" element={<DashBoard />} />
            {/* 404 page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
