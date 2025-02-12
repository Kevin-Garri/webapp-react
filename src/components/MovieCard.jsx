import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ film }) => {
  return (
    <div className="card mb-4">
      <img src={film.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{film.title}</h5>
        <p className="card-text">{film.abstract}</p>
        <Link to={`/movies/${film.id}`} className="btn btn-Primary">
          Recensioni
        </Link>
      </div>
    </div>
  );
};



export default MovieCard;