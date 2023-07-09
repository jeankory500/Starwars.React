import React, {useContext} from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";



export const Home = () => {
	
	const {store, actions} = useContext(Context);
	console.log(store.characters);
	console.log(store.planets);
	console.log(store.starships);

return (
	<div className="container" >
		<div className="mt-5 text-danger">
			<h1>Characters</h1>
			<div className="row row-cols-4 scrollbar">
				{store.characters.map((people)=> (
					<Card key={people._id} item={people} nature={"characters"} />
				))}
				</div>
				<h1>Planets</h1>
			<div className="row row-cols-4 scrollbar">
				{store.planets.map((planet)=> (
				
					<Card key={planet._id} item={planet} nature={"planets"} />

				))}
			</div>
			<h1>StarShips</h1>
			<div className="row row-cols-4 scrollbar">
				{store.characters.map((starships)=> (
					<Card key={starships._id} item={starship} nature={"starships"} />
				))}
		</div>
		</div>
	</div>
);
	};
