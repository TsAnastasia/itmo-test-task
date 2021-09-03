import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { logout } from "../../redux/actions";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navigation">
      <div className="navigation__user"></div>
      <ul className="navigation__menu">
        <li className="navigation__item">
          <NavLink
            to="/market"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Market
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/projects"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Projects
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/user"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            User
          </NavLink>
        </li>
      </ul>
      <div className="navigation__buttons">
        <Link to="/">Main Page</Link>
        <button
          type="button"
          className="navigation__button"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
