type InitialStateType = {
	maxValue: number
	startValue: number
	value: number
}

type MaxValueActionType = ReturnType<typeof maxValueAC>
type StartValueActionType = ReturnType<typeof startValueAC>
type IncrementActionType = ReturnType<typeof incrementCounterAC>
type ResetCounterAction = ReturnType<typeof resetCounterAC>
type SetCounterAction = ReturnType<typeof setCounterAC>


export type ActionType = MaxValueActionType
	| StartValueActionType
	| IncrementActionType
	| ResetCounterAction
	| SetCounterAction

const MAX_VALUE = "MAX-VALUE"
const START_VALUE = "START-VALUE"
const INCREMENT_COUNTER = 'INCREMENT-COUNTER'
const RESET_COUNTER = 'RESET-COUNTER'
const SET_COUNTER = 'SET-COUNTER'

const initialState: InitialStateType = {
	maxValue: 0,
	startValue: 0,
	value: 0
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

		case INCREMENT_COUNTER :

			return {
				...state,
				value: state.value + 1
			}

		case RESET_COUNTER:
			return {
				...state,
				value: state.value = action.value
			}
		case SET_COUNTER:
			return {
				...state,
				value: action.value
			}

		default:
			return state
	}
}

export const maxValueAC = (num: number) => ({type: MAX_VALUE, number: num} as const)
export const startValueAC = (num: number) => ({type: START_VALUE, number: num} as const)
export const incrementCounterAC = () => ({type: INCREMENT_COUNTER} as const)
export const resetCounterAC = (value: number) => ({type: RESET_COUNTER, value} as const)
export const setCounterAC = (value: number) => ({type: SET_COUNTER, value} as const)

export default counterSettingsReducer
