function Entry () {
    return (
        <div className="entry__container">
            <div className="entry__text--background">
              <img src={entryBkg} alt="" className="stretch" />
              <div className="entry__text">
                <h2 className="entry--title">Session 1, Date</h2>
                <h3 className="entry--subtitle">
                Arm-wrestling, music-making, flirtatious-murderers for hire!
                </h3>
                <div className="image__wrapper">
                  <figure className="wrapper">
                    <img src={Session1img} alt="" className="journal--img" />
                  </figure>
                </div>
                <p className="entry--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  nam explicabo pariatur labore architecto accusamus at nisi
                  neque! Autem, ex?
                </p>
              </div>
            </div>
          </div>
    );
}

export default Entry;