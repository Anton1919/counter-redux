import React, {ChangeEvent, useState} from 'react';
import s from './ValuesSettings.module.css'

type PropsType = {
	maxValue: number
	startValue: number
	setMaxValue: (num: number) => void
	setStartValue: (num: number) => void
}

const ValuesSettings = ({maxValue, setStartValue, startValue, setMaxValue}: PropsType) => {


	const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.currentTarget.value)
	}

	const changeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setStartValue(+e.currentTarget.value)
	}

	return (
		<div className={s.valueSettings}>
			<div className={s.text}>max value:
				<input className={s.input} type="number" value={maxValue} onChange={changeMaxHandler}/>
			</div>
			<div className={s.text}>start value:
				<input className={s.input} type="number" value={startValue} onChange={changeStartHandler}/>
			</div>
		</div>
	);
};

export default ValuesSettings;