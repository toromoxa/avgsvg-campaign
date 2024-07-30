import Session1img from "../assets/icewind-dale-fullmap.jpg";
import entryBkg from "../assets/scroll-bkg.png";
import Entry from "../ui/Entry";
import { journalEntries } from "../data";

const Journal = () => {
  return (
    <section id="Journal">
      <h1 className="journal__title">The Average Savage's Adventure Journal</h1>
      <div className="journal__container">
        <div className="journal__row">
          {journalEntries
            .filter((entry) => entry.id >= 1)
            .map((entry) => (
              <Entry entry={entry} key={entry.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
