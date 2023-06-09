import React from "react";
import Social from "./Social";
import "./home.css";
import Data from "./Data";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <Data />
          <div className="home__img"></div>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
}

export default Home;
