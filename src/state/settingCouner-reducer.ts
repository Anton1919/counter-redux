import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./store";
import {AnyAction} from "redux";

type InitialStateType = {
	maxValue: number
	startValue: number
}

type MaxValueActionType = ReturnType<typeof maxValueAC>
type StartValueActionType = ReturnType<typeof startValueAC>

export type ActionType = MaxValueActionType | StartValueActionType

const MAX_VALUE = "MAX-VALUE"
const START_VALUE = "START-VALUE"

const initialState: InitialStateType = {
	maxValue: 0,
	startValue: 0
}

const counterSettingsReducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case MAX_VALUE :
			return {
				...state,
				maxValue: action.number
			}
		case START_VALUE :
			return {
				...state,
				startValue: action.number
			}

		default:
			return state
	}
}

export const maxValueAC = (num: number) => ({
	type: MAX_VALUE, number: num
})

export const startValueAC = (num: number) => ({
	type: START_VALUE, number: num
} as const)

export type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>
export type ThunkCounterDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>

export const getMaxValuesTC = (): ThunkType =>
	(dispatch: ThunkCounterDispatch) => {
		let maxValueAsString = localStorage.getItem("maxValue")
		if (maxValueAsString) {
			let newValue = JSON.parse(maxValueAsString)
			dispatch(maxValueAC(newValue))
		}
	}

export const getStartValuesTC = (): ThunkType =>
	(dispatch: ThunkCounterDispatch) => {
		let startValueAsString = localStorage.getItem("startValue")
		if (startValueAsString) {
			let newValue = JSON.parse(startValueAsString)
			dispatch(startValueAC(newValue))
		}
	}


export default counterSettingsReducer