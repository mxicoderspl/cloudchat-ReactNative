import React, { Fragment, Component } from 'react';
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
    FlatList,
    TouchableOpacity,
    Platform,
    I18nManager,
    Dimensions
} from 'react-native';

// Import Local Files
import Styles from '../Styles/Styles';
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';


// Import Libraries Files
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';


export default class IntroSlider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width,
            height,
            activeIndex: 0,
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

    getListRef = () => this.flatList;

    goToSlide = pageNum => {
        console.log(pageNum)
        this.setState({ activeIndex: pageNum });
        this.flatList.scrollToOffset({
            offset: this._rtlSafeIndex(pageNum) * this.state.width,
        });
    };

    _onNextPress = () => {
        this.goToSlide(this.state.activeIndex + 1);
        this.props.onSlideChange &&
            this.props.onSlideChange(this.state.activeIndex + 1, this.state.activeIndex);
    };

    _rtlSafeIndex = i => (isAndroidRTL ? this.props.slides.length - 1 - i : i);

    _onMomentumScrollEnd = e => {
        const offset = e.nativeEvent.contentOffset.x;
        // Touching very very quickly and continuous brings about
        // a variation close to - but not quite - the width.
        // That's why we round the number.
        // Also, Android phones and their weird numbers
        const newIndex = this._rtlSafeIndex(Math.round(offset / this.state.width));
        if (newIndex === this.state.activeIndex) {
            // No page change, don't do anything
            return;
        }
        const lastIndex = this.state.activeIndex;
        this.setState({ activeIndex: newIndex });
        this.props.onSlideChange && this.props.onSlideChange(newIndex, lastIndex);
    };


    render() {

        var Next = this.props.navigation.navigate

        return (
            <View style={Styles.flexOne}>
                <FlatList
                    ref={ref => (this.flatList = ref)}
                    data={slides}
                    pagingEnabled={true}
                    bounces={false}
                    style={Styles.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    extraData={this.state.width}
                    renderItem={({ item, index }) =>

                        <View style={{ width: dw(100) }}>
                            <Image source={item.image} style={Styles.IntroImages} />

                            <TouchableOpacity
                                onPress={() => { index == slides.length - 1 ? Next('ChooseOptions') : this._onNextPress() }} style={Styles.Intronext}>
                                <Image source={index == slides.length - 1 ? require('../resources/tick.png') : require('../resources/next.jpg')} style={Styles.IntroNextImage} />
                            </TouchableOpacity>

                            <View style={Styles.DotView}>
                                {slides.map((item, index) => (
                                    <TouchableOpacity activeOpacity={1} onPress={() => this.goToSlide(index)} style={index == this.state.activeIndex ? Styles.ActiveDot : Styles.Dots}></TouchableOpacity>
                                ))}
                            </View>

                            <View style={Styles.IntroContentView}>
                                <Text style={Styles.IntroContentHeader}>Navigation</Text>
                                <Text style={Styles.IntroContentText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</Text>     
                            </View>
                        </View>
                    }
                />
            </View>

        )

    }

}



const slides = [
    {
        key: 's1',
        image: require('../resources/Slide1.jpeg'),
        backgroundColor: '#20d2bb',
        title: 'Navigation',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        key: 's2',
        image: require('../resources/Slide2.jpeg'),
        backgroundColor: '#febe29',
        title: 'Navigation',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        key: 's3',
        image: require('../resources/Slide3.jpeg'),
        title: 'Navigation',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
];