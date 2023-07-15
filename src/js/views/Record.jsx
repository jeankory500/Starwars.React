import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Record = () => {
  const params = useParams();
  const { nature, theid } = params;
  const { store } = useContext(Context);
  const [current, setcurrent] = useState();

  useEffect(() => {
    const currentFind = store[nature]?.find((item) => item.result.uid === theid);
    setcurrent(currentFind);
  }, [nature, theid, store]);

  const renderCharacterInfo = () => {
    return (
      <div className="text-danger">
        <hr />
        <div className="row">
          <div className="col">
            <p className="fw-bold">Name</p>
            <p>{current?.result.properties.name}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Birth Year</p>
            <p>{current?.result.properties.birth_year}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Gender</p>
            <p>{current?.result.properties.gender}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Height</p>
            <p>{current?.result.properties.height}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Skin Color</p>
            <p>{current?.result.properties.skin_color}</p>
          </div>
          <div className="col">
            <p className="fw-bold">Eye Color</p>
            <p>{current?.result.properties.eye_color}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderPlanetInfo = () => {
    return (
      <div className="text-danger">
      <hr />
      <div className="row">
        <div className="col">
          <p className="fw-bold">Name</p>
          <p>{current?.result.properties.name}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Population</p>
          <p>{current?.result.properties.population}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Terrain</p>
          <p>{current?.result.properties.terrain}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Diameter</p>
          <p>{current?.result.properties.diameter}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Gravity scale</p>
          <p>{current?.result.properties.gravity}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Climate</p>
          <p>{current?.result.properties.climate}</p>
        </div>
      </div>
    </div>
    );
  };

  const renderStarshipInfo = () => {
    return (
      <div className="text-danger">
      <hr />
      <div className="row">
        <div className="col">
          <p className="fw-bold">Manufacturer</p>
          <p>{current?.result.properties.manufacturer}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Model</p>
          <p>{current?.result.properties.model}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Passengers</p>
          <p>{current?.result.properties.passengers}</p>
        </div>
        <div className="col">
          <p className="fw-bold">Starship Class</p>
          <p>{current?.result.properties.starship_class}</p>
        </div>
      </div>
    </div>
    );
  };

  
  return (
    <div className="container record">
      <div className="row">
        <div className="imageContainer">
          <img
            src={`http://via.placeholder.com/640x360`}
            className="recordImage"
            alt="A StarWars image"
          />
          <h1 className="recordName">{current?.result.properties.name}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets
          </p>
        </div>
        <div className="col-md-6">
        </div>
      </div>
      {nature === "characters" && renderCharacterInfo()}
      {nature === "planets" && renderPlanetInfo()}
      {nature === "starships" && renderStarshipInfo()}
      
     
    </div>
  );
};
