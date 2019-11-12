import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

//Import Local Files
import { dh, dw } from '../Functions/DHDW';
import Styles from '../Styles/Styles';


//Import Libraries
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

export default class CustomSideMenu extends Component {
  constructor() {
    super();

  }

  render() {

    var navigation = this.props.navigation.navigate;

    return (
      // onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('Adoption') }}
      <View style={styles.sideMenuContainer}>

        <TouchableOpacity 
        onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('ClientProfile') }}
        style={styles.SideMenuContent}>
          <View style={{ height: 70, width: 70, borderRadius: 35, borderColor: 'steelblue', borderWidth: 1.5, overflow: 'hidden' }}>
            <Image source={require('../resources/25.jpg')} style={[Styles.UserProfileImage, { borderRadius: 35 }]} />
          </View>
          <Text style={styles.UserName}>David Castillo</Text>
        </TouchableOpacity>

        <View style={styles.borderline}></View>

        <View style={styles.MenuItemsView}>
          <TouchableOpacity 
          onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('CalendarScreen') }}
          style={styles.ItemsMenu}>
            <Image source={require('../resources/home.jpg')} style={Styles.HeaderIcon} />
            <Text style={styles.Items} >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('SelectCategory') }}
          style={styles.ItemsMenu}>
            <Image source={require('../resources/category.png')} style={Styles.HeaderIcon} />
            <Text style={styles.Items} >
              Categories
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('Messages') }}
          style={styles.ItemsMenu}>
            <Image source={require('../resources/chat-icon.png')} style={[Styles.HeaderIcon, { tintColor: '#FFF' }]} />
            <Text style={styles.Items} >
              Messages
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('Settings') }}
          style={styles.ItemsMenu}>
            <Image source={require('../resources/settings.jpg')} style={Styles.HeaderIcon} />
            <Text style={styles.Items} >
              Settings
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.borderline}></View>

        <View style={styles.MenuItemsView}>
          <TouchableOpacity 
           onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('PrivacyPolicy') }}
          style={styles.ItemsMenu}>
            <Image source={require('../resources/lock.png')} style={Styles.HeaderIcon} />
            <Text style={styles.Items} >
              Privacy Policy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) && navigation('TermsandCondition') }}
          style={styles.ItemsMenu}>
            <Image source={require('../resources/7.jpg')} style={Styles.HeaderIcon} />
            <Text style={styles.Items} >
              Terms and Condition
            </Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#02aec4',
  },

  SideMenuContent: {
    width: '100%',
    marginTop: dh(7),
    paddingHorizontal: dw(3),
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  UserName: {
    fontFamily: 'Roboto-Medium',
    color: '#FFF',
    fontSize: dw(5),
    textAlign: 'center',
  },

  borderline: {
    height: dh(0.1),
    backgroundColor: '#FFF',
    marginVertical: dh(1.5),
    alignSelf: 'flex-end',
    width: '80%',
    marginHorizontal: dw(4)
  },

  Items: {
    color: '#FFF',
    fontSize: dw(5),
    marginHorizontal: dw(2),
    fontFamily: 'Roboto-Medium'
  },

  MenuItemsView: {
    paddingHorizontal: dw(7),

  },

  ItemsMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical:dh(0.5)
  }

});