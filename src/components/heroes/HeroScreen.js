import React from "react";
import { useParams } from "react-router-dom";
import { heroes } from "../../data/heroes";

export const HeroScreen = ({ history }) => {
  const { idHeroe } = useParams();

  const hero = heroes.find((item) => item.id === idHeroe);

  if (!hero) {
    return (
      <div className="alert alert-warning">
        No se encuentran datos para el {idHeroe}
      </div>
    );
  }

  const {
    id,
    superhero,
    alter_ego,
    characters,
    publisher,
    first_appearance,
  } = hero;

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-4">
            <img
              src={`../assets/heroes/${id}.jpg`}
              className="card-img-top"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">{first_appearance}</p>
              <p className="card-text">{publisher}</p>
              <p className="card-text">{characters}</p>
              <button
                onClick={() => {
                  history.goBack();
                }}
                className="btn btn-primary"
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
