import React from 'react';
import './CalculatorButton.css';

const CalculatorButton = (props) => {
	const {style, character, action} = props;
	const className = [
		'calculator-button ',
		style
	];

	return (
		<button 
			onClick={(event) => {
				props.onClick(event, action, character)
			}}
			className={className.join(' ')}
		>
			<div className="content">{character}</div>
		</button>
	);
};

export default CalculatorButton;