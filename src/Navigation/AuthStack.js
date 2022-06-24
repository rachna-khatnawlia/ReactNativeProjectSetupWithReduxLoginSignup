//import liraries
import React from 'react';
import { Login, Otp, Signup } from '../Screens';
import navigationStrings from './NavigationStrings';

// create a component
const AuthStack = (Stack) => {
    return (
        <>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} options={{ headerShown: false }} />
            {/* <Stack.Screen name={navigationStrings.FORGOT_PASSWORD} component={ForgotPassword} options={{ headerShown: false }} /> */}
            <Stack.Screen name={navigationStrings.OTP} component={Otp} options={{headerShown:false}}/>
            {/* <Stack.Screen name={navigationStrings.CONFIRM_OTP} component={ConfirmOtp} options={{headerShown:false}}/> */}

        </>
    );
};

//make this component available to the app
export default AuthStack;
