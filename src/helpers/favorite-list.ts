import { DEFAULT_STORAGE_VALUE, FAVORITE_LIST_KEY } from "../consts/consts";
import IFilm from "../interfaces/i-film";

export function setFavoriteList(list: string[]) {
  try {
    localStorage.setItem(FAVORITE_LIST_KEY, JSON.stringify(list));
  } catch {
    console.log("favoriteList error");
  }
}

export function getFavoriteList(): string[] {
  try {
    return (
      JSON.parse(localStorage.getItem(FAVORITE_LIST_KEY) || "") ||
      DEFAULT_STORAGE_VALUE
    );
  } catch {
    return DEFAULT_STORAGE_VALUE;
  }
}
