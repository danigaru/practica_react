import React from "react";
import {Link} from 'react-router-dom';

export const Heroe = ({ id, superhero, alter_ego, characters }) => {
  return (
    <div className="card">
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img-top"
        alt={superhero}
      />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        <p className="card-text">{characters}</p>
        <Link to={`/heroe/${id}`} className="btn btn-primary">
          Ver mas
        </Link>
      </div>
    </div>
  );
};
