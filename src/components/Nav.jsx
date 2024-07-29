import NavLogo from '../assets/dndampersand.png';
import React from 'react';

const Nav = ({ openLoginModal }) => {
    function openLoginModal() {
        console.log("clicked openLogin");
        document.body.classList += " login__modal--open";
      }
      
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__row">
                    <div className="nav__top">
                        <figure className="nav__logo--wrapper">
                            <a href="/" className='logo__link'>
                                <img src={NavLogo} className="nav--logo click" />
                            </a>
                        </figure>
                        <ul className="nav__link--list">
                            <li className="list__item">
                                <button className="item__link click" onClick={openLoginModal}>Log In</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav