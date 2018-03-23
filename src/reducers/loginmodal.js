import * as types from './actions/ModalActions';

const initialState = {
    expand: false
}

export default function loginmodal(state = initialState, action) {

    switch(action.type) {
        case types.LOGINMODAL_CLOSE:
            return {...state, expand: false};
        case types.LOGINMODAL_EXPAND:
            return {...state, expand: true};
        default:
            return state;
    }
}