import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import cartReducer from "./cart-reducer"
import productsReducer from './products-reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
 
// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store