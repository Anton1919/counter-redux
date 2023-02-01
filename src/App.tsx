import React, {useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingCounter from "./components/SettingsCouner/SettingCounter";
import {incrementCounterAC, resetCounterAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType,} from "./state/store";
import {getMaxValuesTC, getStartValuesTC, ThunkCounterDispatch} from "./state/settingCouner-reducer";

function App() {

	const value = useSelector<RootStateType, number>(state => state.counter.value)
	const dispatch: ThunkCounterDispatch = useDispatch()

	const incrementCounter = () => {
		/*	if() { //max === count
				alert('error')
			}*/
		dispatch(incrementCounterAC())
	}

	const resetCounter = () => {
		dispatch(resetCounterAC())
	}

	useEffect(() => {
		dispatch(getMaxValuesTC())
		dispatch(getStartValuesTC())
	}, [])


	return (
		<div className="App">
			<Counter increment={incrementCounter} reset={resetCounter} value={value}/>
			<SettingCounter/>
		</div>
	);
}

export default App;
