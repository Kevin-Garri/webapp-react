import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "http://localhost:3000/movies";
  const [film, setFilm] = useState([]);

  const fetchFilm = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((error) => {
        console.log("Errore nel fetch", error);
      });
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  const value = {
    film,
    fetchFilm,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalProvider, useGlobalContext };