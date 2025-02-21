import { createContext, useState } from "react";
import { people } from "./data";

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <PersonContext.Provider value={{ selectedPerson, setSelectedPerson }}>
      {children}
    </PersonContext.Provider>
  );
};
