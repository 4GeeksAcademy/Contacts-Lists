import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";

import Contact from "./Contacts";

export const Home = () => {

	const {store} = useContext(Context);

	return(
		<div className="text-center mt-5">
			<div className="container">

				{store.listContact && store.listContact.map((item, index) => {
					return (
						<Contact
						
							key={item.id}
							fullname = {item.name}
							phone = {item.phone}
							email = {item.email}
							address = {item.address}

						/>
					)
				})}
			</div> 
			<div>
				Editar
				Borrar
			</div>
		</div>
	)
};

