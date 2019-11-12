
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
import Dialog, { DialogContent, DialogFooter } from 'react-native-popup-dialog';


export default class BusinessUserProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this._readMore = this._readMore.bind(this);
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

    _readMore = () => {
        return (
            <Text style={{ color: '#000' }}>Read More</Text>
        )
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

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <ImageBackground source={require('../resources/30.jpg')} imageStyle={Styles.BusinessListImage} style={Styles.BusinessUserProfileImage}>

                            <View style={{ flexDirection: 'row', }}>

                                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={{ marginLeft: dw(3), position: 'absolute', zIndex: 1, marginTop: dh(2) }}>
                                    <Image source={require('../resources/back.png')} style={[Styles.HeaderIcon, { tintColor: '#FFF', height: dh(8), width: dw(8) }]} />
                                </TouchableOpacity>

                                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', paddingVertical: dh(2) }}>

                                    <Text style={Styles.ProfileUserName}>Aelxandra T</Text>
                                    <Text style={{ color: 'lightgrey' }}>Love Story Expert </Text>
                                    <View style={Styles.BusinessListiconviewtop}>
                                        <Image source={require('../resources/29.jpg')} style={[Styles.BusinessListIconlike, { height: dh(5), width: dw(5) }]} />
                                        <Text style={[Styles.BusinessListTopText, { fontSize: dw(3), color: 'lightgrey', }]}>Toronto, Canada</Text>
                                    </View>

                                </View>


                            </View>


                            <View style={[Styles.BusinessListTitleBottom, { alignSelf: 'flex-end', top: 0, backgroundColor: 'none', flexDirection: 'column', alignItems: 'flex-end', paddingRight: dw(5) }]}>

                                <View style={{ alignSelf: 'flex-end', paddingVertical: dh(1) }}>
                                    <Image source={require('../resources/star.png')} style={Styles.BusinessListIconstar} />


                                    <View style={[Styles.BusinessListiconviewtop, { padding: 10, height: 'auto' }]}>
                                        <Image source={require('../resources/heart.png')} style={Styles.BusinessListIconlike} />
                                        <Text style={[Styles.BusinessListTopText, { fontSize: dw(3), color: '#FFF' }]}>2,137 </Text>
                                    </View>
                                </View>


                            </View>

                            <TouchableOpacity style={{ position: 'absolute', alignSelf: 'center', zIndex: 1, top: dh(18) }}>
                                <Image source={require('../resources/youtube.png')} style={[Styles.BusinessListIconlike, { height: dh(7), width: dw(12) }]} />
                            </TouchableOpacity>

                        </ImageBackground>



                        <View style={{ flexDirection: 'column', width: '100%', marginVertical: dh(5) }}>

                            <View style={Styles.ProfileCallingInfo}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <TouchableOpacity style={Styles.CallingButton}>
                                        <Image source={require('../resources/call.png')} style={[Styles.BusinessListIconlike, { bottom: 0, tintColor: '#ff5f18', height: dh(6.5), width: dw(6.5) }]} />
                                    </TouchableOpacity>
                                    <Text style={Styles.CallingText}>Live Voice Call</Text>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => { this.setState({ visible: true }) }} style={Styles.CallingSquareButton}>
                                        <Text style={Styles.CallingSquareButtonText}>$1.00/min</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={Styles.ProfileCallingInfo}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <TouchableOpacity onPress={() => { Next('Messages') }} style={Styles.CallingButton}>
                                        <Image source={require('../resources/chat-icon.png')} style={[Styles.BusinessListIconlike, { bottom: 0, tintColor: '#ff5f18', height: dh(6.5), width: dw(6.5) }]} />
                                    </TouchableOpacity>
                                    <Text style={Styles.CallingText}>Live Chatting</Text>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => { this.setState({ visible: true }) }} style={Styles.CallingSquareButton}>
                                        <Text style={Styles.CallingSquareButtonText}>$1.00/min</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={Styles.ProfileCallingInfo}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <TouchableOpacity onPress={() => { Next('Calling') }} style={Styles.CallingButton}>
                                        <Image source={require('../resources/16.jpg')} style={[Styles.BusinessListIconlike, { bottom: 0, tintColor: '#ff5f18', height: dh(6.5), width: dw(6.5) }]} />
                                    </TouchableOpacity>
                                    <Text style={Styles.CallingText}>Live Video Call</Text>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => { this.setState({ visible: true }) }} style={Styles.CallingSquareButton}>
                                        <Text style={Styles.CallingSquareButtonText}>$1.00/min</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={Styles.AboutMyService}>

                            <Text style={Styles.ServiceProfileTitles}>
                                About My Services
                            </Text>

                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ color: '#00000070', marginVertical: dh(0.5), fontSize: dw(4) }} numberOfLines={6} renderTruncatedFooter={this._ReadMore}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                                <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                                    <Text style={[Styles.ServiceProfileTitles, { fontSize: dw(3.5), fontFamily: 'Roboto-Bold' }]}>
                                        View more ->
                                </Text>
                                </TouchableOpacity>
                            </View>

                        </View>




                        <View style={[Styles.AboutMyService, { marginVertical: dh(3) }]}>

                            <Text style={Styles.ServiceProfileTitles}>
                                About Me
                            </Text>

                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ color: '#00000070', marginVertical: dh(0.5), fontSize: dw(4) }} numberOfLines={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                                <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                                    <Text style={[Styles.ServiceProfileTitles, { fontSize: dw(3.5), fontFamily: 'Roboto-Bold' }]}>
                                        View more ->
                                </Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                        <View style={Styles.AboutMyService}>

                            <Text style={Styles.ServiceProfileTitles}>
                                Reviewes
                            </Text>

                            <FlatList
                                data={[1, 2, 3]}
                                renderItem={({ item }) =>


                                    <View style={{ width: '95%', alignSelf: 'center', marginVertical: dh(2) }}>

                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={Styles.UserProfileRound}>
                                                <Image source={require('../resources/19.jpg')} style={Styles.UserProfileImage} />
                                            </View>
                                            <View style={{ paddingLeft: dw(3), width: '85%' }}>
                                                <Text style={Styles.ProfileNameText}>Eugene Rodriquez</Text>
                                                <Text style={Styles.ProfileNamesubText}>2 hours ago</Text>
                                                <Text style={[Styles.ProfileNamesubText, { marginVertical: dh(2), fontFamily: 'Roboto' }]}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Text>
                                                <TouchableOpacity>
                                                    <Text style={Styles.ReplyButton}>Reply</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                }
                            />

                        </View>


                        {/*  Dialouge Box for Card Details */}

                        <Dialog
                            visible={this.state.visible}
                            onTouchOutside={() => {
                                this.setState({ visible: false });
                            }}
                            width='0.8'
                            height='auto'
                            footer={
                                <DialogFooter>
                                    <TouchableOpacity onPress={() => { this.setState({ visible: false }) }} style={{ width: '100%', height: 50, backgroundColor: '#ff5f18', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#FFF', fontSize: dw(5), fontFamily: 'Roboto-Bold', textAlign: 'center' }}>OK</Text>
                                    </TouchableOpacity>
                                </DialogFooter>
                            }
                        >

                            <DialogContent >
                                <TouchableOpacity onPress={() => { this.setState({ visible: false }) }}
                                    style={{ position: 'absolute', alignSelf: 'flex-end', top: 0, right: 0, backgroundColor: '#FFF', height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignContent: 'center', overflow: 'hidden' }}>
                                    <Image source={require('../resources/close.png')} style={Styles.HeaderIcon} />
                                </TouchableOpacity>



                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: dh(7) }}>
                                    <Image source={require('../resources/11.jpg')} style={[Styles.BusinessListIconlike, { height: dh(10), width: dw(10) }]} />
                                    <Text style={[Styles.CallingText, { fontSize: dw(7), color: '#00000070' }]}>My Services</Text>
                                </View>

                                <Text style={[Styles.ProfileNamesubText, { marginVertical: dh(2), fontFamily: 'Roboto' }]}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>

                                <View style={{alignItems:'flex-start', paddingLeft:dw(7)}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: dh(0.5) }}>
                                        <Image source={require('../resources/call.png')} style={[Styles.BusinessListIconlike, { tintColor: '#ff5f18', height: dh(4), width: dw(4) }]} />
                                        <Text style={[Styles.CallingText, { fontSize: dw(5), color: '#00000070' }]}>$1 For Live Call</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'center', marginTop: dh(0.5) }}>
                                        <Image source={require('../resources/16.jpg')} style={[Styles.BusinessListIconlike, { height: dh(4), width: dw(4) }]} />
                                        <Text style={[Styles.CallingText, { fontSize: dw(5), color: '#00000070' }]}>$1 For Live Video Call</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'center', marginTop: dh(0.5) }}>
                                        <Image source={require('../resources/chat-icon.png')} style={[Styles.BusinessListIconlike, { height: dh(4), width: dw(4) }]} />
                                        <Text style={[Styles.CallingText, { fontSize: dw(5), color: '#00000070' }]}>$1 For Live Chatting</Text>
                                    </View>
                                </View>




                            </DialogContent>
                        </Dialog>

                        {/* *** */}




                    </ScrollView>


                </View>




            </SafeAreaView>
        )
    }
}