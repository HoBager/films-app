import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GENRES } from "../../consts/filters-consts";
import { selectGenres } from "../../store/selectors";
import { Dispatch } from "redux";

function toggleGenre(dispatch: Dispatch, id: number) {
  dispatch({ type: "CHANGE_GENRES", payload: id });
}

const isChecked = (id: number, genres: number[]) => {
  return genres.includes(id);
};

const GenresList = memo(() => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  const checkboxes = useMemo(() => {
    return GENRES.map(({ name, id }) => {
      return (
        <p key={name}>
          <input
            type="checkbox"
            checked={isChecked(id, genres)}
            value={name}
            onChange={toggleGenre.bind(null, dispatch, id)}
          />
          {name}
        </p>
      );
    });
  }, [genres]);

  return <div className="filters_checkboxes">{checkboxes}</div>;
});

export default GenresList;
