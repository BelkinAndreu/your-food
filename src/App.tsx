import { FC } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Navbar from "./components/navbar/Navbar";

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
          </Routes>
          <footer>Footer</footer>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
