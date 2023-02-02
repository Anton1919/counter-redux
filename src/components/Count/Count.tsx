import React from 'react';
import s from './Count.module.css'

type CountType = {
	value: number
	maxValue: number
	error: null | string
	isIncrement: boolean
}

const Count = ({value, isIncrement, error, maxValue}: CountType) => {

	const max = value === maxValue && maxValue !== 0 ? s.red : s.count;

	const titleOrNumber = !isIncrement
			? <h2 className={s.text}>Enter value and press "set"</h2>
			: value

	return (
		<div className={max}>{titleOrNumber}</div>
	);

};

export default Count;