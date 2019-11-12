import 'react-native-gesture-handler';
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
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
const Data = [
    {
        image: require('../resources/pic1.jpeg'),
        Title: 'SPIRITUAL'

    },
    {
        image: require('../resources/pic2.jpeg'),
        Title: 'HEALTH & WELLNESS'
    },
    {
        image: require('../resources/pic3.jpeg'),
        Title: 'RELATIONSHIP'

    },
    {
        image: require('../resources/pic4.jpg'),
        Title: 'BUSINESS'
    },
]

export default class SelectCategory extends React.Component {

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
                        title="Select Category"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
                        Is1={require('../resources/menu.png')}
                        Image1={Styles.HeaderIcon}
                        onClick={() => { Next('Settings') }}
                        Is2={require('../resources/settings.jpg')}
                        Image2={Styles.HeaderIcon}
                    />

                    <View style={{ flex: 1, paddingHorizontal: dw(3), }}>

                        <FlatList
                            data={Data}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>

                                <TouchableOpacity onPress={() => { Next('Business') }}>
                                    <ImageBackground source={item.image} imageStyle={Styles.CategoryListImage} style={Styles.CategoryListView}>

                                        <View style={Styles.TopViewContent}>
                                            <View style={Styles.CategoryListiconviewtop}>
                                                <Image source={require('../resources/user-icon.png')} style={Styles.ListIconuser} />
                                            </View>
                                            <View style={Styles.CategoryListiconviewtop}>
                                                <Text style={Styles.ListTopText}>2,137 Coaches</Text>
                                            </View>
                                        </View>

                                        <View style={Styles.ListTitleBottom}>
                                            <Text style={Styles.TitleList}>{item.Title}</Text>
                                        </View>

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