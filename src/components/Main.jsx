import Claws from "../assets/claws-transformed.png";
import Sword from "../assets/knight-sword-transparent-image.png";
import Hammer from "../assets/modac-hammer-coloured-1.png";
import Pepperbox from "../assets/PEPPERBOX-BLUNT-SYMS-transformed.png";
import { Link } from "react-router-dom";
import React from "react";
import Bottlecap from "../ui/Bottlecap";
import Header from "../ui/Header";
import Login from "../ui/Login";
import { toonData } from "../data-toons";
import Modal from "../ui/Modal";

const Main = () => {
  function openModal() {
    console.log('clicked open modal--open')
    document.body.classList += " modal--open";
  }

  function closeModal() {
    console.log('clicked close modal')
    document.body.classList.remove("modal--open");
  }

  function closeLoginModal() {
    console.log("clicked closelogin");
    document.body.classList.remove("login__modal--open");
  }

  return (
    <main id="landing">
      <div className="landing__container">
        <div className="landing__row">
          <Login
            closeLoginModal={closeLoginModal}
          />
          <Header />
          <div className="toon__tile--container">
            <div className="toon__tile--wrapper">
              <Bottlecap
                openModal={openModal}
                icon={<img src={Claws} className="toon__img claw" />}
                alias={<h2 className="toon__moniker">The Murder Floof</h2>}
              />
              <Bottlecap
                openModal={openModal}
                icon={<img src={Sword} className="toon__img sword" />}
                alias={<h2 className="toon__moniker">The Muscial Mutilator</h2>}
              />
              <Bottlecap
                openModal={openModal}
                icon={<img src={Hammer} className="toon__img hammer" />}
                alias={<h2 className="toon__moniker">The Dungeon Dinger</h2>}
              />
              <Bottlecap
                openModal={openModal}
                icon={<img src={Pepperbox} className="toon__img pepperbox" />}
                alias={<h2 className="toon__moniker">The Bouyant Boomstick</h2>}
              />
            </div>
          </div>
          <div className="pages__link--container">
            <h2 className="pages__plug">
              <span className="savage">Stay up to date with the adventure</span>
            </h2>
            <div className="btn__box">
              <Link to="journal">
                <button className="journal__btn click">View Journal</button>
              </Link>
              <Link to="party">
                <button className="party__btn click">View Party</button>
              </Link>
            </div>
          </div>
        </div>
        {
          toonData
          .filter((data) => data.id ==1)
          .map((data) => (
            <Modal
            data={data}
            key={data.id}
            closeModal={closeModal}
            />
          ))}
      </div>
    </main>
  );
};

export default Main;
