import React, { memo, useEffect } from "react";
import Pagination from "./pagination";
import {
  SORT_TYPES,
  SORT_DATES,
  DEFAULT_DATE_VALUE,
} from "../../consts/filters-consts";
import { useDispatch, useSelector } from "react-redux";
import GenresList from "./genres-list";
import { selectMainPageFilms, selectSorts } from "../../store/selectors";
import { Dispatch } from "redux";

function createSorts() {
  return SORT_TYPES.map(({ name }) => {
    return (
      <option key={name} value={name}>
        {name}
      </option>
    );
  });
}

function createSortsByDate() {
  return SORT_DATES.map((date) => {
    return (
      <option key={date} value={date}>
        {date}
      </option>
    );
  });
}

function resetFilters(dispatch: Dispatch) {
  dispatch({ type: "RESET_FILTERS" });
}

function changeMethod(
  dispatch: Dispatch,
  event: React.ChangeEvent<HTMLSelectElement>
) {
  dispatch({ type: "CHANGE_TYPE_SORT", payload: event.target.value });
}

function changeDate(
  dispatch: Dispatch,
  event: React.ChangeEvent<HTMLSelectElement>
) {
  dispatch({ type: "CHANGE_DATE_SORT", payload: Number(event.target.value) });
}

const Filters = memo(() => {
  const dispatch = useDispatch();
  const { type, date } = useSelector(selectSorts);
  const filmsList = useSelector(selectMainPageFilms);

  useEffect(() => {
    dispatch({ type: "CHANGE_FILMS_LIST", payload: filmsList });
  }, [filmsList]);

  return (
    <div className="filters">
      <h2>{`Фильтры:`}</h2>
      <button
        onClick={resetFilters.bind(null, dispatch)}
        className="reset_filters"
      >{`Сбросить все фильтры`}</button>
      <label className="filters_label">
        {`Сортировать по:`}
        <select
          value={type}
          onChange={changeMethod.bind(null, dispatch)}
          className="sort"
        >
          {createSorts()}
        </select>
      </label>
      <label className="filters_label">
        {`Год релиза:`}
        <select
          value={date}
          onChange={changeDate.bind(null, dispatch)}
          className="sort"
        >
          <option value={DEFAULT_DATE_VALUE}>{"По умолчанию"}</option>
          {createSortsByDate()}
        </select>
      </label>
      <GenresList />
      <Pagination filmsList={filmsList} />
    </div>
  );
});

export default Filters;
