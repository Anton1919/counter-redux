import React from 'react';
import s from './SettingCounter.module.css'
import Button from "../Button/Button";
import ValuesSettings from "./ValuesSetting/ValuesSettings";
import {maxValueAC, startValueAC} from "../../state/settingCouner-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
	isIncrement: boolean
	setIsIncrement: (value: boolean) => void
	maxValue: number
	startValue: number
}

const SettingCounter = ({isIncrement,startValue,maxValue,setIsIncrement}: PropsType) => {


	const dispatch = useDispatch()

	const handleClick = () => {

		setIsIncrement(true)

		localStorage.setItem("maxValue", JSON.stringify(maxValue))
		localStorage.setItem("startValue", JSON.stringify(startValue))
	}

	const setValue = (value: number,name: string) => {
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
				<Button title={'set'} callback={handleClick} disabled={isIncrement}/>
			</div>
		</div>
	);
};

export default SettingCounter;