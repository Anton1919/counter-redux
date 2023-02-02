import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import counterSettingsReducer from "./settingCouner-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
	counterSettings: counterSettingsReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof reducers>

