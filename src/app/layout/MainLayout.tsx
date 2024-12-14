import { Outlet } from "react-router-dom";
import { Header, ModelFooter } from "../../widgets";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <Suspense fallback={<h1>Loading......</h1>}>
          <Outlet />
        </Suspense>
      </div>

      <ModelFooter />
    </div>
  );
};

export default MainLayout;
