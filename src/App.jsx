import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DefaultLayout from "./components/DefaultLayout";
import MoviePageDetails from "./components/MoviePageDetails";
import NewFilm from "./components/NewFilm";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:id" element={<MoviePageDetails />} />
            <Route path="/movies/create" element={<NewFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
