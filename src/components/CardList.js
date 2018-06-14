import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map(obj => {
					return <Card name={obj.name} email={obj.email} id={obj.id} key={obj.id}/>
				})
			}
		</div>
	);
}

export default CardList;