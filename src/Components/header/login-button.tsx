import React, { memo } from "react";
import useLogin from "../../hooks/use-login";

const LoginButton = memo(() => {
  const login = useLogin();
  return (
    <a onClick={login} className="Login_link" href="#">
      Login
    </a>
  );
});

export default LoginButton;
