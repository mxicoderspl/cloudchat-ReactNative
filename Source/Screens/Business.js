
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
import { Header } from '../Components/Components';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';


const Data = [
    {
        image: require('../resources/1.jpg'),
        Title: 'BUSINESS',
        color: '#0af560'
    },
    {
        image: require('../resources/3.jpg'),
        Title: 'HEALTH & WELLNESS',
        color: '#f52a0a'
    },
    {
        image: require('../resources/6.jpg'),
        Title: 'RELATIONSHIP',
        color: '#f52a0a'
    },
    {
        image: require('../resources/8.jpg'),
        Title: 'SPIRITUAL',
        color: '#0af560'
    },
    {
        image: require('../resources/9.jpg'),
        Title: 'BUSINESS',
        color: '#f52a0a'
    },
    {
        image: require('../resources/12.jpg'),
        Title: 'HEALTH & WELLNESS',
        color: '#0af560'
    },
    {
        image: require('../resources/14.jpg'),
        Title: 'RELATIONSHIP',
        color: '#f52a0a'
    },
    {
        image: require('../resources/15.jpg'),
        Title: 'SPIRITUAL',
        colorL: '#f52a0a'
    },
    {
        image: require('../resources/18.jpg'),
        Title: 'BUSINESS',
        color: '#0af560'
    },
    {
        image: require('../resources/19.jpg'),
        Title: 'HEALTH & WELLNESS',
        color: '#f52a0a'
    },
    {
        image: require('../resources/20.jpg'),
        Title: 'RELATIONSHIP',
        color: '#f52a0a'
    },
    {
        image: require('../resources/3.jpg'),
        Title: 'SPIRITUAL',
        color: '#0af560'
    },
]

export default class Business extends React.Component {

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

                    <Header colors={['#d6e01233', '#02aec433']}
                        title="BUSINESS"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
                        Is1={require('../resources/menu.png')}
                        Image1={Styles.HeaderIcon}
                        onClick={() => { Next('Settings') }}
                        Is2={require('../resources/settings.jpg')}
                        Image2={Styles.HeaderIcon}
                    />

                    <View style={Styles.BusinessSearchView}>
                        <View style={Styles.SearchView}>
                            <View style={Styles.SearchIconView}>
                                <Image source={require('../resources/search.png')} style={[Styles.HeaderIcon, { height: dh(4.5), width: dw(4.5) }]} />
                            </View>
                            <View style={Styles.SearchTextView}>
                                <TextInput
                                    placeholder={"Search for your coaches"}

                                />
                            </View>
                            <View style={Styles.SearchIconView}>
                                <Image source={require('../resources/mike.png')} style={[Styles.HeaderIcon, { height: dh(4.5), width: dw(4.5) }]} />
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 1, paddingHorizontal: dw(3), }}>

                        <FlatList
                            data={Data}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            renderItem={({ item }) =>

                                <TouchableOpacity style={{ flex: 1, marginHorizontal: dh(0.7), marginBottom: dh(3) }} >

                                    <ImageBackground source={item.image} imageStyle={Styles.BusinessListImage} style={Styles.BusinessGridListView}>

                                        <View style={{ height: 10, width: 10, alignSelf: 'flex-start', top: 0, position: 'absolute', zIndex: 1, margin: 10, borderRadius: 5, backgroundColor: item.color }}>

                                        </View>

                                        <View style={Styles.BusinessListTitleBottom}>
                                            <View style={Styles.BusinessContentViewMain}>
                                                <Text style={Styles.BusinessListTopTextMain}>Aelxandra T</Text>
                                                <Text style={Styles.BusinessListTopText}>Business Expert</Text>
                                                <Image source={require('../resources/star.png')} style={Styles.BusinessListIconstar} />
                                            </View>

                                            <View style={Styles.BusinessContentViewLike}>

                                                <View style={Styles.BusinessListiconviewtop}>
                                                    <Image source={require('../resources/heart.png')} style={Styles.BusinessListIconlike} />
                                                    <Text style={Styles.BusinessListTopText}>2,137 </Text>
                                                </View>

                                            </View>
                                        </View>

                                        <TouchableOpacity onPress={() => { Next('BusinessUserProfile') }} style={[Styles.BusinessGridListView, { position: 'absolute', alignSelf: 'center', zIndex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                                            <Image source={require('../resources/youtube.png')} style={[Styles.BusinessListIconlike, { height: dh(7), width: dw(7) }]} />
                                        </TouchableOpacity>

                                    </ImageBackground>

                                </TouchableOpacity>

                            }
                        />

                    </View>
                </View>




            </SafeAreaView>
        )
    }
}