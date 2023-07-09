import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Record = () => {
    const params = useParams();
    const {nature, theid} = params;
    const {store} = useContext(Context);
    const [current, setcurrent ] = useState();
    
    UseEffect(() => {
        if (store[nature].length !== 10) return;

        const currentFind = store[nature].find ((item) => item.result.uid == theid);
        console.log(currentFind);
        setcurrent(currentFind);
    }, [params]);

    return (
        <div className="contatiner">
            <div className="row">
               <div className="col">
                <img
                src={`https://starwars-visuealguide.com/assets/img/${nature}/${current?.results.uid}.jpg`}
                className=""
                alt="A StarWars image"
            /></div> 
            <div className="col">
                <h1>{current?.result.properties.name}</h1>
                <p>{current?.result.description}</p>
            </div>
            </div>
            <div className="text-danger">
                <hr></hr>
                <div className="row">{}</div>
                
            </div>

        </div>
    )



}