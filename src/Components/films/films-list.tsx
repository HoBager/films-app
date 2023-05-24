import { memo, useMemo } from "react";
import { useSelector } from "react-redux/es/exports";
import FilmCard from "./film-card";
import { FILMS_ON_PAGE } from "../../consts/consts";
import { selectPage } from "../../store/selectors";
import IFilm from "../../interfaces/i-film";
import isEqual from "lodash.isequal";

function getPage(films: IFilm[], pageNumber: number) {
  const start = (pageNumber - 1) * FILMS_ON_PAGE;
  const end = start + FILMS_ON_PAGE;
  return films.slice(start, end);
}

const FilmsList = memo(() => {
  const { filmsList, pageNumber } = useSelector(selectPage, isEqual);

  const page = useMemo(() => {
    return getPage(filmsList, pageNumber);
  }, [filmsList, pageNumber]);

  return (
    <div className="films">
      {page.map((film: IFilm) => {
        return <FilmCard key={film.title} film={film} />;
      })}
    </div>
  );
});

export default FilmsList;
