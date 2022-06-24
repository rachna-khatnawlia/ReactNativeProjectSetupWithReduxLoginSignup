import types from "../types";

const initialState = {
    userLoginState: {}
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case types.USER_LOGIN:{
            const data = action.payload;
            console.log("data on login reducer",data)
            return{ 
                userLoginState: data
            }
        }
        case types.USER_LOGOUT:{
            return{
                userLoginState: undefined
            }
        }
        default: return state;
    }
}