import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
