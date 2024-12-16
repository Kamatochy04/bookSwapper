import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoginForm, RegisterStapper } from "../features/user";

import MainLayout from "./layout/MainLayout";

import "./styles/global.scss";
import RegModel from "../widgets/regModel";

const PersonalPage = lazy(() => import("../pages/personal/index"));
const BookPage = lazy(() => import("../pages/book/index"));
const MainPage = lazy(() => import("../pages/main/index"));
const NewBook = lazy(() => import("../pages/newBook/index"));
const Chats = lazy(() => import("../pages/chats/index"));
const Chat = lazy(() => import("../pages/chat/index"));
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
          <Route path="chats" element={<Chats />} />
          
        </Route>
        <Route
          path="chat/:chatId"
          element={
            <Suspense>
              <Chat />
            </Suspense>
          }
        />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterStapper />} />
      </Routes>
    </div>
  );
};
