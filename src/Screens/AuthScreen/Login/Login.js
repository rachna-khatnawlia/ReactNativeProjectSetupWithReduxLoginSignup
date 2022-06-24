//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Button from '../../../components/ButtonComponent';
import Input from '../../../components/Input';
import WrapperContainer from '../../../components/WrapperContainer';
import NavigationStrings from '../../../Navigation/NavigationStrings';
import { moderateScale } from '../../../styles/responsiveSize';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';


// create a component
const Login = ({ navigation }) => {
    const [upDateData, setUpdateData] = useState({
        email: '',
        pass: '',
    })
    const { email, pass } = upDateData;
    const updateState = (data) => setUpdateData(state => ({ ...state, ...data }));
    const onChangeTextResult = (key, value) => {
        // console.log(key, value, "key");
        updateState({ [key]: value })
    }

    const _onLogin = async () => {
        const apiData = {
            email: email,
            password: pass
        }
        try {
            await actions.loginWithFormData(apiData)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <WrapperContainer>
                <ScrollView>
                    <Text>Login</Text>
                    <Input
                        placeholder="Email"
                        onChangeText={(value) => onChangeTextResult('email', value)}
                    />
                    <Input
                        placeholder="Password"
                        onChangeText={(value) => onChangeTextResult('pass', value)}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    {/* <Text>{email} {pass}</Text> */}
                    <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.SIGNUP)}>
                        <Text>Don't have an account signup now</Text>
                    </TouchableOpacity>
                </ScrollView>


            </WrapperContainer>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingHorizontal: moderateScale(15) }}>
                    <Button
                        buttonText='Login'
                        onPress={_onLogin}
                    />
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    forgot: {
        fontSize: moderateScale(15),
        color: colors.themeredColor,
        fontWeight: '400',
        textAlign: 'right'
    }
});

//make this component available to the app
export default Login;
