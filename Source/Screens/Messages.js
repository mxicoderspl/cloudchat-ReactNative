
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
]

const Data1 = [    
    {
        image: require('../resources/3.jpg'),
        Title: 'HEALTH & WELLNESS'
    },
    {
        image: require('../resources/1.jpg'),
        Title: 'BUSINESS'
    },
    {
        image: require('../resources/8.jpg'),
        Title: 'SPIRITUAL'
    },
    {
        image: require('../resources/6.jpg'),
        Title: 'RELATIONSHIP'
    },

]

export default class Messages extends React.Component {

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
                        title="Messages"
                        titlestyle={[Styles.HeaderText, { margin: 15, fontSize: dw(5.5) }]}
                        Is1={require('../resources/back.png')}
                        onPress={() => { this.props.navigation.goBack() }}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF', height: dh(9), width: dw(9), }]}
                    />

                    <View style={Styles.BusinessSearchView}>
                        <View style={Styles.SearchView}>
                            <View style={Styles.SearchIconView}>
                                <Image source={require('../resources/search.png')} style={[Styles.HeaderIcon,{ height:dh(4.5), width:dw(4.5) }]} />
                            </View>
                            <View style={Styles.SearchTextView}>
                                <TextInput
                                    placeholder={"Search for your coaches"}

                                />
                            </View>
                            <View style={Styles.SearchIconView}>
                                <Image source={require('../resources/mike.png')} style={[Styles.HeaderIcon,{ height:dh(4.5), width:dw(4.5) }]} />
                            </View>
                        </View>
                    </View>




                    <View style={{ flex: 1 }}>

                        <ScrollView   showsVerticalScrollIndicator={false} >

                            <Text style={[Styles.ServiceProfileTitles, { marginLeft: dw(2), fontFamily: 'Roboto-Medium' }]}>
                                2019-09-29
                        </Text>

                            <FlatList
                                data={Data}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>

                                    <TouchableOpacity onPress={() => { Next('Chatting') }} style={{ width: '95%', alignSelf: 'center', marginVertical: dh(1.5) }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={[Styles.UserProfileRound, { borderColor: '#ff5f18', borderWidth: 1 }]}>
                                                <Image source={item.image} style={Styles.UserProfileImage} />
                                            </View>
                                            <View style={{ paddingLeft: dw(3), width: '75%' }}>
                                                <Text style={[Styles.ProfileNameText, { color: '#646464' }]}>Eugene Rodriquez</Text>
                                                <Text style={Styles.ProfileNamesubText}>Sent 3mins ago</Text>
                                            </View>
                                            <View style={Styles.badge}>
                                                <Text style={{ color: '#FFF' }}>3</Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>

                                }
                            />

                            <Text style={[Styles.ServiceProfileTitles, { marginTop:dh(5), marginLeft: dw(2), fontFamily: 'Roboto-Medium' }]}>
                                2019-09-27
                            </Text>

                            <FlatList
                                data={Data1}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>

                                    <TouchableOpacity onPress={() => { Next('Chatting') }} style={{ width: '95%', alignSelf: 'center', marginVertical: dh(1.5) }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={[Styles.UserProfileRound, { borderColor: '#ff5f18', borderWidth: 1 }]}>
                                                <Image source={item.image} style={Styles.UserProfileImage} />
                                            </View>
                                            <View style={{ paddingLeft: dw(3), width: '75%' }}>
                                                <Text style={[Styles.ProfileNameText, { color: '#00000070' }]}>Eugene Rodriquez</Text>
                                                <Text style={Styles.ProfileNamesubText}>Sent 3mins ago</Text>
                                            </View>
                                            <View style={Styles.badge}>
                                                <Text style={{ color: '#FFF' }}>3</Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>

                                }
                            />

                        </ScrollView>

                    </View>


                </View>




            </SafeAreaView>
        )
    }
}