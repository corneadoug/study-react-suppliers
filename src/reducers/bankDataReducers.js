import { SAVE_BANK_DATA, saveBankData } from '../actions/bankDataActions';

export default function bankDataReducer(state = '', { type, payload }) {
    switch (type) {
        case SAVE_BANK_DATA:
            return saveBankData(state, payload);
        default:
            return state;
    }
}

function saveBankData(state, {key, infos}) {
    let copyState = state.slice();
    copyState[key] = infos;
    return copyState;
}