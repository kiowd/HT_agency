import React from "react";
import Contact from "../Contact";
import "./home.css";

const Home = () => {
  return (
    <>
    <header className="header">
      <article className="banner">
        <h1 className="banner_title">
          <span>Hi,</span>
          <strong className="banner_title_name">Welcome You</strong>
        </h1>
      </article>
    </header>
    <Contact/>
    </>
  );
};

export default Home;
