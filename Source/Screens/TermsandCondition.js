
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


// Import Libraries Files
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import Dialog, { DialogContent } from 'react-native-popup-dialog';



export default class TermsandCondition extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
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
                        title="Terms & Condition"
                        titlestyle={Styles.HeaderText}
                        onPress={() => { this.props.navigation.goBack() }}
                        Is1={require('../resources/back.png')}
                        Image1={[Styles.HeaderIcon, { tintColor: '#FFF' }]}
                    />

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width: '100%', height: '100%' }}>




                        <View style={{ flex: 1, paddingHorizontal: dw(10), paddingVertical:dw(10) }}>

                            <Text style={{ color: '#00000090', fontSize: dw(5), textAlign: 'center', }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>

                        </View>
                    </ScrollView>





                </View>




            </SafeAreaView>
        )
    }
}