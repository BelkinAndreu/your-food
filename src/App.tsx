import { FC } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Твоя.Еда - Доставка вкусных блюд</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/menu"} replace />} />
          <Route path="/menu" element="Menu" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
