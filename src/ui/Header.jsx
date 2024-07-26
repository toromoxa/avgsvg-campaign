import Funquisto from '../assets/funquisto-plain.jpg'
import Modac from '../assets/modac-plain.jpg'
import Heart from '../assets/heart-toon-img.png'
import Lyethar from '../assets/Lyethar-plain.jpg'
import { Link } from 'react-router-dom';

function Header() {
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
              <Link to='party'>
                <div className="header__smoltoon">
                  <img src={Funquisto} className="header__img header--funquisto" />
                </div>
              </Link>
              <Link to='party'>
                <div className="header__smoltoon">
                  <img src={Lyethar} className="header__img header--lyethar" />
                </div>
              </Link>
              <Link to='party'>
                <div className="header__smoltoon">
                  <img src={Heart} className="header__img header--heart" />
                </div>
              </Link>
              <Link to='party'>
                <div className="header__smoltoon">
                  <img src={Modac} className="header__img header--modac" />
                </div>
              </Link>
            </div>
            <h4 className="header__outro">being savage ain't average</h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
