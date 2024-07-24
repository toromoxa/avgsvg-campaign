import Claws from "../assets/claws-transformed.png";
import Sword from "../assets/knight-sword-transparent-image.png";
import Hammer from "../assets/modac-hammer-coloured-1.png";
import Pepperbox from "../assets/PEPPERBOX-BLUNT-SYMS-transformed.png";
import Heart from "../assets/heart-toon-img.png"

const Main = () => {
    function openModal() {
        document.body.classList += " modal--open"
    }

    function closeModal() {
        document.body.classList.remove("modal--open")
    }

  return (
    <main id="landing">
      <div className="landing__container">
        <div className="landing__row">
          <h1 className="main__title">
            Four average heroes defy the odds to become...<br></br>
            <span className="savage">savages.</span>
          </h1>
          <div className="toon__tile--container">
            <div className="toon__tile--wrapper">
              <div className="toon__tile">
                <a href="" className="toon__link">
                  <figure className="toon__bottlecap">
                    <img src={Claws} alt="claw" className="toon__img claw" />
                  </figure>
                </a>
                <button className="toon__modal--btn click" onClick={openModal}>
                    <h2 className="toon__moniker">The Murder Floof</h2>
                </button>
              </div>
              <div className="toon__tile">
                <a href="" className="toon__link">
                  <figure className="toon__bottlecap">
                    <img src={Sword} alt="sword" className="toon__img sword" />
                  </figure>
                </a>
                <button className="toon__modal--btn click" onClick={openModal}>
                    <h2 className="toon__moniker">The Muscial Mutilator</h2>
                </button>
              </div>
              <div className="toon__tile">
                <a href="" className="toon__link">
                  <figure className="toon__bottlecap">
                    <img
                      src={Hammer}
                      alt="hammer"
                      className="toon__img hammer"
                    />
                  </figure>
                </a>
                <button className="toon__modal--btn click" onClick={openModal}>
                    <h2 className="toon__moniker">The Dungeon Dinger</h2>
                </button>
              </div>
              <div className="toon__tile">
                <a href="" className="toon__link">
                  <figure className="toon__bottlecap">
                    <img
                      src={Pepperbox}
                      alt="pepperbox"
                      className="toon__img pepperbox"
                    />
                  </figure>
                </a>
                <button className="toon__modal--btn click" onClick={openModal}>
                    <h2 className="toon__moniker">The Bouyant Boomstick</h2>
                </button>
              </div>
            </div>
          </div>
          <div className="journal__link--container">
            <h2 className="journal__plug">Stay up to date with the <span className="savage">adventure</span></h2>
            <a href="#Journal">
                <button className="journal__btn click">View Journal</button>
            </a>
          </div>
        </div>
        <div className="modal">
          <div className="modal__half modal__about">
            <div className="character__info">
              <h2 className="character__name">Heart</h2>
              <h6 className="known__as">"Murder Floof"</h6>
              <h5 className="character__race">Leonin</h5>
              <h3 className="character__class">Barbarian</h3>
              <p className="character__para">
              From a land far, far away a fearsome barbarian warrior seeks his soul and his salvation. What he lacks in worldly knowledge he more than makes up for with unflinching brutality, and the persistence of an indomitable will.
              </p>
              <button className="about--btn click" onClick={closeModal}>X</button>
            </div>
          </div>
          <div className="modal__half modal__img">
            <div className="character__container">
              <figure className="character__avatar">
                <img src={Heart} alt="" className="character__img" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
