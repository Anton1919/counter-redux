import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingCounter from "./components/SettingsCouner/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType,} from "./state/store";
import {
	getMaxValuesTC,
	getStartValuesTC,
	incrementCounterAC, resetCounterAC,
	ThunkCounterDispatch
} from "./state/settingCouner-reducer";

function App() {

	const [isIncrement, setIsIncrement] = useState<boolean>(false)

	const value = useSelector<RootStateType, number>(state => state.counterSettings.value)
	const startValue = useSelector<RootStateType, number>(state => state.counterSettings.startValue)
	const maxValue = useSelector<RootStateType, number>(state => state.counterSettings.maxValue)

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
				maxValue={maxValue}
				startValue={startValue}
				isIncrement={isIncrement}
				increment={incrementCounter}
				reset={resetCounter}
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
