import { useState, useContext } from "react";
import "./App.css";
import { people } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";
import Ecrire from "./Ecrire.jsx";
import Discussion from "./Discussion.jsx";
import { PersonContext } from "./PersonContext.jsx";

export default function Contacts() {
  const {selectedPerson, setSelectedPerson} = useContext(PersonContext);

  const listPerson = people.map((person) => (
    <li key={person.id}>
      <button onClick={() => setSelectedPerson(person)}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b>
          <p>{person.last}</p>
        </p>
      </button>
    </li>
  ));

  return (
      <div>
      <div className="contacts">
        <h1>Contacts</h1>
        {listPerson}
      </div>
      {/* <p className="copyright">Made by Harini</p> */}
        </div>
  );
}

// Utiliser un useContext pour gérer l'envoi des messages avant d'utiliser ChatProvider 