import { FETCH_SUPPLIERS } from '../actions/suppliersActions';

export default function suppliersReducer(state = '', { type, payload }) {
    switch (type) {
        case FETCH_SUPPLIERS:
            return fetchSuppliers();
        default:
            return state;
    }
}

function fetchSuppliers() {
    return ['A'];
}