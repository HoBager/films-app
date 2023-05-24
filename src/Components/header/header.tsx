import React, { memo } from "react";
import { useSelector } from "react-redux";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { Link } from "react-router-dom";
import { selectAuth } from "../../store/selectors";

const Header = memo(() => {
  const auth = useSelector(selectAuth);
  return (
    <>
      <header>
        <nav className="wrapper">
          <div className="header__links">
            <Link to={`/`} className="header__link">
              {"Home"}
            </Link>
            <Link to={`Search`} className="header__link">{`Search`}</Link>
          </div>
          {auth ? <LogoutButton /> : <LoginButton />}
        </nav>
      </header>
    </>
  );
});

export default Header;
