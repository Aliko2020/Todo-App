import { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "./appReducer";

const Context = createContext();

export const AppProvider = ({ children }) => {
 
  const persistedState = JSON.parse(localStorage.getItem("appState")) || initialState;
  const [state, dispatch] = useReducer(reducer, persistedState);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
