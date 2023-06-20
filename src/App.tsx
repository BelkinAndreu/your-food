import { FC } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";

const App: FC = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Твоя.Еда - Доставка вкусных блюд</title>
      </Helmet>

      <div className="container">
        <header>Navigation</header>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to={"/menu"} replace />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </BrowserRouter>
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default App;
