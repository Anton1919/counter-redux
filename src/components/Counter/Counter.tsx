import React from 'react';
import s from './Counter.module.css'
import Count from "../Count/Count";
import Button from "../Button/Button";

type CounterType = {
	value: number
	increment: () => void
	reset: () => void
}

const Counter = ({increment, reset, value}: CounterType) => {
	return (
		<div className={s.counter}>
			<Count value={value}/>

			<div className={s.wrapper}>
				<Button title={'incr'} callback={increment}/>
				<Button title={'reset'} callback={reset}/>
			</div>

		</div>
	);
};

export default Counter;