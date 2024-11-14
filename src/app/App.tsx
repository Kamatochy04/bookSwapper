import { Route, Routes } from "react-router-dom";
import { RegisterStapper } from "../features/user";
import { BookPage, MainPage } from "../pages";

import "./styles/global.scss";
import { MainLayout } from "./layout/MainLayout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<BookPage />} />
        </Route>

        <Route path="register" element={<RegisterStapper />} />
      </Routes>
    </div>
  );
};
