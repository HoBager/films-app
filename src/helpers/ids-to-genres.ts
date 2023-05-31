import { GENRES } from "../consts/filters-consts";

export default function idsToGenres(genres: number[]): string {
  let genresString = "";
  genres.forEach((id) => {
    for (let genre of GENRES) {
      if (genre.id === id) {
        genresString += `${genre.name} `;
        break;
      }
    }
  });
  return genresString.trim();
}
