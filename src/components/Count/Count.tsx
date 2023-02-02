import React from 'react';
import s from './Count.module.css'

type CountType = {
	value: number
	maxValue: number
	error: null | string
	isIncrement: boolean
	startValue: number
}

const Count = ({value, startValue, isIncrement, error, maxValue}: CountType) => {

	const max = value === maxValue && maxValue !== 0 ? s.red : s.count;

	const errorText = maxValue === startValue
		|| maxValue < startValue
		|| maxValue < 0
		|| startValue < 0

	const titleOrNumber = errorText
		? <h2 className={s.error}>Incorrect value</h2>
		: !isIncrement
			? <h2 className={s.text}>Enter value and press "set"</h2>
			: value

	return (
		<div className={max}>{titleOrNumber}</div>
	);

};

export default Count;