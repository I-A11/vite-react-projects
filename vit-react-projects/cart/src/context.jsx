import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
