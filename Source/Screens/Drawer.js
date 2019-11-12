import 'react-native-gesture-handler';
import React, { Component } from 'react';
//import react in our code.

import { View, Image, Text, TouchableOpacity } from 'react-native';
// import all basic components

import { dh, dw, AddOrientation, RemoveOrientation } from '../Functions/DHDW';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';


import SelectCategory from './SelectCategory';
import Business from './Business';
import SideMenu from './SideMenu';



export default DrawerNavigator = createDrawerNavigator({
  
    SelectCategory: {
      screen: SelectCategory,
    },
    Business:{
      screen: Business
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: SideMenu,
    //Sidebar width
    drawerWidth: dw(65),
  }
);