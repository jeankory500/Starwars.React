import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/StarWars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { favorites } = store;

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src={StarWars} width="100" height="80" alt="Star Wars Logo" />
        </span>
      </Link>

      <div className="ml-auto dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites<span className="badge bg-secondary">{favorites.length}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {favorites.length === 0 ? (
            <li>
              <span className="dropdown-item">No favorites saved</span>
            </li>
          ) : (
            favorites.map((item, index) => (
              <li key={index}>
                <Link to={`/record/${item}`} className="dropdown-item">
                  {item} 🗑️
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};
