import { createContext, useState } from "react";

export const SideNavigationContext = createContext();

export const SideNavigationProvider = ({ children }) => {
  const [sideNavigationIsOpen, setNavigationIsOpen] = useState(false);

  return (
    <SideNavigationContext.Provider
      value={{ sideNavigationIsOpen, setNavigationIsOpen }}
    >
      {children}
    </SideNavigationContext.Provider>
  );
};
