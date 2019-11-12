
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
    Switch
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';
import { Header } from '../Components/Components';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';


export default class EditProfile extends React.Component {

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

                <View style={{ flex: 1 }}>

                    <Header colors={['#d6e012', '#02aec4']}
                        title="Edit Profile"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.goBack() }}
                        Is1={require('../resources/back.png')}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF' }]}
                    />

                   
                    <View style={{ flex: 1, paddingHorizontal: dw(10) }}>

                        <Text style={{ color:'#000000', fontSize:dw(10), fontFamily:'Roboto-Medium', marginTop:dh(8), marginBottom:dh(4) }}>   
                            Let's update your email
                        </Text>

                        <View style={{ flexDirection:'row', height:50, width:'100%', alignSelf:'center', borderBottomWidth:1, borderColor:'#66666650' }}>
                            <View style={{ justifyContent:'center', alignItems:'center', width:'15%'}}>
                                <Image source={require('../resources/user.png')} style={Styles.HeaderIcon} />
                            </View>
                            <View style={{ justifyContent:'center', width:'85%'}}>
                                <TextInput 
                                    placeholder={'Enter the user name'}
                                    placeholderTextColor='#66666650'
                                />
                            </View>
                        </View>

                    </View>

                </View>




            </SafeAreaView>
        )
    }
}