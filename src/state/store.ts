import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import counterSettingsReducer from "./settingCouner-reducer";
import thunkMiddleware from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

const reducers = combineReducers({
	counterSettings: counterSettingsReducer
})

export const store = legacy_createStore(reducers, loadState(), applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof reducers>

store.subscribe(() => {
	saveState({
		counterSettings: store.getState().counterSettings
	})
})

