import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Characters = () =>{

    const [characters, setCharacters] = useState({})

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://rickandmortyapi.com/api/character", requestOptions)
        .then(response => response.json())
        .then(data => setCharacters(data))
        .catch(error => console.log('error', error));


    return (
        <>
            <div className="container d-flex flex-wrap">
                {characters.results?.map((element, index)=> {
                    return (
                        <div class="card m-2" style={{width: "18rem"}}>
                        <img src={element.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{element.name}</h5>
                                <p class="card-text">Specie: {element.species}</p>
                                <p class="card-text">Location: {element.location.name}</p>
                                <p class="card-text">Origin: {element.origin.name}</p>
                                
                                <Link to={"/character/"+(index+1)} className="btn btn-primary">Más Información</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}