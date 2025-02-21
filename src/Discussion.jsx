import { useState, useContext } from "react";
import { people } from "./data.jsx";
import { PersonContext } from "./PersonContext.jsx";
import Ecrire from "./Ecrire.jsx";
import { useChat } from "./ChatProvider.jsx";

function Discussion({ person }) {
  const { selectedPerson } = useContext(PersonContext);

  const { messages, sendMessage, clearMessages, switchRoom } = useChat();

  return (
    <div className="Discussion">
      <h1>{selectedPerson.name}</h1>
      <ul>
        {selectedPerson.messages.map((sms, index) => (
          <li key={index}>{sms.text}</li>
        ))}
      </ul>
      <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.author}: {msg.content}</li>
        ))}
      </ul>
      <button onClick={() => sendMessage('User', 'Hello!')}>Send Message</button>
      <button onClick={clearMessages}>Clear Messages</button>
      <button onClick={() => switchRoom('general')}>Switch to General Room</button>
    </div>
      <Ecrire/>
    </div>
  );
}

export default Discussion;
