import { useDispatch } from "react-redux";
import { LoginForm } from "../Components/login/login-form";

function useLogin() {
  const dispatch = useDispatch();
  return () => {
    dispatch({ type: "OPEN_MODAL", payload: <LoginForm /> });
  };
}

export default useLogin;
