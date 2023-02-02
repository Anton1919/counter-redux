import React from 'react';
import s from './Button.module.css'

type ButtonType = {
	title: string
	callback: () => void
	disabled: boolean
}

const Button = ({title, disabled, callback}: ButtonType) => {

	return (
		<div>
			<button className={disabled ? s.opacity : s.button} disabled={disabled} onClick={callback}>{title}</button>
		</div>
	);
};

export default Button;