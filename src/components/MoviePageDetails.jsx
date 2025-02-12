import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import CardReview from "./CardReview";
import FormReview from "./FormReview";


const MoviePageDetails = () => {
  const { id } = useParams();
  const { thisMovie, fetchFilm } = useGlobalContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchFilm(id);
  }, [id]);

  if (!thisMovie) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>{thisMovie.title}</h1>
      <div className="container">
        <img
          src={thisMovie.image}
          alt={thisMovie.title}
          className="img-fluid imgcont"
        />
        <h4 className="my-3">{thisMovie.abstract}</h4>
      </div>
      <h3>Recensioni:</h3>
      {thisMovie.reviews && thisMovie.reviews.length > 0 ? (
        thisMovie.reviews.map((review) => (
          <CardReview review={review} key={review.id} />
        ))
      ) : (
        <p>Non ci sono recensioni riguardo questo film</p>
      )}
      <div>
        <FormReview movie_id={thisMovie?.id} />
      </div>
      <Link to={"/"} className="btn btn-warning mt-5">
        Riportami alla home
      </Link>
    </div>
  );
};

export default MoviePageDetails;