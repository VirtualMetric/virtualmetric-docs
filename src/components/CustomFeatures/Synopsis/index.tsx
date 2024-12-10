import React from 'react';
import Admonition from '@theme/Admonition';

const Synopsis = (props: React.PropsWithChildren<{}>) => {
	return (
		<Admonition type="info" title="Synopsis">
			{props.children}
		</Admonition>
	);
};

export default Synopsis;
