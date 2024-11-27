import React from "react";

export default function Image(props) {
	return (
		<figure>
			<img src={props.img} alt={props.tooltip}/>
			<figcaption>{props.caption}</figcaption>
		</figure>
	);
}
