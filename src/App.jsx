import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { people } from "./people.jsx";
import { getImageUrl } from "./utils.jsx";

const anna = {
  id: 1,
  name: "Anna Smith",
  pic: "https://media.istockphoto.com/id/1437816897/fr/photo/portrait-de-femme-daffaires-de-gestionnaire-ou-de-ressources-humaines-pour-la-r%C3%A9ussite.jpg?s=612x612&w=0&k=20&c=cmwpzRKoMCRYrHCgy8oqo_LnJl7Afg6vOJrCqwAXz9c=",
  last: "Comment tu vas ?",
};

const jean = {
  id: 2,
  name: "Jean Lucas",
  pic: "https://media.istockphoto.com/id/544561300/photo/portrait-of-a-successful-businessman-smiling-at-the-camera.jpg?s=612x612&w=is&k=20&c=z_5-L3QHnLxxMwo07j0ZyZ2Rj7Ue4QNJVrOCMkKUEBA=",
  last: "Ah oui je vois !",
};

function Discussion({ person }) {
  return <h1>{person.name}</h1>;
}

function DernierMessage({ person }) {
  return (
    <div
    onClick={Discussion}>
      {person.name}
      <br />
      <img src={person.pic} width="200" alt={person.name} />
      <br />
      {person.last}
    </div>
  );
}

function Ecrire() {
  return <input type="text" placeholder="Taper réponse" />;
}

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(jean);

  return (
    <>
      <div class="messages">
        <h1>Messages</h1>
        <DernierMessage person={anna} />
        <br />
        <DernierMessage person={jean} />
      </div>
      <div class="Discussion">
        <Discussion person={selectedPerson} />
        <Ecrire />
      </div>
      <p className="copyright">Made by Harini</p>
    </>
  );
}

