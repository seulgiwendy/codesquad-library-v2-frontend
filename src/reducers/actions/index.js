import * as types from './ModalActions';

export function loginExpand() {
    return {
        type: types.LOGINMODAL_EXPAND
    };
}

export function loginClose() {
    return {
        type: types.LOGINMODAL_CLOSE
    };
}

export function bookExpand() {
    return {
        type: types.BOOKMODAL_EXPAND
    };
}

export function bookClose() {
    return {
        type: types.BOOKMODAL_CLOSE
    };
}