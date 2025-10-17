import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <main className="site-main">
        <div className="background-shapes"></div>

        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/terms" element={<TermsOfService />} /> */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
