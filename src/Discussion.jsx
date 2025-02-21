import { useState, useContext } from "react";
import { people } from "./data.jsx";
import { PersonContext } from "./PersonContext.jsx";
import Ecrire from "./Ecrire.jsx";

function Discussion({ person }) {
  const { selectedPerson } = useContext(PersonContext);

  return (
    <div className="Discussion">
      <h1>{selectedPerson.name}</h1>
      <ul>
        {selectedPerson.messages.map((sms, index) => (
          <li key={index}>{sms.text}</li>
        ))}
      </ul>
      <Ecrire/>
    </div>
  );
}

export default Discussion;
