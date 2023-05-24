import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { AUTH_STORAGE_KEY } from "../../consts/consts";

const LogoutButton = memo(() => {
  const dispatch = useDispatch();

  function logout(event: React.MouseEvent) {
    event.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      dispatch({ type: "RESET_USERS_LISTS" });
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(false));
    } catch {
      console.log("err");
    }
  }
  return (
    <a onClick={logout} className="Logout_link" href="#">
      Logout
    </a>
  );
});

export default LogoutButton;
