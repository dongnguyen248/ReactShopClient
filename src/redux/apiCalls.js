import {
    loginFailure,
    loginStart,
    loginSuccess,
    logoutSuccess,
} from './userRedux';
import { publicRequest } from '../requestMethod';
export const login = async (dispatch, user) => {
    dispatch(loginStart);
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
export const logout = (dispatch) => {
    console.log('action');
    dispatch(logoutSuccess());
};
