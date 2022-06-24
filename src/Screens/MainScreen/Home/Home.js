//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import WrapperContainer from '../../../components/WrapperContainer';
import actions from '../../../redux/actions';

// create a component
const Home = () => {
    const onLogout = () =>{
        try{
            actions.logout()
        }catch(e){
            console.log(e);
        }
    }
    return (
        <WrapperContainer>
            <Text>Home</Text>
            <TouchableOpacity onPress={onLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default Home;
