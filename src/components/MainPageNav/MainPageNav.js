import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPageNav = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
      <nav className="main-page-nav">
        <ul className="main-page-nav__list">
          <li className="main-page-nav__item">
            <Link
              to={isAuth ? "/market" : "#"}
              className={`main-page-nav__link ${
                !isAuth && "main-page-nav__link_disable"
              } main-page-nav__link_to_market`}
            >
              Market
            </Link>
          </li>
          <li className="main-page-nav__item">
            <Link
              to={isAuth ? "/projects" : "#"}
              className={`main-page-nav__link ${
                !isAuth && "main-page-nav__link_disable"
              } main-page-nav__link_to_market`}
            >
              Projects
            </Link>
          </li>
          <li className="main-page-nav__item">
            <Link
              to={isAuth ? "/user" : "#"}
              className={`main-page-nav__link ${
                !isAuth && "main-page-nav__link_disable"
              } main-page-nav__link_to_market`}
            >
              User
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default MainPageNav;
