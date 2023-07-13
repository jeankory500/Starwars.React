import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Record = () => {
    const params = useParams();
    const {nature, theid} = params;
    const {store} = useContext(Context);
    const [current, setcurrent] = useState();
    
    useEffect(() => {
        if (store[nature].length !== 10) return;

        const currentFind = store[nature].find ((item) => item.result.uid == theid);
        console.log(currentFind);
        setcurrent(currentFind);
    }, [params]);

    return (
        <div className="contatiner">
            <div className="row">
               <div className="">
                <img
                src={`https://picsum.photos/200`}
                className=""
                alt="A StarWars image"
            />
            </div> 
            <div className="col">
                <h1>{current?.result.properties.name}</h1>
                <p>{current?.result.description}</p>
            </div>
            </div>
            <div className="text-danger">
                <hr></hr>
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
    </div>

    );
};