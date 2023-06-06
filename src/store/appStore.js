import { createContext, useState } from "react";

const defaultData = {
  error: '',
  isLoading: false,
};

export const AppStateContext = createContext(defaultData);

export function AppStateProvider({ children }) {
  const [appState, setAppState] = useState({
    error: '',
    isLoading: false,
  });

  const updateState = (newState = {}) => {
    setAppState((currentState => ({
      ...currentState,
      ...newState,
    })));
  };

  return (
    <AppStateContext.Provider value={[appState, updateState]}>
      {children}
    </AppStateContext.Provider>
  )
}
