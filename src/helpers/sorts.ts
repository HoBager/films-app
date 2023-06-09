import { TypeSort } from "../consts/filters-consts";
import IFilm from "../interfaces/i-film";
import { ISearchQusetions } from "../store/reducers/search";

export function sortByGeneres(films: IFilm[], genres: number[]): IFilm[] {
  return films.filter(({ genre_ids: genreIds }) => {
    const newGenres = [...new Set([...genreIds, ...genres])];
    return genreIds.length === newGenres.length;
  });
}

export function sortByDate(films: IFilm[], date: string): IFilm[] {
  return films.filter((film: IFilm) => {
    const filmDate = new Date(film.release_date).getFullYear();
    return filmDate === Number(date);
  });
}

export function sortByQuestions(
  films: IFilm[],
  filters: ISearchQusetions
): IFilm[] {
  const filtersMethod = Object.values(filters);
  const filteredFilms = filtersMethod.reduce((result, method) => {
    return method ? method(result) : result;
  }, films);
  return filteredFilms;
}
