import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AUTH_STORAGE_KEY, DEFAULT_INPUT_VALUE } from "../../consts/consts";
import User from "../../consts/fake-auth";

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState(DEFAULT_INPUT_VALUE);
  const [passwordValue, setPasswordValue] = useState(DEFAULT_INPUT_VALUE);
  const dispatch = useDispatch();

  function Login(event: FormEvent) {
    event.preventDefault();
    try {
      if (User.login === loginValue && User.password === passwordValue) {
        dispatch({ type: "LOGIN" });
        dispatch({ type: "CLOSE_MODAL" });
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(true));
      }
    } catch {
      console.log("err");
    }
  }

  return (
    <form onSubmit={Login} className="Login">
      <label>
        {"login:"}
        <input
          onChange={(event) => setLoginValue(event.target.value)}
          type="text"
          value={loginValue}
        />
      </label>
      <label>
        {"password:"}
        <input
          onChange={(event) => setPasswordValue(event.target.value)}
          type="text"
          value={passwordValue}
        />
      </label>
      <button>{`Войти`}</button>
    </form>
  );
};
