import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { RegisterStapper } from "../features/user";

import MainLayout from "./layout/MainLayout";

import "./styles/global.scss";
import RegModel from "../widgets/regModel";

const PersonalPage = lazy(() => import("../pages/personal/index"));
const BookPage = lazy(() => import("../pages/book/index"));
const MainPage = lazy(() => import("../pages/main/index"));
const NewBook = lazy(() => import("../pages/newBook/index"));

export const App = () => {
  return (
    <div>
      <RegModel />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<BookPage />} />
          <Route path="accaunt" element={<PersonalPage />} />
          <Route path="crete-book" element={<NewBook />} />
        </Route>

        <Route path="register" element={<RegisterStapper />} />
      </Routes>
    </div>
  );
};
