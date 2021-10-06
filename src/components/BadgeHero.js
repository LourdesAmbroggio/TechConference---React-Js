import React from "react";

// Assets
import TechLove from "../assets/images/Robot.svg";
import "../assets/sass/components/badgehero.scss";

const BadgeHero = () => {
  return (
    <section className="BadgeHero">
      <figure className="BadgeHero__container">
        <img
          className="BadgeHero__image"
          src={TechLove}
          alt="TechLove conference"
        />
      </figure>
    </section>
  );
};

export default BadgeHero;
