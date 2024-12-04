import Admonition from '@theme/Admonition';

export default function Synopsis(props) {
	return (
		<Admonition type="info" title="Synopsis">
			{props.children}
		</Admonition>
	);
};
