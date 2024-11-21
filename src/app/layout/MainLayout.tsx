import { Outlet } from "react-router-dom";
import { Footer, Header, ModelFooter } from "../../widgets";
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

      <Footer />
    </div>
  );
};

export default MainLayout;
