import React from 'react'

const Bottlecap = ( {icon, openModal, alias} ) => {
    return (
        <div className="toon__tile">
            <a href="" className="toon__link">
                <figure className="toon__bottlecap">
                {icon}
                </figure>
            </a>
            <button className="toon__modal--btn click" onClick={openModal}>
                {alias}
            </button>
        </div>
    );
}

export default Bottlecap;