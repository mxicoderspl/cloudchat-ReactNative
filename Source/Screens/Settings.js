
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
    Switch,
    Picker
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


export default class Settings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Notify: false,
            language: ""
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
                        title="Settings"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.goBack() }}
                        Is1={require('../resources/back.png')}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF' }]}
                    />

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width: '100%', height: '100%', }}>

                        <View style={{ flex: 1, paddingHorizontal: dw(3), paddingBottom: dh(10) }}>



                            <LinearGradient
                                colors={['#d6e012', '#02aec4']}
                                start={{ x: 0.9, y: 0.5 }} end={{ x: 0.0, y: 0.5 }} style={Styles.ProfileView}>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={Styles.UserProfileRound}>
                                        <Image source={require('../resources/19.jpg')} style={Styles.UserProfileImage} />
                                    </View>
                                    <View style={{ paddingLeft: dw(3), width: '68%' }}>
                                        <Text style={[Styles.ProfileNameText, { color: '#FFF', fontFamily: 'Roboto-Medium' }]}>Nicat Manafov</Text>
                                        <Text style={[Styles.ProfileNamesubText, { color: '#FFF' }]}>@nicatmanafov</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { Next('Login') }} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[Styles.ProfileNamesubText, { color: '#FFF', textAlign: 'center', fontSize: dw(3) }]}>Log Out</Text>
                                    </TouchableOpacity>
                                </View>

                            </LinearGradient>


                            <View style={Styles.CardView}>


                                <Text style={[Styles.ServiceProfileTitles, { fontFamily: 'Roboto-Bold' }]}>
                                    Option
                            </Text>

                                <View style={Styles.SettingsView}>
                                    <View style={Styles.settingleft}>
                                        <Image source={require('../resources/notify.png')} style={[Styles.HeaderIcon, { opacity: 0.7 }]} />
                                    </View>
                                    <View style={Styles.settingmid}>
                                        <Text style={Styles.SettingsText}>Notification </Text>
                                    </View>
                                    <View style={Styles.settingright}>
                                        <Switch
                                            onChange={() => {
                                                if (this.state.Notify == true) {
                                                    this.setState({ Notify: false })
                                                }
                                                else {
                                                    this.setState({ Notify: true })
                                                }
                                            }
                                            }
                                            thumbColor={'#ff2e18'}
                                            value={this.state.Notify}
                                        />
                                    </View>
                                </View>

                                <Text style={[Styles.ServiceProfileTitles, { fontFamily: 'Roboto-Bold' }]}>
                                    Account
                            </Text>

                                <View style={Styles.SettingsView}>
                                    <View style={Styles.settingleft}>
                                        <Image source={require('../resources/user.png')} style={[Styles.HeaderIcon, { opacity: 0.7 }]} />
                                    </View>
                                    <TouchableOpacity onPress={() => { Next('ClientProfile') }} style={Styles.settingmid}>
                                        <Text style={Styles.SettingsText}>Personal Information </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Next('ClientProfile') }} style={Styles.settingright}>
                                        <Image source={require('../resources/right.png')} style={[Styles.HeaderIcon, { height: dh(7), width: dw(7), opacity: 0.7 }]} />
                                    </TouchableOpacity>
                                </View>

                                <View style={Styles.SettingsView}>
                                    <View style={Styles.settingleft}>
                                        <Image source={require('../resources/flag.png')} style={[Styles.HeaderIcon, { opacity: 0.7 }]} />
                                    </View>
                                    <View style={[Styles.settingmid, { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }]}>
                                        <Text style={Styles.SettingsText}>Country </Text>
                                        {/* <Text style={Styles.SettingsText}>Azerbaijan</Text> */}
                                        <Picker
                                            selectedValue={this.state.language}
                                            style={{ width: '30%', color: '#00000060', backgroundColor: '#FFF', justifyContent: 'flex-end', alignItems: 'flex-end' }}
                                            mode='dropdown'
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.setState({ language: itemValue })
                                            }>
                                            <Picker.Item label="America" value="America" />
                                            <Picker.Item label="Canada" value="Canada" />
                                            <Picker.Item label="China" value="China" />
                                            <Picker.Item label="India" value="India" />
                                            <Picker.Item label="Japan" value="Japan" />
                                            <Picker.Item label="London" value="London" />
                                            <Picker.Item label="Switzerland" value="Switzerland" />
                                        </Picker>
                                    </View>
                                    <View style={Styles.settingright}>
                                        <Image source={require('../resources/right.png')} style={[Styles.HeaderIcon, { height: dh(7), width: dw(7), opacity: 0.7 }]} />
                                    </View>
                                </View>

                                <View style={Styles.SettingsView}>
                                    <View style={Styles.settingleft}>
                                        <Image source={require('../resources/earth.png')} style={[Styles.HeaderIcon, { opacity: 0.7 }]} />
                                    </View>
                                    <View style={[Styles.settingmid, { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }]}>
                                        <Text style={Styles.SettingsText}>Language </Text>
                                        {/* <Text style={Styles.SettingsText}>English</Text> */}
                                        <Picker
                                            selectedValue={this.state.language}
                                            style={{ width: '30%', color: '#00000060', backgroundColor: '#FFF', justifyContent: 'flex-end', alignItems: 'flex-end' }}
                                            mode='dropdown'
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.setState({ language: itemValue })
                                            }>
                                            <Picker.Item label="Chinese" value="London" />
                                            <Picker.Item label="English" value="America" />
                                            <Picker.Item label="French" value="China" />
                                            <Picker.Item label="German" value="Canada" />
                                            <Picker.Item label="Japanish" value="Japan" />
                                            <Picker.Item label="Spanish" value="India" />
                                        </Picker>
                                    </View>
                                    <View style={Styles.settingright}>
                                        <Image source={require('../resources/right.png')} style={[Styles.HeaderIcon, { height: dh(7), width: dw(7), opacity: 0.7 }]} />
                                    </View>
                                </View>

                                <Text style={[Styles.ServiceProfileTitles, { fontFamily: 'Roboto-Bold' }]}>
                                    General
                                </Text>

                                <View style={Styles.SettingsView}>
                                    <TouchableOpacity onPress={() => { Next('TermsandCondition') }} style={Styles.settingleft}>
                                        <Image source={require('../resources/7.jpg')} style={[Styles.HeaderIcon, { opacity: 0.7, tintColor: '#666666' }]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Next('TermsandCondition') }} style={Styles.settingmid}>
                                        <Text style={Styles.SettingsText}>Terms and Condition</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Next('TermsandCondition') }} style={Styles.settingright}>
                                        <Image source={require('../resources/right.png')} style={[Styles.HeaderIcon, { height: dh(7), width: dw(7), opacity: 0.7 }]} />
                                    </TouchableOpacity>
                                </View>

                                <View style={Styles.SettingsView}>
                                    <TouchableOpacity onPress={() => { Next('PrivacyPolicy') }} style={Styles.settingleft}>
                                        <Image source={require('../resources/lock.png')} style={[Styles.HeaderIcon, { opacity: 0.7, tintColor: '#666666' }]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Next('PrivacyPolicy') }} style={Styles.settingmid}>
                                        <Text style={Styles.SettingsText}>Privacy Policy</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Next('PrivacyPolicy') }} style={Styles.settingright}>
                                        <Image source={require('../resources/right.png')} style={[Styles.HeaderIcon, { height: dh(7), width: dw(7), opacity: 0.7 }]} />
                                    </TouchableOpacity>
                                </View>



                            </View>

                        </View>
                    </ScrollView>
                </View>




            </SafeAreaView>
        )
    }
}