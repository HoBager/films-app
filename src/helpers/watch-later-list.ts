import { DEFAULT_STORAGE_VALUE, WATCH_LATER_KEY } from "../consts/consts";

export function setWatchLaterList(list: string[]) {
  try {
    localStorage.setItem(WATCH_LATER_KEY, JSON.stringify(list));
  } catch {
    console.log("favoriteList error");
  }
}

export function getWatchLaterList(): string[] {
  try {
    return (
      JSON.parse(localStorage.getItem(WATCH_LATER_KEY) || "") ||
      DEFAULT_STORAGE_VALUE
    );
  } catch {
    return DEFAULT_STORAGE_VALUE;
  }
}
