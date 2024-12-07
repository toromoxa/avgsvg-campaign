import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Journal from "./pages/Journal";
import Main from "./components/Main";
import Party from "./pages/Party";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./ui/Login";

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  function openLoginModal() {
    document.body.classList += " login__modal--open";
    setLoginModalOpen(true);
  }

  function closeLoginModal() {
    document.body.classList.remove("login__modal--open");
    setLoginModalOpen(false);
  }

  return (
    <Router>
      <Nav openLoginModal={openLoginModal} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              openLoginModal={openLoginModal}
              closeLoginModal={closeLoginModal}
            />
          }
        />
        <Route path="party" element={<Party />} />
        <Route path="journal" element={<Journal />} />
      </Routes>
      <Footer />
      {isLoginModalOpen && <Login closeLoginModal={closeLoginModal} />}
    </Router>
  );
}

export default App;
