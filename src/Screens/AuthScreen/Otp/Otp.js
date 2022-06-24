import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../../../components/ButtonComponent';
import GoBack from '../../../components/goBack';
import Input from '../../../components/Input';
import WrapperContainer from '../../../components/WrapperContainer';
import NavigationStrings from '../../../Navigation/NavigationStrings';
import actions from '../../../redux/actions';
import { moderateScale } from '../../../styles/responsiveSize';

// create a component
const Otp = ({ navigation, route }) => {
    const [code, setCode] = useState();

    const emailForOtpVerification = route?.params?.email;
    const passForOtpVerification = route?.params?.pass;

    console.log(emailForOtpVerification)
    const _verifyOtp = async () => {
        let apiData = {
            email: emailForOtpVerification,
            otpCode: code
        }

        console.log("otp verification api data", apiData);

        try {
            const loginData = {emailForOtpVerification, passForOtpVerification};
            const res = await actions.verifySignupOtp(apiData, loginData);
            console.log("opt verify res++++", res);
            alert(res?.Result);
        } catch (e) {
            console.log("otp verify error", e)
        }
    }
    return (
        <>
            <WrapperContainer>
                <ScrollView>
                    <GoBack headerText="OTP" />

                    <Text>Email</Text>
                    <Input
                        placeholder={emailForOtpVerification}
                        editable={false}
                    />

                    <Text>Enter OTP</Text>
                    <SmoothPinCodeInput
                        value={code}
                        onTextChange={code => setCode(code)}
                        cellSize={56}
                        codeLength={4}
                        cellStyle={{
                            borderRadius: moderateScale(5),
                            marginLeft: moderateScale(0),
                            backgroundColor: 'white',
                            borderWidth: 1
                        }}
                    />
                    <Text>{code}</Text>
                </ScrollView>
            </WrapperContainer>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ padding: moderateScale(15), paddingVertical: moderateScale(5) }}>
                    <Button
                        buttonText='Verify Otp'
                        onPress={_verifyOtp}
                    />

                </View>
            </KeyboardAvoidingView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Otp;
