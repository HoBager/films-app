import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  selectSearchPageFilms,
  selectSearchQuestions,
} from "../../store/selectors";
import { useSelector } from "react-redux";
import { SEARCH_QUESTIONS } from "../../consts/filters-consts";
import { Link } from "react-router-dom";
import IFilm from "../../interfaces/i-film";

const DEFAULT_INDEX_VALUE = 0;

const selectFilm = (films: IFilm[]) => {
  const filmsListLength = films.length;
  let currentIndex = 1;
  return () => {
    if (!filmsListLength || currentIndex > filmsListLength - 1) {
      return null;
    }
    const currentFilm = films[currentIndex];

    currentIndex++;
    return currentFilm;
  };
};

const SearchFilm = () => {
  const searchQuestions = useSelector(selectSearchQuestions);
  const films = useSelector(selectSearchPageFilms);
  const [currentFilm, setCurrentFilm] = useState<IFilm | null>(
    films[DEFAULT_INDEX_VALUE]
  );
  const isAnsweredQuestions =
    Object.keys(searchQuestions).length < Object.keys(SEARCH_QUESTIONS).length;
  const nextFilm = useCallback(selectFilm(films), [films]);
  const unsuitHandler = () => {
    setCurrentFilm(nextFilm());
  };

  useEffect(() => {
    setCurrentFilm(films[DEFAULT_INDEX_VALUE]);
  }, [films]);
  if (isAnsweredQuestions) {
    return <h3>{`ответьте на вопросы`}</h3>;
  }

  if (!currentFilm) {
    return (
      <h3>{`Не найдено ничего подходящего попробуйте изменить фильтры`}</h3>
    );
  }

  return (
    <div className="search__select">
      <div className="search__film">
        <div className="search__film-poster">
          <img src="TestPic.jpg" alt="poster" />
        </div>
        <div className="search__film-info">
          <h3>{`${currentFilm.title}`}</h3>
          <div className="search__film-genres">
            <p>{`Жанр: `}</p>
          </div>
          <div className="search__film-title">{`${currentFilm.overview}`}</div>
        </div>
      </div>
      <div className="search__select-nav">
        <button onClick={unsuitHandler} className="unsuit">
          {"Не подходит"}
        </button>
        <button className="suit">
          <Link to={`/films/${currentFilm.id}`}>{"Подходит"}</Link>
        </button>
      </div>
    </div>
  );
};

export default SearchFilm;
