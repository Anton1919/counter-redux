import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
// import counterReducer from "./counter-reducer";
import counterSettingsReducer from "./settingCouner-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
	// counter: counterReducer,
	counterSettings: counterSettingsReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof reducers>

