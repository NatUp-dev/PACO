import React, { createContext, useState, ReactNode } from "react";

export type NavigationContextType = {
  section: string;
  setCurrentSection: (section: string) => void;
  subSection: string;
  setCurrentSubSection: (subSection: string) => void;
  collecteType?: string;
  setCurrentCollecteType?: (type: string) => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<string>("suivi-de-collectes");
  const [subSection, setSubSection] = useState<string>("synthese");
  const [collecteType, setCollecteType] = useState<string>("grains");

  const setCurrentSection = (section: string) => {
    setSection(section);
  };

  const setCurrentSubSection = (subSection: string) => {
    setSubSection(subSection);
  };

  const setCurrentCollecteType = (collecteType: string) => {
    setCollecteType(collecteType);
  };

  return (
    <NavigationContext.Provider
      value={{
        section,
        setCurrentSection,
        subSection,
        setCurrentSubSection,
        collecteType,
        setCurrentCollecteType,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
