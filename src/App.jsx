import "./App.css";
import Contacts from "./Contacts.jsx";
import { PersonProvider } from "./PersonContext.jsx";
import Discussion from "./Discussion.jsx";
import { ChatProvider } from "./ChatProvider.jsx";

export default function App() {
  return (
    <PersonProvider>
      <div style={{ display: "flex" }}>
        <Contacts />
        <ChatProvider>
          <Discussion />
        </ChatProvider>
      </div>
    </PersonProvider>
  );
}

// Utiliser un useContext pour gérer l'envoi des messages avant d'utiliser ChatProvider
