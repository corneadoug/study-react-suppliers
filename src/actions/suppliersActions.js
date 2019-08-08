export const FETCH_SUPPLIERS = 'suppliers:fetchSuppliers';

export function fetchSuppliers() {
    return {
        type: FETCH_SUPPLIERS,
        payload: {}
    }
}