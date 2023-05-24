import { MouseEvent, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILMS_ON_PAGE, MIN_COUNT_PAGES } from "../../consts/consts";
import { selectPageNumber } from "../../store/selectors";
import IFilm from "../../interfaces/i-film";

interface propsPagination {
  filmsList: IFilm[];
}

const Pagination = memo(({ filmsList }: propsPagination) => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPageNumber);
  const countPages = Math.ceil(filmsList.length / FILMS_ON_PAGE);

  function nextPage(event: MouseEvent) {
    event.preventDefault();
    dispatch({ type: "CHANGE_PAGE", payload: pageNumber + 1 });
  }

  function prevPage(event: MouseEvent) {
    event.preventDefault();
    dispatch({ type: "CHANGE_PAGE", payload: pageNumber - 1 });
  }

  useEffect(() => {
    if (pageNumber > countPages) {
      dispatch({ type: "CHANGE_PAGE", payload: countPages });
    }
    if (pageNumber < MIN_COUNT_PAGES) {
      dispatch({ type: "CHANGE_PAGE", payload: MIN_COUNT_PAGES });
    }
  }, [filmsList]);

  return (
    <div className="pagination">
      <div className="nav">
        <button
          onClick={prevPage}
          disabled={pageNumber <= 1}
          className="back"
        >{`Назад`}</button>
        <button
          onClick={nextPage}
          disabled={pageNumber >= countPages}
          className="next"
        >{`Вперед`}</button>
      </div>
      <p className="page-nuber">{`${pageNumber || MIN_COUNT_PAGES} of ${
        countPages || MIN_COUNT_PAGES
      }`}</p>
    </div>
  );
});

export default Pagination;
