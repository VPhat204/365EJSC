import React from "react";
import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";
import "./styles.css";

function Home() {
  return (
    <div className="home-page">
      <Banner />
      <MovieList />
    </div>
  );
}

export default Home;
