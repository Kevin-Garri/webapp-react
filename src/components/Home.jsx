import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";

const Home = () => {
  const { film } = useGlobalContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Lista dei film:</p>
      <div className="row">
        {Array.isArray(film) && film.length > 0 ? (
          film.map((film) => (
            <div className="col-md-4" key={film.id}>
              <MovieCard movie={film} />
            </div>
          ))
        ) : (
          <p>No film available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
