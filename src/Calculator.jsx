import React from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton.jsx';

export default class Calculator extends React.Component {
	constructor() {
		super();

		this.state = {
			display: '',
			calculation: [
				''
			]
		};

		this.handleClickNumber = this.handleClickNumber.bind(this);
		this.handleClickAction = this.handleClickAction.bind(this);
	}

	handleClickNumber(event, func, num) {
		event.preventDefault();
		
		const newState = {...this.state};
		newState.calculation[newState.calculation.length-1] += num;

		newState.display = newState.calculation[newState.calculation.length-1];
		this.setState(newState);
	}

	handleClickAction(event, func, num) {
		event.preventDefault();
		const newState = {...this.state};
		let action = '';
		const previousSet = newState.calculation[newState.calculation.length-1];

		switch (func) {
			case 'sum':
				action = null;
				break;
			case 'add':
				action = '+';
				break;
			case 'minus':
				action = '-';
				break;
			case 'division':
				action = '/';
				break;
			case 'times':
				action = '*';
				break;
		}

		if(!action) {
			if(previousSet === '') {
				try {
					newState.calculation.splice(newState.calculation.length-1, 1);
					newState.calculation.splice(newState.calculation.length-1, 1);
				} catch(e) {}
			}

			let result = '';

			for(let set of newState.calculation) {
				result += set;
			}

			newState.display = eval(result);
		} else {
			if(previousSet === '') {
				try {
					newState.calculation[newState.calculation.length-2] = action;
				} catch(e) {}
			} else {
				let result = '';

				for(let set of newState.calculation) {
					result += set;
				}

				newState.display = eval(result);

				newState.calculation.push(action);
				newState.calculation.push('');
			}
		}

		this.setState(newState);
	}

	render() {
		const buttons = [
			{
				style: null,
				char: "7",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: "8",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: "9",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: "blue",
				char: "/",
				func: "division",
				onClick: this.handleClickAction
			},

			{
				style: null,
				char: "4",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: "5",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: "6",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: "blue",
				char: "*",
				func: "times",
				onClick: this.handleClickAction
			},

			{
				style: null,
				char: "1",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: "2",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: "3",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: "blue",
				char: "-",
				func: "minus",
				onClick: this.handleClickAction
			},

			{
				style: null,
				char: "0",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: null,
				char: ".",
				func: null,
				onClick: this.handleClickNumber
			},

			{
				style: "red",
				char: "=",
				func: "sum",
				onClick: this.handleClickAction
			},

			{
				style: "blue",
				char: "+",
				func: "add",
				onClick: this.handleClickAction
			},
		];

		return (
			<div className="calculator">
				<div className="display">{this.state.display}</div>

				<div className="buttons">
					{buttons.map((button) => {
						const key = button.char+button.func;
						return (
							<CalculatorButton 
								key={key}
								style={button.style} 
								character={button.char}
								action={button.func}
								onClick={button.onClick}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}