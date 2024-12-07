import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Entry from "../ui/Entry";
import { journalEntries } from "../data";

const Journal = () => {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'sessions'));
      const sessionsData = [];
      querySnapshot.forEach((doc) => {
        sessionsData.push({ id: doc.id, ...doc.data() });
      });
      setSessions(sessionsData);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

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
