import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingCounter from "./components/SettingsCouner/SettingCounter";
import {incrementCounterAC, resetCounterAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType,} from "./state/store";
import {getMaxValuesTC, getStartValuesTC, ThunkCounterDispatch} from "./state/settingCouner-reducer";

function App() {


	const [error, setError] = useState<null|string>(null  )
	const [isIncrement, setIsIncrement] = useState<boolean>(false)

	const value = useSelector<RootStateType, number>(state => state.counter.value)
	const startValue = useSelector<RootStateType, number> (state => state.counterSettings.startValue)
	const maxValue = useSelector<RootStateType, number> (state => state.counterSettings.maxValue)

	const dispatch: ThunkCounterDispatch = useDispatch()

	const incrementCounter = () => {
		dispatch(incrementCounterAC())
	}

	const resetCounter = () => {
		dispatch(resetCounterAC(startValue))
	}

	useEffect(() => {
		dispatch(getMaxValuesTC())
		dispatch(getStartValuesTC())
	}, [dispatch])


	return (
		<div className="App">
			<Counter
				error={error}
				isIncrement={isIncrement}
				increment={incrementCounter}
				reset={resetCounter} maxValue={maxValue}
				value={value}
			/>
			<SettingCounter
				maxValue={maxValue}
				startValue={startValue}
				isIncrement={isIncrement}
				setIsIncrement={setIsIncrement}/>
		</div>
	);
}

export default App;
