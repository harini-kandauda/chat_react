import "./App.css";
import Ecrire from "./Ecrire.jsx";
import Contacts from "./Contacts.jsx";
import { PersonProvider } from "./PersonContext.jsx";
import Discussion from "./Discussion.jsx";
// import Discussion from "./Discussion.jsx";

export default function App() {
  return (
    <PersonProvider>
    <div style={{ display: "flex" }}>
      <Contacts />
      <Discussion/>
    </div>
    </PersonProvider>
  );
}

// Utiliser un useContext pour gérer l'envoi des messages avant d'utiliser ChatProvider
