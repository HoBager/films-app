import { memo, useEffect } from "react";
import GenresList from "../../Components/filters/genres-list";
import useResetFilters from "../../hooks/use-reset-filters";
import QusetionList from "../../Components/questions-list/question-list";
import SearchFilm from "./search-film";

export const QUSETION_NAMES: { [index: string]: string } = {
  popularity: "Популярность",
  vote: "Оценка",
};

const Search = memo(() => {
  const reset = useResetFilters();

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="search wrapper">
      <div className="search__filters wrapper">
        <div className="search__genres">
          <GenresList />
        </div>
        <QusetionList />
      </div>
      <SearchFilm />
    </div>
  );
});

export default Search;
