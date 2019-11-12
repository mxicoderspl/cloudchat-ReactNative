
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
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';



export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    // This will render after all design(View Components) render
    componentDidMount() {
        AddOrientation(this);

        AsyncStorage.getItem('First').then((value)=>{
            if(value == "true"){
                setTimeout(() => {
                    this.props.navigation.navigate('ChooseOptions')
                },2000)
            }
            else{
                setTimeout(() => {
                    this.props.navigation.navigate('IntroSlider')
                    AsyncStorage.setItem('First',"true")
                },2000)
            }
        })
        // setTimeout(() => {
        //     this.props.navigation.navigate('IntroSlider')
        //     AsyncStorage.setItem('First',"true")
        // },2000)
    }

    // This will render before all design (View Components) render
    componentWillUnmount() {
        // For Dimention Changing Runtime Responsiveness
        RemoveOrientation(this);
    }

    render() {

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

                <ImageBackground source={require('../resources/SplashScreen.jpg')} style={{ width: '100%', height: '100%' }} imageStyle={{ opacity: 0.7 }} >
                    <LinearGradient colors={['#d6e01233', '#02aec433']} style={Styles.Splashback}>
                  
                        {/* <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Image source={require('../resources/logo.png')} style={Styles.SplashLogo} />
                        </View> */}

                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={Styles.SplashText}>Copyright@2019</Text>
                        </View>

                    </LinearGradient>
                </ImageBackground>




            </SafeAreaView>
        );
    }
}