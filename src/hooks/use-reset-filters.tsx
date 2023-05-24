import { useDispatch } from "react-redux";

export default function useResetFilters() {
  const dispatch = useDispatch();
  return () => {
    dispatch({ type: "RESET_FILTERS" });
    dispatch({ type: "RESET_QUESTIONS" });
  };
}
