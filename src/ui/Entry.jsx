import Session1img from "../assets/icewind-dale-fullmap.jpg"
import entryBkg from "../assets/scroll-bkg.png"

function Entry ({ entry = {} }) {
    return (
        <div className="entry__container">
            <div className="entry__text--background">
              <img src={entryBkg} className="stretch" />
              <div className="entry__text">
                <h2 className="entry--title">Session {entry.id}, {entry.date}</h2>
                <div className="location__box">
                  <div className="location__start">Start Point:{entry.startPoint}</div>
                  <div className="location__end">End Point: {entry.endPoint} </div>
                </div>
                <div className="image__wrapper">
                  <figure className="wrapper">
                    <img src={entry.url} className="journal--img" />
                  </figure>
                </div>
                <h3 className="entry--subtitle">
                {entry.title}
                </h3>
                <p className="entry--para">
                  {entry.summary}
                </p>
              </div>
            </div>
          </div>
    );
}

export default Entry;