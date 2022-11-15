import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Character = () =>{
    const params = useParams()
    const [character, setCharacter] = useState({})

    useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://rickandmortyapi.com/api/character/"+params.idCharacter, requestOptions)
        .then(response => response.json())
        .then(data => setCharacter(data))
        .catch(error => console.log('error', error));
},[])
    console.log(params.idCharacter)
    return (

        <div className="jumbotron d-flex container mt-4">
            <img src={character.image}/>
            <div className="m-4">
                <h1 className="display-4">{character.name}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>


    )
}