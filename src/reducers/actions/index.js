import * as types from './ModalActions';

export function loginClick() {
    return {
        type: types.LOGINMODAL_EXPAND
    };
}

export function bookClick() {
    return {
        type: types.BOOKMODAL_EXPAND
    };
}

export function bookClose() {
    return {
        type: types.BOOKMODAL_CLOSE
    };
}

