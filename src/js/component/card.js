import React, { Component, useContext } from 'react'
import { useNavigate } from 'react-router'
import { Context } from "../store/appContext"


export const Card = ({item,nature}) => {

  const navigate = useNavigate();
  const { store, actions } = useContext(Context); 

   
  return (
    <div className="col">
      <div className="card">
        <img
        src={`https://starwars-visuealguide.com/assets/img/${nature}/$item.result.uid}.jpg`}
        className='card-img-top'
        alt="..."
        />
        
        

    </div>
    </div>

  )}