type StateType = { value: number }
type IncrementActionType = ReturnType<typeof incrementCounterAC>
type ResetCounterAction = ReturnType<typeof resetCounterAC>
type SetCounterAction = ReturnType<typeof setCounterAC>

type ActionType = IncrementActionType | ResetCounterAction | SetCounterAction

const INCREMENT_COUNTER = 'INCREMENT-COUNTER'
const RESET_COUNTER = 'RESET-COUNTER'
const SET_COUNTER = 'SET-COUNTER'

const initialState: StateType = {
	value: 0
}

const counterReducer = (state = initialState, action: ActionType): StateType => {
	switch (action.type) {
		case INCREMENT_COUNTER :

			return {
				...state,
				value: state.value + 1
			}

		case RESET_COUNTER:
			return {
				...state,
				value: state.value = 0
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

export const incrementCounterAC = () => ({type: INCREMENT_COUNTER} as const)
export const resetCounterAC = () => ({type: RESET_COUNTER} as const)
export const setCounterAC = (value: number) => ({type: SET_COUNTER, value} as const)

export default counterReducer