import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { AiOutlineMenu } from 'react-icons/ai';



export const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/">
			<img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"/>
		  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span>{<AiOutlineMenu />}</span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              
                <li className="nav-item"><Link className="px-5 nav-link" to="/">Home</Link></li>
                <li className="nav-item "><Link className="px-5 nav-link" to="/planets">Planets</Link></li>
                <li className="nav-item "><Link className="px-5 nav-link" to="/characters">Characters</Link></li>
                <li className="nav-item "><Link className="px-5 nav-link" to="/vehicles">Vehicles</Link></li>

            </ul>
          </div>
        </div>
      </nav>
	);
};
