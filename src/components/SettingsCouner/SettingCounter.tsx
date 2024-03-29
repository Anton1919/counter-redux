import React from 'react';
import s from './SettingCounter.module.css'
import Button from "../Button/Button";
import ValuesSettings from "./ValuesSetting/ValuesSettings";
import {maxValueAC, setCounterAC, startValueAC} from "../../state/settingCouner-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
	isIncrement: boolean
	setIsIncrement: (value: boolean) => void
	maxValue: number
	startValue: number
}

const SettingCounter =({startValue, isIncrement, maxValue, setIsIncrement}: PropsType) => {

	const dispatch = useDispatch()

	const disabled = !isIncrement || maxValue === startValue
		|| maxValue < startValue
		|| maxValue < 0
		|| startValue < 0

	const handleClick = () => {

		setIsIncrement(false)
		dispatch(setCounterAC(startValue))

		localStorage.setItem("maxValue", JSON.stringify(maxValue))
		localStorage.setItem("startValue", JSON.stringify(startValue))
	}

	const setValue = (value: number, name: string) => {
		switch (name) {
			case 'max':
				dispatch(maxValueAC(value));
				break;
			case 'start':
				dispatch(startValueAC(value));
				break
		}
	}

	return (
		<div className={s.settingCounter}>
			<ValuesSettings
				maxValue={maxValue}
				startValue={startValue}
				setIsIncrement={setIsIncrement}
				setValue={setValue}
			/>
			<div className={s.wrapper}>
				<Button title={'set'} callback={handleClick} disabled={disabled}/>
			</div>
		</div>
	);
}

export default SettingCounter;