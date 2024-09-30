import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";

import Contact from "./contacts";

export const Home = () => {

	const {store} = useContext(Context);

	return(
		<div className=" mt-5">
			<div className="container">

				{store.listContact && store.listContact.map((item, index) => {
				console.log(item)
					return (
						<Contact
						
							key={item.id}
							fullname = {item.name}
							phone = {item.phone}
							email = {item.email}
							address = {item.address}
							image = {item.image}
							id = {item.id}
						/>
					)
				})}
			</div> 
		</div>
	)
};

