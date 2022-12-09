import { useState } from "react";
import Header from "components/Header";
import Home from "pages/Home";
import Admin from "pages/Admin";
import Footer from "components/Footer";

// To be called only the first time to send data to restapi
// import init from "./data/init";
// init();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header setPage={setPage} />
      {page === "homepage" && <Home />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;
