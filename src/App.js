import Header from "components/Header";
import Home from "pages/Home";
import Footer from "components/Footer";

function App() {
  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
