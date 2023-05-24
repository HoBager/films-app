import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../hooks/use-login";
import { Link } from "react-router-dom";
import IFilm from "../../interfaces/i-film";
import { makeSelectCurrentFilm, selectAuth } from "../../store/selectors";
import { IRootState } from "../../store";

interface CardProps {
  film: IFilm;
}

function isFavorite(status: boolean) {
  return status ? "active" : "";
}

const FilmCard = ({ film }: CardProps) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const selectFilmData = useMemo(makeSelectCurrentFilm, [auth]);
  const { favorite, watchLater } = useSelector((state: IRootState) =>
    selectFilmData(state, film.title)
  );
  const login = useLogin();

  const addFavoriteHandler = useCallback(() => {
    if (auth) {
      dispatch({ type: "CHANGE_FAVORITE_LIST", payload: film.title });
    } else {
      login();
    }
  }, [auth]);

  const addWatchLaterHandler = useCallback(() => {
    if (auth) {
      dispatch({ type: "CHANGE_WATCH_LIST", payload: film.title });
    } else {
      login();
    }
  }, [auth]);

  return (
    <div className="film-card">
      <img className="poster" src="TestPic.jpg" alt="Poster" />
      <div className="card-info">
        <div className="card-main">
          <div className="card-nav">
            <p>{`Рейтинг: ${film.vote_average}`}</p>
            <div className="card-buttons">
              <input
                type="button"
                className={"card-button star " + isFavorite(favorite)}
                onClick={addFavoriteHandler}
              />
              <input
                type="button"
                className={"card-button bookmark " + isFavorite(watchLater)}
                onClick={addWatchLaterHandler}
              />
            </div>
          </div>
          <p className="film-title">{film.title}</p>
        </div>
        <Link
          to={`films/${film.id}`}
          className="card-about"
        >{`Подробнее`}</Link>
      </div>
    </div>
  );
};

export default FilmCard;
