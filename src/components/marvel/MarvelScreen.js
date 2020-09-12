import React from "react";
import { heroes } from "../../data/heroes";
import { HeroesScreen } from "../heroes/HeroesScreen";

export const MarvelScreen = () => {
  const getHeroeByPublisher = () => {
    return heroes.filter((item) => item.publisher === "Marvel Comics");
  };

  const heroesMarvel = getHeroeByPublisher();

  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr />

      <HeroesScreen heroes={heroesMarvel} />
    </div>
  );
};
