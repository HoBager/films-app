import { LoaderFunctionArgs } from "react-router-dom";
import { filmsBase } from "../../consts/films-data";

function filmLoader({ params }: LoaderFunctionArgs) {
  const filmId = Number(params.filmId);
  return filmsBase.reduce((result, film) => {
    return film.id === filmId ? film : result;
  });
}

export default filmLoader;
