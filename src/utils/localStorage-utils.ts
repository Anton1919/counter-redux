import {RootStateType} from "../state/store";

export const loadState = () => {
	const serializedState = localStorage.getItem("app-state")
	if (!serializedState) {
		return undefined
	}
	return JSON.parse(serializedState)
}

export const saveState = (state: RootStateType) => {
	const serializedState = JSON.stringify(state)
	localStorage.setItem("app-state", serializedState)
}