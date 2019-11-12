
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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';


const Data = [
    {
        image: require('../resources/1.jpg'),
        name: 'David Castillo'
    },
    {
        image: require('../resources/3.jpg'),
        name: 'Alexandra Sily'
    },
    {
        image: require('../resources/6.jpg'),
        name: 'Anna'
    },
    {
        image: require('../resources/8.jpg'),
        name: 'Thomath John'
    },
    {
        image: require('../resources/6.jpg'),
        name: 'Balley Hale'
    },
    {
        image: require('../resources/8.jpg'),
        name: 'James Brown'
    },
]




export default class CalendarScreen extends React.Component {

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

        var Next = this.props.navigation.navigate;

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
                        title="Calendar"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.goBack() }}
                        Is1={require('../resources/back.png')}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF' }]}
                    />

                    <View style={{ flex: 1, }}>

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={{ backgroundColor: 'lightgray' }}>
                                <Calendar
                                    style={{ borderBottomWidth:1, borderColor:'lightgrey'  }}
                                    current={new Date()}
                                    hideArrows={false}
                                    hideExtraDays={true}
                                    disableMonthChange={true}
                                    firstDay={0}
                                    hideDayNames={false}
                                    showWeekNumbers={false}
                                />
                            </View>

                            <View style={{ marginVertical: dh(3) }}>

                                <FlatList
                                    data={Data}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) =>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: dh(3), marginTop: dh(2) }}>
                                            <View style={[Styles.UserProfileRound, { borderColor: '#ff5f18', borderWidth: 1 }]}>
                                                <Image source={item.image} style={Styles.UserProfileImage} />
                                            </View>
                                            <View style={{ paddingLeft: dw(3), width: '60%' }}>
                                                <Text style={[Styles.ProfileNameText, { color: '#646464', fontFamily: 'Roboto', fontSize: dw(5.5) }]}>{item.name}</Text>
                                                <Text style={[Styles.ProfileNamesubText, { fontSize: dw(3) }]}>Love Story Expert</Text>
                                            </View>
                                            <View style={{ width: '30%' }}>
                                                <Text style={[Styles.ProfileNamesubText, { fontSize: dw(3.3) }]}>2019 - 09 - 29</Text>
                                                <Text style={[Styles.ProfileNamesubText, { fontSize: dw(3.3) }]}>09 : 20 AM</Text>
                                            </View>
                                        </View>

                                    }
                                />

                            </View>

                        </ScrollView>



                    </View>



                </View>




            </SafeAreaView>
        )
    }
}