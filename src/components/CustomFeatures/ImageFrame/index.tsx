import React from 'react';

const ImageFrame = (props: any) => {
	return (
		<figure>
			<img src={props.img} alt={props.tooltip}/>
			<figcaption>{props.caption}</figcaption>
		</figure>
	);
}

export default ImageFrame;
