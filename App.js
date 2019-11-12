import 'react-native-gesture-handler'
import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

// Import All files 
import SplashScreen from './Source/Screens/SplashScreen';
import IntroSlider from './Source/Screens/IntroSlider';
import ChooseOptions from './Source/Screens/ChooseOptions';
import Login from './Source/Screens/Login';
import CoachRegister from './Source/Screens/CoachRegister';
import MemberRegister from './Source/Screens/MemberRegister';
import SelectCategory from './Source/Screens/SelectCategory';
import Business from './Source/Screens/Business';
import BusinessUserProfile from './Source/Screens/BusinessUserProfile';
import Calling from './Source/Screens/Calling';
import Chatting from './Source/Screens/Chatting';
import Messages from './Source/Screens/Messages';
import Drawer from './Source/Screens/Drawer';
import Settings from './Source/Screens/Settings';
import ClientProfile from './Source/Screens/ClientProfile';
import EditProfile from './Source/Screens/EditProfile';
import TermsandCondition from './Source/Screens/TermsandCondition';
import PrivacyPolicy from './Source/Screens/PrivacyPolicy';
import ScanCard from './Source/Screens/ScanCard';
import CalendarScreen from './Source/Screens/CalendarScreen';





// Import All Routes For Drawer Navigation

//Disable Yellowbox warning
console.disableYellowBox = true;

// Navigation To Screen && Routes
const MainNavigator = createStackNavigator({


  // Screen Navigation Keys
  SplashScreen: { screen: SplashScreen, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false  }) },
  IntroSlider: { screen: IntroSlider, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false  }) },
  ChooseOptions: { screen: ChooseOptions, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  Login: { screen: Login, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false  }) },
  CoachRegister: { screen: CoachRegister, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  MemberRegister: { screen: MemberRegister, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  SelectCategory: { screen: SelectCategory, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  Business: { screen: Business, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  BusinessUserProfile: { screen: BusinessUserProfile, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false  }) },
  Calling: { screen: Calling, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  Chatting: { screen: Chatting, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  Messages: { screen: Messages, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  Drawer: { screen: Drawer, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  Settings: { screen: Settings, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false  }) },
  ClientProfile: { screen: ClientProfile, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false  }) },
  EditProfile: { screen: EditProfile, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  TermsandCondition: { screen: TermsandCondition, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  PrivacyPolicy: { screen: PrivacyPolicy, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  ScanCard: { screen: ScanCard, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },
  CalendarScreen: { screen: CalendarScreen, navigationOptions: ({ navigation }) => ({ header: null, swipeEnabled: false, gesturesEnabled:false, animationEnabled: false }) },








  

  // Routes Navigation Keys

});

const App = createAppContainer(MainNavigator);

export default App;