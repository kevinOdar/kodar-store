import React, { createContext, useContext, useReducer } from 'react';
import sidebar_reducer from '../reducers/sidebar_reducer';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions';
const SidebarContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebar_reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(SidebarContext);
};

export { SidebarProvider, SidebarContext, useGlobalContext };
