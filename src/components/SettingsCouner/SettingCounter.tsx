import React, {useState} from 'react';
import s from './SettingCounter.module.css'
import Button from "../Button/Button";
import ValuesSettings from "./ValuesSetting/ValuesSettings";
import {maxValueAC, startValueAC, ThunkCounterDispatch} from "../../state/settingCouner-reducer";
import {useDispatch} from "react-redux";
import {setCounterAC} from "../../state/counter-reducer";

const SettingCounter = () => {
	const [maxValue, setMaxValue] = useState(0)
	const [startValue, setStartValue] = useState(0)

	const dispatch = useDispatch()

	const handleClick = () => {

		dispatch(maxValueAC(maxValue))
		dispatch(setCounterAC(startValue))

		localStorage.setItem("maxValue", JSON.stringify(maxValue))
		localStorage.setItem("startValue", JSON.stringify(startValue))
	}

	return (
		<div className={s.settingCounter}>
			<ValuesSettings
				maxValue={maxValue}
				startValue={startValue}
				setMaxValue={setMaxValue}
				setStartValue={setStartValue}
			/>

			<div className={s.wrapper}>
				<Button title={'set'} callback={handleClick}/>
			</div>
		</div>
	);
};

export default SettingCounter;