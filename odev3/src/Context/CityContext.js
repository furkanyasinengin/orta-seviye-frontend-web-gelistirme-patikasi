import { createContext, useContext, useState } from "react";
import { citys } from "./Citys";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("Bursa");

  const values = {
    city,
    setCity,
    citys,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
