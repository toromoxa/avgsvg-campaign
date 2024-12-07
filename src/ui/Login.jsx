import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Import your Firebase auth instance
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login({ closeLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill out both fields.");
      return;
    }

    setLoading(true);

    try {
      if (isSignUp) {
        // Create a new user
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        // Log in the user
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
      closeLoginModal(); // Close the modal after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

    console.log()
  };

  return (
    <div className="login__modal">
      <button className="exit--btn click" onClick={closeLoginModal}>
        X
      </button>
      <div className="login__container">
        <div className="login__row">
          <h2 className="login__title">{isSignUp ? "Sign Up" : "Login"}</h2>
          <form className="login__form" onSubmit={handleLogin}>
            <div className="form--email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form--password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error__message">{error}</p>}
            <div className="form--submit">
              <button
                type="submit"
                className="submit__btn"
                disabled={loading}
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>
          <p className="login__check">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button className="toggle--login" onClick={() => setIsSignUp(!isSignUp)}>
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
