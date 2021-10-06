import React from "react";
import { Link } from "react-router-dom";

// Assets
import astronauts from "../assets/images/Robot.svg";
import TechLove from "../assets/images/Innovation-amico.svg";
import "../assets/sass/components/home.scss";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <section className="Home">
      <div className="Home__container">
        <div className="Home__info">
          <figure className="Home__image Home__image-info">
            <img src={TechLove} alt="TechLove conference" />
          </figure>
          <h1 className="Home__title fs-large">TechLove Conference</h1>
          <p className="Home__description">
            La forma más sencilla de manejar tus conferencias
          </p>
          <Link to="/badges/" className="Home__button btn fs-medium fw-bold">
            Empezar ahora
          </Link>
        </div>
        <figure className="Home__image Home__image-astronauts">
          <img src={astronauts} alt="Tech Love" />
        </figure>
        <Footer />
      </div>

    </section>
  );
};

export default Home;
