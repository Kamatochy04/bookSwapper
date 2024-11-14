import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../widgets";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
