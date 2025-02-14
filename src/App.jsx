import { useState, useContext } from "react";
import "./App.css";
import { people } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";
import { ChatProvider, useChat } from "./ChatProvider.jsx";
import Ecrire from "./Ecrire.jsx";

function Discussion({ person }) {
  return <h1>{person.name}</h1>;
}

// function DernierMessage({ person }) {
//   return (
//     <div onClick={Discussion}>
//       {person.name}
//       <br />
//       <img src={person.pic} width="200" alt={person.name} />
//       <br />
//       {person.last}
//     </div>
//   );
// }

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

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
    <ChatProvider>
      <div style={{display:"flex"}}>
      <div className="messages">
        <h1>Messages</h1>
        {listPerson}
      </div>
      <div className="Discussion">
        <Discussion person={selectedPerson} />
        {selectedPerson.messages.map((sms, index) => (
          <li key={index}>{sms.text}</li>
        ))}
        <Ecrire />
      </div>
      {/* <p className="copyright">Made by Harini</p> */}
        </div>
    </ChatProvider>
  );
}

// Utiliser un useContext pour gérer l'envoi des messages avant d'utiliser ChatProvider 