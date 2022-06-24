//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

// create a component
const Routes = () => {
    const loginStatus = useSelector(state => state.loginReducer.userLoginState);
    console.log("login data on routes page", loginStatus);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {loginStatus && loginStatus?.token ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
};

//make this component available to the app
export default Routes;
