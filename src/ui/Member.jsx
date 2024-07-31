import React from "react";

const Member = ({ data = {} }) => {
  return (
    <div className="member__plaque">
      <div className="member__container">
        <div className="member__row">
          <div className="member__text--half">
            <div className="member__text-container">
              <h1 className="member__name">{data.name}</h1>
              <h3 className="member__alias">"{data.alias}"</h3>
              <h2 className="member__race">Race: {data.race}</h2>
              <h2 className="member__class">Class: {data.job}</h2>
              <p className="member__blurb">
                {data.blurb}
              </p>
              <h3 className="fav__weapon">Weapon: {data.weapon}</h3>
            </div>
          </div>
          <div className="member__img--half">
            <figure className="member__img--wrapper">
              <img className="member--img" src={data.img} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
