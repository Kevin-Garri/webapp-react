import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [film, setFilm] = useState([]);
  const [thisFilm, setThisFilm] = useState();

  const fetchFilms = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((error) => {
        console.log("Errore nel fetch dei dati", error);
      });
  };

  const fetchFilm = (movie_id) => {
    const movieApi_url = `${import.meta.env.VITE_API_URL}/${movie_id}`;

    axios
      .get(movieApi_url)
      .then((res) => {
        setThisFilm(res.data);
      })
      .catch((error) => {
        console.log("Errore nel caricamento film", error);
      });
  };
  const renderReviews = () => {
    return film.reviews.map((movie) => (
      <CardReview key={movie.id} review={movie} />
    ));
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const value = {
    film,
    fetchFilms,
    fetchFilm,
    ThisFilm,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };