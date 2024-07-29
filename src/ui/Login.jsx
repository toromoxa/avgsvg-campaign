import React, { useState } from 'react';

function Login ({ closeLoginModal }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
      };

    return (
      <div className="login__modal">
            <button className="exit--btn click" onClick={closeLoginModal}>X</button>
        <div className="login__container">
          <div className="login__row">
            <form className="login__form">
              <div className='form--email'>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form--password'>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='form--submit'>
                <button type='submit' className="submit__btn" onClick={handleSubmit}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;