import { createStore } from "redux"
import { createWrapper } from "next-redux-wrapper"
import rootReducers from "./reducers"

const store = () => createStore(rootReducers)

export const wrapper = createWrapper(store)
