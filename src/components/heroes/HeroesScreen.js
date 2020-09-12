import React from "react";
import { Heroe } from "./Heroe";

export const HeroesScreen = ({ heroes }) => {
  return (
    <div className="row">
      {heroes.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Heroe {...item} />
        </div>
      ))}
    </div>
  );
};
