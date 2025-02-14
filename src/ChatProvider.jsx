import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Represents the structure of a chat message in the application.
 *
 * @typedef {Object} ChatMessage
 * @property {string} author - The author of the message. This indicates who sent the message.
 * @property {string} text - The actual text content of the message. This is what the message says.
 * @property {Date} timestamp - The date and time when the message was sent. It helps in tracking when the conversation took place.
 */

 export const chatAPI = {
  currentRoom: "general",
  /**
   * Retrieves the messages for the current room.
   * @returns {Array} An array of messages for the current room.
   */
  getMessages() {
    const messages = localStorage.getItem(`chatMessages_${this.currentRoom}`);
    return messages ? JSON.parse(messages) : [];
  },
  /**
   * Retrieves the last message in the current room.
   * @returns {Object|null} The last message of the current room, or null if no messages are present.
   */
  getLastMessage() {
    const messages = this.getMessages();
    return messages.length > 0 ? messages[messages.length - 1] : null;
  },
  /**
   * Sends a message in the current room.
   * @param {string} author - The author of the message.
   * @param {string} message - The content of the message.
   * @returns {Array} An array of updated messages.
   */
  sendMessage(author, message) {
    const messages = this.getMessages();
    messages.push({ author, text: message, timestamp: new Date() });
    localStorage.setItem(
      `chatMessages_${this.currentRoom}`,
      JSON.stringify(messages)
    );
    return messages;
  },
  onMessageReceived(callback) {
    const handler = (event) => {
      if (event.key === `chatMessages_${this.currentRoom}`) {
        const lastMessage = this.getLastMessage();
        if (lastMessage) {
          callback(lastMessage);
        }
      }
    };
    this.messageHandler = handler;
    window.addEventListener("storage", handler);
  },
  /**
   * Clears the messages in the current room.
   */
  clearMessages() {
    localStorage.setItem(
      `chatMessages_${this.currentRoom}`,
      JSON.stringify([])
    );
  },
  /**
   * Switches the current chat room.
   * @param {string} roomName - The name of the new room to switch to.
   */
  switchRoom(roomName) {
    this.currentRoom = roomName;
  },
  /**
   * Connects to the chat service.
   * @param {function} callback - The callback function to be executed when a message is received.
   */
  connect(callback) {
    this.onMessageReceived(callback);
  },
  /**
   * Disconnects from the chat service and removes the event listener.
   */
  disconnect() {
    if (this.messageHandler) {
      window.removeEventListener("storage", this.messageHandler);
      this.messageHandler = null;
    }
  },
};

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatAPI.getMessages());

    const handleMessageReceive = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    chatAPI.connect(handleMessageReceive);
    return () => {
      chatAPI.disconnect();
    };
  }, []);

  /**
   * Sends a message to the chat.
   * @param {string} author - The author of the message.
   * @param {string} message - The message content.
   */
  const sendMessage = (author, message) => {
    chatAPI.sendMessage(author, message);
    setMessages(chatAPI.getMessages());
  };

  /**
   * Clears all messages from the chat history.
   */
  const clearMessages = () => {
    chatAPI.clearMessages();
    setMessages([]);
  };

  /**
   * Switches the chat to a different room.
   * @param {string} roomName - The name of the room to switch to.
   */
  const switchRoom = (roomName) => {
    chatAPI.switchRoom(roomName);
    setMessages(chatAPI.getMessages());
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, clearMessages, switchRoom }}
    >
      {children}
    </ChatContext.Provider>
  );
};

/**
 * Custom hook to access the chat context.
 * @returns {{ messages: Array, sendMessage: Function, clearMessages: Function, switchRoom: Function }}
 */
export const useChat = () => useContext(ChatContext);

/*
# Using the ChatProvider in a React Application

## Providing the Chat Context
Wrap your application (or the part of your application that needs access to the chat functionalities) with the `ChatProvider`:

```jsx
import React from 'react';
import { ChatProvider } from './ChatContext';
import ChatComponent from './ChatComponent';

const App = () => {
  return (
    <ChatProvider>
      <ChatComponent />
    </ChatProvider>
  );
};

export default App;
```

## Using the Chat Context
To interact with the chat functionalities, use the `useChat` hook inside a component:

```jsx
import React from 'react';
import { useChat } from './ChatContext';

const ChatComponent = () => {
  const { messages, sendMessage, clearMessages, switchRoom } = useChat();

  return (
    <div>
      <h2>Chat Room</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.author}: {msg.content}</li>
        ))}
      </ul>
      <button onClick={() => sendMessage('User', 'Hello!')}>Send Message</button>
      <button onClick={clearMessages}>Clear Messages</button>
      <button onClick={() => switchRoom('general')}>Switch to General Room</button>
    </div>
  );
};

export default ChatComponent;
```

## Available Functions

### `sendMessage(author: string, message: string)`
Sends a message to the current chat room.

### `clearMessages()`
Clears all messages from the chat history.

### `switchRoom(roomName: string)`
Switches to a different chat room by its name.

### `messages: Array`
An array containing the chat messages, each with `author` and `content` properties.
*/