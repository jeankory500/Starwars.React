import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../store/appContext';

export const Card = ({ item, nature }) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const renderCharacterInfo = () => {
    return (
      <>
        <p>Gender: {item.result.properties.gender}</p>
        <p>Hair Color: {item.result.properties.hair_color}</p>
        <p>Eye Color: {item.result.properties.eye_color}</p>
      </>
    );
  };

  const renderPlanetInfo = () => {
    return (
      <>
        <p>Population: {item.result.properties.population}</p>
        <p>Terrain: {item.result.properties.terrain}</p>
        <p>Climate: {item.result.properties.climate}</p>
      </>
    );
  };

  const renderStarshipInfo = () => {
    return (
      <>
        <p>Model: {item.result.properties.model}</p>
        <p>Hyperdrive rating: {item.result.properties.hyperdrive_rating}</p>
      </>
    );
  };

  return (
    <div className="col">
      <div className="card">
        <img src={`https://picsum.photos/300`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.result.properties.name}</h5>

          {nature === 'characters' && renderCharacterInfo()}
          {nature === 'planets' && renderPlanetInfo()}
          {nature === 'starships' && renderStarshipInfo()}

          <div className="d-flex justify-content-between">
            <button onClick={() => navigate(`record/${nature}/${item.result.uid}`)} className="btn btn-outline-primary">
              Learn more!
            </button>
            {store.favorites.includes(item.result.properties.name) ? (
              <button
                className="btn btn-outline-warning"
                onClick={() => actions.deleteFavorite(item.result.properties.name)}
              >
                ♥
              </button>
            ) : (
              <button
                className="btn btn-outline-warning"
                onClick={() => actions.setFavorite(item.result.properties.name)}
              >
                ♥
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
