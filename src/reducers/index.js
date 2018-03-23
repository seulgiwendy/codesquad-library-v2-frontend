import {combineReducers} from 'redux';
import loginmodal from './loginmodal';
import bookmodal from './bookmodal';

const reducers = combineReducers({
    loginmodal, bookmodal
});

export default reducers;