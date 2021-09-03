import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions";
import MainPageNav from "../MainPageNav/MainPageNav";
import SingInForm from "../SignInForm/SignInForm";

const MainPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <main className="main-page">
      <MainPageNav />
      <section className="main-page__content">
        <h1 className="app__title">Welcome to the ...</h1>
        {isAuth ? (
          <div className="main-page__auth">
            <div className="main-page__user">
              <div className="main-page__user-icon"></div>
              <p className="main-page__user-name">user 1</p>
            </div>
            <button
              type="button"
              className="main-page__logout"
              onClick={() => {
                dispatch(logout());
              }}
            ></button>
          </div>
        ) : (
          <SingInForm />
        )}
      </section>
    </main>
  );
};

export default MainPage;
