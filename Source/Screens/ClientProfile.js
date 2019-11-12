
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
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import Dialog, { DialogContent } from 'react-native-popup-dialog';



export default class ClientProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
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
                        title="Client Profile"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.goBack() }}
                        Is1={require('../resources/back.png')}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF' }]}
                    />

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width: '100%', height: '100%' }}>



                        <ImageBackground source={require('../resources/pic4.jpg')}
                            style={{ height: 275, width: '100%', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}
                            imageStyle={{ height: '100%', width: '100%', resizeMode: 'cover', opacity: 0.6 }} >

                            <View style={Styles.ClientProfileView}>
                                <Image source={require('../resources/18.jpg')} style={Styles.ClientProfilePicture} />

                                <TouchableOpacity style={Styles.EditClientProfilePic}>
                                    <Image source={require('../resources/camera.png')} style={Styles.EditPicture} />
                                </TouchableOpacity>
                            </View>

                            <Text style={Styles.UserNameClient}>Victor Niculici</Text>

                        </ImageBackground>

                        <View style={{ flex: 1, paddingHorizontal: dw(10), paddingVertical:dh(4) }}>

                            <View style={Styles.EditProfileFields}>
                                <View style={Styles.EditFieldsLeft}>
                                    <Text style={Styles.EditText}>First Name</Text>
                                    <Text style={[Styles.EditText, { color: '#00000080' }]}>niculici.victor</Text>
                                </View>
                                <View style={Styles.EditFieldsRight}>
                                    <Text onPress={() => { Next('EditProfile') }} style={[Styles.EditText,{fontSize:dw(3)}]}>Edit</Text>
                                </View>
                            </View>

                            <View style={Styles.EditProfileFields}>
                                <View style={Styles.EditFieldsLeft}>
                                    <Text style={Styles.EditText}>Email</Text>
                                    <Text style={[Styles.EditText, { color: '#00000080' }]}>niculici.victor@gmail.com</Text>
                                </View>
                                <View style={Styles.EditFieldsRight}>
                                    <Text onPress={() => { Next('EditProfile') }} style={[Styles.EditText,{fontSize:dw(3)}]}>Edit</Text>
                                </View>
                            </View>

                            <View style={Styles.EditProfileFields}>
                                <View style={Styles.EditFieldsLeft}>
                                    <Text style={Styles.EditText}>Location</Text>
                                    <Text style={[Styles.EditText, { color: '#00000080' }]}>Bucharest, Romania</Text>
                                </View>
                                <View style={Styles.EditFieldsRight}>
                                    <Text onPress={() => { Next('EditProfile') }} style={[Styles.EditText,{fontSize:dw(3)}]}>Edit</Text>
                                </View>
                            </View>

                            <View style={Styles.EditProfileFields}>
                                <View style={Styles.EditFieldsLeft}>
                                    <Text style={Styles.EditText}>Card Number</Text>
                                    <Text style={[Styles.EditText, { color: '#00000080' }]}>**** **** **** 3847</Text>
                                </View>
                                <View style={Styles.EditFieldsRight}>
                                    <Text onPress={() => { this.setState({ visible: true }) }} style={[Styles.EditText,{fontSize:dw(3)}]}>Edit</Text>
                                </View>
                            </View>


                            {/*  Dialouge Box for Card Details */}


                            <Dialog
                                visible={this.state.visible}
                                onTouchOutside={() => {
                                    this.setState({ visible: false });
                                }}
                                width='0.8'
                                height='auto'
                            >

                                <DialogContent >
                                    {/* <View style={{ height:'100%', width:'100%', borderColor:'#000', borderWidth:1 }}>  */}
                                    <TouchableOpacity onPress={() => { this.setState({ visible: false }) }}
                                        style={{ position: 'absolute', alignSelf: 'flex-end', top: 0, right: 0, backgroundColor: '#FFF', height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignContent: 'center', overflow: 'hidden' }}>
                                        <Image source={require('../resources/close.png')} style={Styles.HeaderIcon} />
                                    </TouchableOpacity>

                                    <View >
                                        <Text style={[Styles.ProfileNameText, { color: '#00000060', fontFamily: 'Roboto-Medium', textAlign: 'center', marginVertical: dh(5) }]}>Update Card</Text>


                                        <Text style={[Styles.EditText, { color: '#00000060' }]}>Card Number</Text>

                                        <View style={[Styles.EditProfileFields, { borderColor: '#00000060', borderWidth: 1, height:60, marginVertical:dh(1) }]}>
                                            <View style={[Styles.EditFieldsLeft, { justifyContent: 'center', paddingLeft: dw(5) }]}>
                                                <Text style={[Styles.EditText, { color: '#00000060' }]}>**** **** **** 3847</Text>
                                            </View>
                                            <View style={Styles.EditFieldsRight}>
                                                <TouchableOpacity onPress={() => { this.setState({ visible:false }), Next('ScanCard') }} >
                                                    <Image source={require('../resources/camera.png')} style={[Styles.EditPicture, { tintColor: '#ff5f18' }]} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                        <Text style={[Styles.EditText, { color: '#00000060' }]}>Name on Card</Text>
                                        <View style={[Styles.EditProfileFields, { borderColor: '#00000060', borderWidth: 1, height:60, marginVertical:dh(1) }]}>
                                            <View style={[Styles.EditFieldsLeft, { justifyContent: 'center', paddingLeft: dw(5) }]}>
                                                <Text style={[Styles.EditText, { color: '#00000060' }]}>Randy Boratto</Text>
                                            </View>
                                        </View>

                                        <View style={{ width: '100%', flexDirection: 'row' }}>
                                            <View style={{ width: '70%', }}>
                                                <Text style={[Styles.EditText, { color: '#00000060' }]}>Expiration</Text>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={[Styles.EditProfileFields, { borderColor: '#00000060', borderWidth: 1, width: '45%', height:60, marginVertical:dh(1)  }]}>
                                                        <View style={[Styles.EditFieldsLeft, { justifyContent: 'center', flexDirection: 'row', paddingLeft: dw(5), alignItems: 'center' }]}>
                                                            <Text style={[Styles.EditText, { color: '#00000060' }]}>09</Text>
                                                            <Image source={require('../resources/down.png')} style={[Styles.EditPicture, { tintColor: '#00000060' }]} />
                                                        </View>
                                                    </View>
                                                    <View style={[Styles.EditProfileFields, { borderColor: '#00000060', borderWidth: 1, width: '45%', marginHorizontal: 5, height:60, marginVertical:dh(1) }]}>
                                                        <View style={[Styles.EditFieldsLeft, { justifyContent: 'center', flexDirection: 'row', paddingLeft: dw(5), alignItems: 'center' }]}>
                                                            <Text style={[Styles.EditText, { color: '#00000060' }]}>2021</Text>
                                                            <Image source={require('../resources/down.png')} style={[Styles.EditPicture, { tintColor: '#00000060' }]} />
                                                        </View>
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={{ width: '30%' }}>

                                                <Text style={[Styles.EditText, { color: '#00000060' }]}>CVV</Text>
                                                <View style={[Styles.EditProfileFields, { borderColor: '#00000060', borderWidth: 1, width: '100%', height:60, marginVertical:dh(1) }]}>
                                                    <View style={[Styles.EditFieldsLeft, { justifyContent: 'center', paddingLeft: dw(5) }]}>
                                                        <Text style={[Styles.EditText, { color: '#00000060' }]}>***</Text>
                                                    </View>
                                                </View>

                                            </View>

                                        </View>

                                        <TouchableOpacity style={[Styles.EditProfileFields, { backgroundColor:'#ff5f18', justifyContent:'center', alignItems:'center' }]}>       
                                                <Text style={[Styles.EditText, { color: '#FFFFFF' }]}>Update Card Detail</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={[Styles.EditProfileFields, {marginVertical:0, justifyContent:'center', alignItems:'center' }]}>       
                                                <Text style={[Styles.EditText, { color: '#00000060' }]}>Remove Card</Text>
                                        </TouchableOpacity>

                                    </View>
                                    {/* </View> */}

                                </DialogContent>
                            </Dialog>


                            {/* *** */}


                        </View>
                    </ScrollView>





                </View>




            </SafeAreaView>
        )
    }
}