
import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    AsyncStorage,
    TouchableOpacity,
    TextInput,
    Picker
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';



export default class MemberRegister extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    // This will render after all design(View Components) render
    componentDidMount() {
        AddOrientation(this);
    }

    // This will render before all design (View Components) render
    componentWillUnmount() {
        // For Dimention Changing Runtime Responsiveness
        RemoveOrientation(this);
    }

    render() {

        var Next = this.props.navigation.navigate

        return (
            <SafeAreaView style={Styles.Container}>

                <StatusBar
                    barStyle="dark-content"
                    // dark-content, light-content and default
                    hidden={true}
                    //To hide statusBar
                    backgroundColor="transparent"
                    //Background color of statusBar only works for Android
                    translucent={true}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={false}
                />

                <LinearGradient colors={['#d6e012', '#02aec4']} style={Styles.Splashback}>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                        <View style={{ height: dh(25), width: '100%', justifyContent: 'flex-end', alignItems: 'center', bottom: dh(-3) }}>
                            <Image source={require('../resources/logo.png')} style={Styles.SignUplogo} />
                        </View>

                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: dw(5.5), fontFamily: 'Roboto-Bold', color: '#FFF', textAlign: 'center' }}>Client Sign-Up</Text>
                        </View>

                        <View style={{ flex: 1, width: '100%', paddingHorizontal: dw(8), justifyContent: 'flex-start', alignItems: 'center' }}>

                            <View style={Styles.SignupInputView}>
                                <View style={Styles.InputIconView}>
                                    <Image source={require('../resources/user.png')} style={[Styles.Inputboxicon, { width: dw(4.3), height: dh(4.3) }]} />
                                </View>
                                <View style={Styles.InputTextInputView}>
                                    <TextInput
                                        placeholder={'First Name'}
                                        placeholderTextColor='#00000061'
                                        style={Styles.TextInput}
                                    />
                                </View>
                            </View>

                            <View style={Styles.SignupInputView}>
                                <View style={Styles.InputIconView}>
                                    <Image source={require('../resources/mail.png')} style={[Styles.Inputboxicon, { width: dw(4.3), height: dh(4.3) }]} />
                                </View>
                                <View style={Styles.InputTextInputView}>
                                    <TextInput
                                        placeholder={'Email'}
                                        placeholderTextColor='#00000061'
                                        style={Styles.TextInput}
                                    />
                                </View>
                            </View>

                            <View style={Styles.SignupInputView}>
                                <View style={Styles.InputIconView}>
                                    <Image source={require('../resources/flag.png')} style={Styles.Inputboxicon} />
                                </View>
                                <View style={Styles.InputTextInputView}>
                                    <Picker
                                        selectedValue={this.state.language}
                                        style={{ height:'100%', width: '100%', color: '#00000060',  }}
                                        mode='dropdown'
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ language: itemValue })
                                        }>
                                        <Picker.Item label="America" value="America" />
                                        <Picker.Item label="Canada" value="Canada" />
                                        <Picker.Item label="China" value="China" />
                                        <Picker.Item label="India" value="India" />
                                        <Picker.Item label="Japan" value="Japan" />
                                        <Picker.Item label="London" value="London" />
                                        <Picker.Item label="Switzerland" value="Switzerland" />
                                    </Picker>
                                </View>
                            </View>

                            <View style={Styles.SignupInputView}>
                                <View style={Styles.InputIconView}>
                                    <Image source={require('../resources/key.png')} style={[Styles.Inputboxicon, { width: dw(5), height: dh(5) }]} />
                                </View>
                                <View style={Styles.InputTextInputView}>
                                    <TextInput
                                        placeholder={'Password'}
                                        placeholderTextColor='#00000061'
                                        style={Styles.TextInput}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>

                            <View style={Styles.SignupInputView}>
                                <View style={Styles.InputIconView}>
                                    <Image source={require('../resources/key.png')} style={Styles.Inputboxicon} />
                                </View>
                                <View style={Styles.InputTextInputView}>
                                    <TextInput
                                        placeholder={'Confirm Password'}
                                        placeholderTextColor='#00000061'
                                        style={Styles.TextInput}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => { Next('Login') }} style={[Styles.OptionMenuView, { width: '90%', marginTop: dh(16) }]}>
                                <Text style={Styles.OptionMenuText}>Register Now!</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => { Next('Login') }} style={{ marginVertical: dh(1.5) }}>
                                <Text style={{ color: '#FFF', fontFamily: 'Roboto-Medium' }}>Already a Member? Login</Text>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>


                </LinearGradient>




            </SafeAreaView>
        );
    }
}