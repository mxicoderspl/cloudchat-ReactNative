
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
import { Header, ChatHeader } from '../Components/Components';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';
import { isTemplateElement } from '@babel/types';

const Data = [
    {
        image: require('../resources/1.jpg'),
        Title: 'BUSINESS'
    },
    {
        image: require('../resources/3.jpg'),
        Title: 'HEALTH & WELLNESS'
    },
    {
        image: require('../resources/6.jpg'),
        Title: 'RELATIONSHIP'
    },
    {
        image: require('../resources/8.jpg'),
        Title: 'SPIRITUAL'
    },
    {
        image: require('../resources/9.jpg'),
        Title: 'BUSINESS'
    },
    {
        image: require('../resources/12.jpg'),
        Title: 'HEALTH & WELLNESS'
    },
    {
        image: require('../resources/14.jpg'),
        Title: 'RELATIONSHIP'
    },
    {
        image: require('../resources/15.jpg'),
        Title: 'SPIRITUAL'
    },
    {
        image: require('../resources/18.jpg'),
        Title: 'BUSINESS'
    },
]

export default class Chatting extends React.Component {

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

                    <ChatHeader colors={['#ff2e18', '#fdfa89']}
                        title="David Castillo"
                        titlestyle={[Styles.HeaderText, { margin: 15, color: '#FFF' }]}
                        Is1={require('../resources/back.png')}
                        onPress={() => { this.props.navigation.goBack() }}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF', height: dh(9), width: dw(9), }]}
                        Is2={require('../resources/19.jpg')}
                        Image2={Styles.HeaderIcon}
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flex: 1, paddingHorizontal: dw(2), }}>

                            <FlatList
                                data={Data}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>

                                    <View style={{ width: '96%', alignSelf: 'center', marginTop: dh(1) }}>

                                        {/* <View style={{ flexDirection: 'row' }}>
                                            <View style={[Styles.UserProfileRound, { borderColor: 'steelblue', top: 5, borderWidth: 1.5 }]}>
                                                <Image source={require('../resources/19.jpg')} style={Styles.UserProfileImage} />
                                            </View>
                                            <View>
                                                <View style={Styles.ChatViewLeft}>
                                                    <Text style={[Styles.ProfileNamesubText, { fontFamily: 'Roboto', color: '#000' }]}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Text>
                                                </View>
                                                <Text style={{ fontFamily: 'Roboto-Medium' }}>11:25 AM</Text>
                                            </View>
                                        </View> */}

                                        <View style={{ flexDirection: 'row', width: '100%', overflow: 'hidden' }}>
                                            <View style={{ width: '15%', marginRight: dh(1), alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                                <View style={[Styles.UserProfileRound, { borderColor: '#0af560', borderWidth: 1.5, alignSelf: 'flex-end' }]}>
                                                    <Image source={require('../resources/19.jpg')} style={Styles.UserProfileImage} />
                                                </View>
                                            </View>
                                            <View style={{ width: '83%' }}>
                                                <View style={Styles.ChatViewLeft}>
                                                    <Text style={[Styles.ProfileNamesubText, { fontFamily: 'Roboto', color: '#000' }]}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Text>
                                                </View>
                                                <Text style={{ alignSelf: 'flex-start', fontFamily: 'Roboto-Medium', marginVertical: dh(1) }}>11:25 AM</Text>
                                            </View>

                                        </View>



                                        <View style={{ flexDirection: 'row', width: '100%', overflow: 'hidden' }}>
                                            <View style={{ width: '83%' }}>
                                                <View style={Styles.ChatViewRight}>
                                                    <Text style={[Styles.ProfileNamesubText, { fontFamily: 'Roboto', color: '#FFF' }]}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Text>
                                                </View>
                                                <Text style={{ alignSelf: 'flex-end', fontFamily: 'Roboto-Medium', marginVertical: dh(1) }}>11:25 AM</Text>
                                            </View>
                                            <View style={{ width: '15%', marginLeft: dh(1), alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                                <View style={[Styles.UserProfileRound, { borderColor: '#0af560', borderWidth: 1.5, bottom: 25, alignSelf: 'flex-end' }]}>
                                                    <Image source={require('../resources/18.jpg')} style={Styles.UserProfileImage} />
                                                </View>
                                            </View>
                                        </View>

                                    </View>


                                }
                            />

                        </View>
                    </ScrollView>

                    {/** POST COMMENT PART */}

                    <View style={{ flexDirection: 'row', margin:10, alignItems: "center", backgroundColor:'#00000020', height: dh(7), width: '95%', borderWidth: 1, borderColor: "#00000040", borderRadius: 25 }}>

                        <TextInput
                            style={{ marginLeft: dw(2), fontSize: 12, width: '90%', color: '#00000050', paddingLeft:dw(5), fontSize:dw(3.5) }}
                            placeholder="Type Here..."
                            placeholderTextColor="#282828"
                            returnKeyType='done'
                        />

                        <TouchableOpacity>
                            <View style={{ height: dh(5), width: '10%', alignItems: 'center', justifyContent: "center" }}>
                                <Image source={require('../resources/send.jpg')} resizeMode='contain' style={{ alignSelf: "center", height: dh(7), width:dw(7), }} />
                            </View>
                        </TouchableOpacity>

                    </View>

                    {/** -- END -- */}


                </View>




            </SafeAreaView>
        )
    }
}