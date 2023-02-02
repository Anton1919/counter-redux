import React, {ChangeEvent} from 'react';
import s from './ValuesSettings.module.css'

type PropsType = {
	maxValue: number
	startValue: number
	setValue: (value: number, name: string) => void
	setIsIncrement: (value: boolean) => void
}

const ValuesSettings = ({maxValue, setIsIncrement, setValue, startValue}: PropsType) => {

	const classInputError = maxValue === startValue
		&& maxValue !== 0
		&& startValue !== 0
		|| maxValue < 0
		|| startValue < 0
		|| maxValue < startValue

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setIsIncrement(false)
		setValue(+e.currentTarget.value, e.currentTarget.name)
	}

	return (
		<div className={s.valueSettings}>
			<div className={s.text}>max value:
				<input name={'max'} className={classInputError ? s.error : s.input} type="number" value={maxValue}
							 onChange={changeHandler}/>
			</div>
			<div className={s.text}>start value:
				<input name={'start'} className={classInputError ? s.error : s.input} type="number" value={startValue}
							 onChange={changeHandler}/>
			</div>
		</div>
	);
};

export default ValuesSettings;