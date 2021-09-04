import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MainPage.css";
import { logout } from "../../redux/actions";
import MainPageNav from "../MainPageNav/MainPageNav";
import SingInForm from "../SignInForm/SignInForm";

const MainPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="main-page">
      <header className="main-page__header"></header>
      <main className="main-page__content">
        <MainPageNav />
        <section className="main-page__section">
          <h1 className="main-page__title">Welcome to the ...</h1>
          {isAuth ? (
            <div className="main-page__auth">
              <div className="main-page__user-icon"></div>
              <div className="main-page__info">
                <p className="main-page__user-name">User/1</p>
                <button
                  type="button"
                  className="main-page__logout"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <SingInForm />
          )}
        </section>
      </main>
      <footer className="main-page__footer"></footer>
    </div>
  );
};

export default MainPage;
