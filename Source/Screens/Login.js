
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
    TextInput
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';



export default class Login extends React.Component {

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

                    <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={require('../resources/logo.png')} style={[Styles.SplashLogo, { bottom: 0, opacity: 1.0 }]} />
                    </View>

                    <View style={{ flex: 1, width: '100%', paddingHorizontal: dw(8), justifyContent: 'center', alignItems: 'center' }}>

                        <View style={Styles.InputView}>
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

                        <View style={Styles.InputView}>
                            <View style={Styles.InputIconView}>
                                <Image source={require('../resources/key.png')} style={Styles.Inputboxicon} />
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

                        <TouchableOpacity onPress={ () => {  Next('Drawer')  }} style={[Styles.OptionMenuView, { width: '90%', marginTop: dh(6) }]}>
                            <Text style={Styles.OptionMenuText}>LOGIN</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { Next('CoachRegister') }} style={{marginVertical:dh(1.5) }}>
                            <Text style={{ color: '#FFF', fontFamily: 'Roboto-Medium' }}>Don't have an account? Register</Text>
                        </TouchableOpacity>


                    </View>


                </LinearGradient>




            </SafeAreaView>
        );
    }
}