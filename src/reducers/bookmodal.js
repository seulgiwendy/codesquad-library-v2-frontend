import * as types from './actions/ModalActions';

const initialState = {
    expand: false
};

export default function bookmodal(state = initialState, action) {
    switch(action.type) {
        case types.BOOKMODAL_EXPAND:
            return {expand: !state.expand};
        case types.BOOKMODAL_CLOSE:
            return {expand: false};
        default:
            return state;
    }
}