import Funquisto from '../assets/funquisto-plain.jpg';
import Modac from '../assets/modac-plain.jpg';
import Heart from '../assets/heart-plain.jpg';
import Lyethar from '../assets/Lyethar-plain.jpg';
import Harry from '../assets/harry-pfp.jpg';
import { Link } from 'react-router-dom';
import Dice from '../assets/d20-dice-no-background.png';
import React, { useState } from 'react'

function Header() {

  const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
    }

  return (
    <header>
      <div className="head__container">
        <div className="head__row">
          <div className="header__box">
            <h1 className="header__title">
              A band of average heroes defy the odds to become...<br></br>
              <span className="savage">savages.</span>
            </h1>
            <div className="header__img--container">
              <Link to="party">
                <div className="header__smoltoon">
                  <img
                    src={Funquisto}
                    className="header__img header--funquisto"
                  />
                </div>
              </Link>
              <Link to="party">
                <div className="header__smoltoon">
                  <img src={Lyethar} className="header__img header--lyethar" />
                </div>
              </Link>
              <Link to="party">
                <div className="header__smoltoon">
                  <img src={Heart} className="header__img header--heart" />
                </div>
              </Link>
              <Link to="party">
                <div className="header__smoltoon">
                  <img src={Modac} className="header__img header--modac" />
                </div>
              </Link>
              <Link to="party">
                <div className="header__smoltoon">
                  <img src={Harry} className="header__img header--harry" />
                </div>
              </Link>
            </div>
            <div className='dice__box'>
              <h1 className="dice__box--title">Let's Roll</h1>
              <button onClick={handleClick} className="init__btn click">
                <img className="dice__img" src={Dice} alt="" />
              </button>
              <h1 className="drumroll__roll">Your initiative is:</h1>
              <div className="roll__result"><span className='savage dice'>{num}</span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
