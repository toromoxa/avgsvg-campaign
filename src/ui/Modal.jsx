import toonData from "../data-toons";

function Modal({ icon, closeModal }) {
  return (
    <div>
      <div className="modal">
        <div className="modal__half modal__about">
          <div className="character__info">
            <h2 className="character__name">Heart</h2>
            <h6 className="known__as">"Murder Floof"</h6>
            <h5 className="character__race">Leonin</h5>
            <h3 className="character__class">Barbarian</h3>
            <p className="character__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis necessitatibus quod quasi nesciunt sunt officia iure
              consequatur! Illo praesentium doloribus officia sint delectus!
            </p>
            <button className="about--btn click" onClick={closeModal}>X</button>
          </div>
        </div>
        <div className="modal__half modal__img">
          <div className="character__container">
            <figure className="character__avatar">
              {icon}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
