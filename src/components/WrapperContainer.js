//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const WrapperContainer = ({
    children,
    bgColor = colors.white,
    statusBarColor = colors.white,
    barStyle = 'dark-content',
}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: statusBarColor, }}>
            <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
            <View style={{padding:moderateScale(15)}}>
                {children}
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default WrapperContainer;
