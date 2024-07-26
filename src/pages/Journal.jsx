import Session1img from "../assets/icewind-dale-fullmap.jpg"
import Session2img from "../assets/tavern-socialites.jpg"
import entryBkg from "../assets/scroll-bkg.png"

const Journal = () => {
  return (
    <section id="Journal">
      <h1 className="journal__title">The Average Savage's Adventure Journal</h1>
      <div className="container">
        <div className="row">
          <div className="entry__container">
            <div className="entry__text--background">
              <img src={entryBkg} alt="" className="stretch" />
              <div className="entry__text">
                <h2 className="entry--title">Session 1, Date</h2>
                <h3 className="entry--subtitle">
                Arriving in Icewind Dale, the community of Ten-Towns
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
          <div className="entry__container">
            <div className="entry__text--background">
              <img src={entryBkg} alt="" className="stretch" />
              <div className="entry__text">
                <h2 className="entry--title">Session 2, Date</h2>
                <h3 className="entry--subtitle">
                  The Gang Commits Premeditated murder...for money!
                </h3>
                <div className="image__wrapper">
                  <figure className="wrapper">
                    <img src={Session2img} alt="" className="journal--img" />
                  </figure>
                <p className="entry--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  nam explicabo pariatur labore architecto accusamus at nisi
                  neque! Autem, ex?
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journal;
