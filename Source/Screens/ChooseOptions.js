
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
    TouchableOpacity
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';



export default class ChooseOptions extends React.Component {

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

                    <View style={{ flex: 1, width:'100%', justifyContent:'flex-end', alignItems:'center' }}>
                        <Image source={require('../resources/logo.png')} style={[Styles.SplashLogo,{bottom:0, opacity:1.0}]} />
                    </View>

                    <View style={{ flex: 1, width:'100%', paddingHorizontal:dw(8), justifyContent:'center', alignItems:'center' }}>

                        <TouchableOpacity onPress={() => { Next('CoachRegister') }} style={Styles.OptionMenuView}>
                            <Text style={Styles.OptionMenuText}>BECOME A COACH</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Next('MemberRegister') }} style={Styles.OptionMenuView}>
                            <Text style={Styles.OptionMenuText}>BECOME A CLIENT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Next('Login') }} style={Styles.OptionMenuView}>
                            <Text style={Styles.OptionMenuText}>LOGIN</Text>
                        </TouchableOpacity>

                    </View>


                </LinearGradient>




            </SafeAreaView>
        );
    }
}