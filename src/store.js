import { combineReducers, createStore } from 'redux';
import suppliersReducers from './reducers/suppliersReducers';
import bankDataReducers from './reducers/bankDataReducers';

const allReducers = combineReducers({
    suppliers: suppliersReducers,
    bankData: bankDataReducers,
})

const store = createStore(allReducers, {
    suppliers: [],
    bankData: {}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;