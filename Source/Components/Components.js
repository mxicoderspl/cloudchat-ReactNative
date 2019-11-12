import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    PixelRatio,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Animated
} from 'react-native';


// import Local Files 
import Styles from '../Styles/Styles';
import { dh, dw, AddOrientation, RemoveOrientation } from '../Functions/DHDW';

// import Libraries
import LinearGradient from 'react-native-linear-gradient';

//Function Creation
const Header = (props) => {

    const { title = '',
        style = {}, colors = [],
        titlestyle = {},
        onPress, onClick,
        Is1, Image1 = {},
        Is2, Image2 = {} } = props;

    return (

        <LinearGradient
            colors={colors}
            start={{ x: 0.9, y: 0.5 }} end={{ x: 0.0, y: 0.5 }}
            style={[{ width: dw(100), height: 60, flexDirection: 'row', alignItems: 'center',  }, style]}>

            <TouchableOpacity onPress={onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image source={Is1} style={Image1} />
            </TouchableOpacity>

            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={titlestyle}>{title}</Text>
            </View>

            <TouchableOpacity onPress={onClick} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image source={Is2} style={Image2} />
            </TouchableOpacity>

        </LinearGradient>
    )
}


const ChatHeader = (props) => {

    const { title = '',
        style = {}, colors = [],
        titlestyle = {},
        onPress, onClick,
        Is1, Image1 = {},
        Is2, Image2 = {} } = props;

    return (

        <LinearGradient
            colors={colors}
            start={{ x: 0.9, y: 0.5 }} end={{ x: 0.0, y: 0.5 }}
            style={[{ width: dw(100), height: 70, flexDirection: 'row', alignItems: 'center' }, style]}>

            <TouchableOpacity onPress={onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image source={Is1} style={Image1} />
            </TouchableOpacity>

            <View style={[Styles.UserProfileRound,{borderColor:'steelblue', borderWidth:3}]}>
                <Image source={Is2} style={Styles.UserProfileImage} />
            </View>

            <View style={{ flex: 4, justifyContent: 'center' }} >
                <Text style={titlestyle}>{title}</Text>
            </View>



        </LinearGradient>
    )
}



export { Header, ChatHeader };