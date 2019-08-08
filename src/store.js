import { combineReducers, createStore } from 'redux';
import suppliersReducers from './reducers/suppliersReducers';

const allReducers = combineReducers({
    suppliers: suppliersReducers,
})

const store = createStore(allReducers, {
    suppliers: []
});

export default store;