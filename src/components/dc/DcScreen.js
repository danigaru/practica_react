import React from "react";
import { heroes } from "../../data/heroes";
import { HeroesScreen } from "../heroes/HeroesScreen";

export const DcScreen = () => {
  const getHeroeByPublisher = () => {
    return heroes.filter((item) => item.publisher === "DC Comics");
  };

  const heroesDC = getHeroeByPublisher();

  return (
    <div>
      <h1>DC Screen</h1>
      <hr />

      <HeroesScreen heroes={heroesDC} />
    </div>
  );
};
