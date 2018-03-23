import * as types from './actions/ModalActions';

const initialState = {
    expand: false
};

export default function bookmodal(state = initialState, action) {
    switch(action.type) {
        case types.BOOKMODAL_CLOSE:
            return {...state, expand: false};
        case types.BOOKMODAL_EXPAND:
            return {...state, expand: true};
        default:
            return state;
    }
}