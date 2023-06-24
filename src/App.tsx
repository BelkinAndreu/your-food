import { FC } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Navbar from "./components/sections/navbar/Navbar";
import Footer from "./components/sections/Footer";
import LoginPage from "./pages/LoginPage";

const App: FC = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Твоя.Еда - Доставка вкусных блюд</title>
      </Helmet>

      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="*" element={<Navigate to={"/menu"} replace />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
