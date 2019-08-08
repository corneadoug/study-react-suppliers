import { FETCH_SUPPLIERS } from '../actions/suppliersActions';
import suppliersData from '../assets/suppliers.json';

export default function suppliersReducer(state = '', { type, payload }) {
    switch (type) {
        case FETCH_SUPPLIERS:
            return fetchSuppliers(state);
        default:
            return state;
    }
}

function fetchSuppliers(state) {
    if (state.length === 0) {
        // get data in array format
        const suppliersArray = Object.keys(suppliersData).map((key) => ({...suppliersData[key], key}));
        // filter to only get active clients
        const filteredArray = suppliersArray.filter((obj) => (obj.isActive));
        // return ordered array
        return filteredArray.sort((a, b) => (a.rank > b.rank ? 1 : 0));
    } else {
        // no need to load data again
        return state;
    }
    
}