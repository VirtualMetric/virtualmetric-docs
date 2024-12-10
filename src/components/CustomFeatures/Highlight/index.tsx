import React from 'react';
// import styles from '../styles.module.css';

const Highlight = ({children, color}: any) => {
	return (
		<span
			style={{
				backgroundColor: color,
				borderRadius: '2px',
				color: '#fff',
				padding: '0.2rem',
			}}>
			{children}
		</span>
	);
}

export default Highlight;
