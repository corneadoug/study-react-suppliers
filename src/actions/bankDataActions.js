export const SAVE_BANK_DATA = 'bankdata:saveBankData';

export function saveBankData(key, infos) {
    return {
        type: SAVE_BANK_DATA,
        payload: {
            key,
            infos
        }
    }
}