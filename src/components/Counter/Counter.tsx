import React from 'react';
import s from './Counter.module.css'
import Count from "../Count/Count";
import Button from "../Button/Button";

type CounterType = {
	value: number
	maxValue: number
	startValue: number
	increment: () => void
	reset: () => void
	isIncrement: boolean

}

const Counter = ({increment, startValue, isIncrement, maxValue, reset, value}: CounterType) => {
	return (
		<div className={s.counter}>
			<Count startValue={startValue} isIncrement={isIncrement} value={value} maxValue={maxValue}/>

			<div className={s.wrapper}>
				<Button title={'incr'} callback={increment} disabled={value === maxValue || !isIncrement}/>
				<Button title={'reset'} callback={reset} disabled={value < maxValue || !isIncrement}/>
			</div>

		</div>
	);
};

export default Counter;