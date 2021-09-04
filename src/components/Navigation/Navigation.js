import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { logout } from "../../redux/actions";

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navigation">
      <div className="navigation__user">
        <div className="navigation__user-avatar"></div>
        <div className="navigation__user-info">
          <p className="navigation__user-name">User/1</p>
          <p className="navigation__user-status">Team member Tube</p>
        </div>
      </div>
      <ul className="navigation__menu">
        <li className="navigation__item">
          <NavLink
            to="/market"
            className="navigation__link navigation__link_to_market"
            activeClassName="navigation__link_active"
          >
            <span className="navigation__link-text">Market</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/projects"
            className="navigation__link navigation__link_to_projects"
            activeClassName="navigation__link_active"
          >
            <span className="navigation__link-text">Projects</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/user"
            className="navigation__link navigation__link_to_user"
            activeClassName="navigation__link_active"
          >
            <span className="navigation__link-text">User</span>
          </NavLink>
        </li>
      </ul>
      <div className="navigation__buttons">
        <Link to="/" className="navigation__button navigation__button_to_home">
          <span className="navigation__button-text">Main Page</span>
        </Link>
        <button
          type="button"
          className="navigation__button navigation__button_to_logout"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <span className="navigation__button-text">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
