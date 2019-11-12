
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
    FlatList,
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';
import { Header, ReadMoreButton } from '../Components/Components';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';



export default class Calling extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    // This will render after all design(View Components) render
    componentDidMount() {
        // For Dimention Changing Runtime Responsiveness
        AddOrientation(this);
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

                <ImageBackground source={require('../resources/34.jpg')} style={{ width: '100%', height: '100%' }}  >

                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={{ marginLeft: dw(3), position: 'absolute', zIndex: 1 }}>
                        <Image source={require('../resources/back.png')} style={[Styles.HeaderIcon, { tintColor: '#FFF', height: dh(8), width: dw(8) }]} />
                    </TouchableOpacity>


                    <Image source={require('../resources/12.jpg')} style={{ width: '30%', height: '20%', marginLeft: dw(3), marginTop: dh(7) }} />

                    <View style={Styles.BottomCalling}>

                        <Image source={require('../resources/31.jpg')} style={{ width: dw(15), height: dh(20), resizeMode: 'contain' }} />
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={require('../resources/17.jpg')} style={{ width: dw(25), marginBottom:dh(10), height: dh(25), resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <Image source={require('../resources/23.jpg')} style={{ width: dw(15), height: dh(20), resizeMode: 'contain' }} />

                    </View>


                </ImageBackground>




            </SafeAreaView>
        );
    }
}