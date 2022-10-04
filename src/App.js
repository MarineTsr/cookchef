 import Header from "./components/Header"; 
 import Main from "./components/Main"; 
 import Footer from "./components/Footer"; 

function App() {
  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
