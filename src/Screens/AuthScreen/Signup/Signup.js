//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Alert, Image } from 'react-native';
import Button from '../../../components/ButtonComponent';
import Input from '../../../components/Input';
import WrapperContainer from '../../../components/WrapperContainer';
import { moderateScale } from '../../../styles/responsiveSize';
import ImagePicker from 'react-native-image-crop-picker';
import NavigationStrings from '../../../Navigation/NavigationStrings';
import GoBack from '../../../components/goBack';
import actions from '../../../redux/actions';

// create a component
const Signup = ({ navigation }) => {
    const [upDateData, setUpdateData] = useState({
        productImg: null,
        fname: '',
        email: '',
        pass: '',
        phone: '',
        gender: '',
    })
    const { productImg, fname, email, pass, phone, gender } = upDateData;
    const updateState = (data) => setUpdateData(state => ({ ...state, ...data }));
    const onChangeTextResult = (key, value) => {
        // console.log(key, value, "key");
        updateState({ [key]: value })
    }

    function takePhotoFromCamera() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            const imageuri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            onChangeTextResult("productImg", imageuri);
            console.log(productImg);
        });
    }
    function choosePhotoFromGallery() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            const imageuri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            onChangeTextResult("productImg", imageuri);
            console.log(productImg);
        });
    }
    const selectImage = () => {

        Alert.alert(
            "Upload Image",
            "Choose an option",
            [
                {
                    text: "Camera",
                    onPress: takePhotoFromCamera
                },
                {
                    text: "Gallery",
                    onPress: choosePhotoFromGallery,
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("OK Pressed"),
                    style: "cancel"
                }
            ]
        );
    }

    const _onSignup = async () => {
        let apiData = new FormData();
        apiData.append('name', fname);
        apiData.append('email', email);
        apiData.append('password', pass);
        apiData.append('phoneNumber', phone);
        apiData.append('gender', gender);
        apiData.append('profilePic', productImg);

        console.log("Signup data : ", apiData);

        try {
            const res = await actions.signup(apiData);
            console.log("signup api Response++++", res);
            navigation.navigate(NavigationStrings.OTP, { email: email, pass: pass })
        }
        catch (error) {
            console.log("signup error raised", error)
        }
    }

    return (
        <>
            <WrapperContainer>
                <ScrollView>
                    <GoBack headerText="Signup" />
                    <View style={{ height: 100, width: 100, alignSelf: 'center' }}>
                        {
                            (productImg != null) ?
                                <Image source={{ uri: productImg }} style={{ height: 100, width: 100 }} />
                                : null
                        }
                    </View>
                    <TouchableOpacity onPress={selectImage}>
                        <Text style={{ textAlign: 'center' }}>Image Gallery</Text>
                    </TouchableOpacity>
                    <Input
                        placeholder="Full Name"
                        onChangeText={(value) => onChangeTextResult('fname', value)}
                    />
                    <Input
                        placeholder="Email"
                        onChangeText={(value) => onChangeTextResult('email', value)}
                    />
                    <Input
                        placeholder="Phone Number"
                        onChangeText={(value) => onChangeTextResult('phone', value)}
                    />
                    <Input
                        placeholder="Gender"
                        onChangeText={(value) => onChangeTextResult('gender', value)}
                    />
                    <Input
                        placeholder="Password"
                        onChangeText={(value) => onChangeTextResult('pass', value)}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.OTP)}>
                        <Text>OTP</Text>
                    </TouchableOpacity>
                    <Text>{name} {email} {pass} {phone} {gender}</Text>
                </ScrollView>
            </WrapperContainer>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ padding: moderateScale(15), paddingVertical: moderateScale(5) }}>
                    <Button
                        buttonText='SignUp'
                        onPress={_onSignup}
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
export default Signup;
