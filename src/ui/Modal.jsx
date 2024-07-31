function Modal({ closeModal, data={} }) {
  return (
    <div>
      <div className="modal">
        <div className="modal__half modal__about">
          <div className="character__info">
            <h2 className="character__name">{data.name}</h2>
            <h6 className="known__as">{data.alias}</h6>
            <h5 className="character__race">{data.race}</h5>
            <h3 className="character__class">{data.job}</h3>
            <p className="character__para">
              {data.taunt}
            </p>
            <button className="about--btn click" onClick={closeModal}>X</button>
          </div>
        </div>
        <div className="modal__half modal__img">
          <div className="character__container">
            <figure className="character__avatar">
              <img className='modal__character--img' src={data.img} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
