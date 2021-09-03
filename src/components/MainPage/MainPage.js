import React from "react";
import { useSelector } from "react-redux";
import MainPageNav from "../MainPageNav/MainPageNav";

const MainPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <main className="main-page">
      <MainPageNav />
      <section className="main-page__content">
        <h1 className="app__title">Welcome to the ...</h1>
      </section>
    </main>
  );
};

export default MainPage;
