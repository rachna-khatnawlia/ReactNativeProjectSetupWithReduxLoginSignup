import { userLogin_api, userOtpVer_api, userSignup_api } from "../../config/url"
import { apiPost } from "../../utils/utils"
import { store } from "../store"
import types from "../types"

const { dispatch } = store
export const login = (data) => {
    dispatch({
        type: types.USER_LOGIN,
        payload: data
    })
}

export const loginWithFormData = (data) => {
    console.log(data, 'the given data for login with form data');
    return new Promise((resolve, reject) => {
        apiPost(userLogin_api, data).then((res) => {
            alert(res?.Result)
            console.log(res)
            login(res);
            resolve(res);
        }).catch(error => {
            reject(error);
        });
    });
}

export const signup = (data) => {
    return apiPost(userSignup_api, data)
}

export const verifySignupOtp = (data, loginData) => {
    console.log(data, 'the given data for otp verify');
    return new Promise((resolve, reject) => {
        apiPost(userOtpVer_api, data)
            .then((res) => {
                login(loginData);
                resolve(res);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const logout = (data) => {
    dispatch({
        type: types.USER_LOGOUT
    })

}