import React from "react";

export default function ImageFrame(props) {
	return (
		<figure>
			<img src={props.img} alt={props.tooltip}/>
			<figcaption>{props.caption}</figcaption>
		</figure>
	);
}
