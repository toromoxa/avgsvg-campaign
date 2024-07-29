import React from "react";
import { toonData } from "../data-toons.js";
import Member from "../ui/Member.jsx";

const Party = () => {
  console.log(toonData)
  return (
    <div className="party__landing">
      <h1 className="party__title">The Gang</h1>
      <section id="Funquisto">
        {
            toonData
            .filter((data) => data.id ==4)
            .map((data) => (
                <Member data={data} key={data.id}/>
        ))}
      </section>
      <section id="Lyethar">
      {
            toonData
            .filter((data) => data.id ==2)
            .map((data) => (
                <Member data={data} key={data.id}/>
        ))}
      </section>
      <section id="Heart">
      {
            toonData
            .filter((data) => data.id ==1)
            .map((data) => (
                <Member data={data} key={data.id}/>
        ))}
      </section>
      <section id="Modac">
      {
            toonData
            .filter((data) => data.id ==3)
            .map((data) => (
                <Member data={data} key={data.id}/>
        ))}
      </section>
    </div>
  );
};

export default Party;
