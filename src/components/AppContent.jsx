import { createContext, useReducer } from "react";
import { initialState, reducer } from "./appReducer";


const Context = createContext();

export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);

    return <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
}

export default Context;