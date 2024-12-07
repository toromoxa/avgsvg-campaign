import NavLogo from "../assets/dndampersand.png";
import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Nav = ({ openLoginModal }) => {
  const [user, setUser] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      setUser(null); // Clear user state
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__row">
          <div className="nav__top">
            <figure className="nav__logo--wrapper">
              <a href="/" className="logo__link">
                <img src={NavLogo} className="nav--logo click" />
              </a>
            </figure>
            <ul className="nav__link--list">
              <li className="list__item">
              {user ? (
                  <button className="item__link click" onClick={handleLogout}>
                    Log Out
                  </button>
                ) : (
                  <button
                    className="item__link click"
                    onClick={openLoginModal}
                  >
                    Log In
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
