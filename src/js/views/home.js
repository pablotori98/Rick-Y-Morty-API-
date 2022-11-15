import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Characters } from "./characters"

export const Home = () => (
	<div className="mt-5">
		<Characters />
	</div>
);
