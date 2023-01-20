import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Loader from "components/Layout/Loader";

// To be called only the first time to send data to restapi
// import init from "./data/init";
// init();

function App() {
  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header />
      <Suspense
        fallback={
          <div className="d-flex flex-column flex-fill">
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
