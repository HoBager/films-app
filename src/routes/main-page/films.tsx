import { memo, useEffect } from "react";
import FilmsList from "../../Components/films/films-list";
import Filters from "../../Components/filters/filters";
import ModalWindow from "../../Components/modal/modal-window";
import useResetFilters from "../../hooks/use-reset-filters";

const Films = memo(() => {
  const reset = useResetFilters();
  useEffect(() => {
    reset();
  }, []);

  return (
    <main className="wrapper content">
      <Filters />
      <FilmsList />
      <ModalWindow />
    </main>
  );
});

export default Films;
