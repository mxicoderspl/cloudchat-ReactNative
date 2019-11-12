import { StyleSheet, Platform, Dimensions, I18nManager } from 'react-native';


//Import Local Files for responsive Designs
import { AddOrientation, RemoveOrientation, dh, dw } from '../Functions/DHDW';


const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

export default Styles = StyleSheet.create({

    Container: {
        flex: 1
    },

    Splashback: {
        flex: 1,
        width: dw(100),
        height: dh(100),
        alignItems: 'center',
    },

    SplashLogo: {
        height: dh(30),
        width: dw(70),
        bottom: 30,
        // opacity: 0.8,
        resizeMode: 'contain'
    },

    SplashText: {
        textAlign: 'center',
        bottom: 30,
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Roboto-Bold'
    },

    IntroImages: {
        width: dw(100),
        height: dh(60),
        resizeMode: 'cover'
    },

    flexOne: {
        flex: 1,
    },

    flatList: {
        flex: 1,
        flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    },

    Intronext: {
        backgroundColor: '#45B39D',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        right: dw(8),
        bottom: dh(33),
    },

    IntroNextImage: {
        height: dh(9),
        width: dw(9),
        resizeMode: 'contain'
    },

    Dots: {
        backgroundColor: '#45B39D50',
        height: 10,
        width: 10,
        borderRadius: 5,
        margin: 4
    },

    ActiveDot: {
        backgroundColor: '#45B39D',
        height: 16,
        width: 16,
        borderRadius: 8,
        margin: 4,
    },

    DotView: {
        flexDirection: 'row',
        height: dh(12),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    IntroContentView: {
        flex: 1,
        paddingHorizontal: dw(8),
        // justifyContent:'center',
        alignItems: 'center'
    },

    IntroContentHeader: {
        color: '#6a6a6a',
        fontSize: dw(6),
        fontFamily: 'Roboto-Bold',
        textAlign: 'center'
    },

    IntroContentText: {
        color: '#4c4c4c66',
        fontSize: dw(3.5),
        marginTop: dh(0.5),
        fontFamily: 'Roboto_medium',
        textAlign: 'center'
    },

    OptionMenuView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fcf6f6',
        borderRadius: 15,
        borderWidth: 1,
        paddingVertical: dh(1),
        height: 44,
        width: '80%',
        marginVertical: dh(1.5)
    },

    OptionMenuText: {
        color: '#fcfbfb',
        fontFamily: 'Roboto-Medium',
        fontSize: dw(5),
        textAlign: 'center'
    },

    InputView: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 20,
        overflow: 'hidden',
        height: 42,
        width: '90%',
        alignItems: 'center',
        marginTop: dh(3.5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.17,
        shadowRadius: 16.00,
        elevation: 5,
    },

    InputIconView: {
        width: '20%',
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },

    InputTextInputView: {
        width: '80%',
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'center'
    },

    Inputboxicon: {
        height: dh(4.7),
        width: dw(4.7),
        resizeMode: 'contain'
    },

    TextInput: {
        color: '#000',
        fontFamily: 'Roboto-Medium'
    },

    SignUplogo: {
        height: dh(25),
        width: dw(70),
        opacity: 0.8,
        resizeMode: 'contain'
    },

    SignupInputView: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 20,
        overflow: 'hidden',
        height: 42,
        width: '90%',
        alignItems: 'center',
        marginTop: dh(2.5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.17,
        shadowRadius: 16.00,
        elevation: 5,
    },

    HeaderIcon: {
        height: dh(6),
        width: dw(6),
        resizeMode: 'contain'
    },

    HeaderText: {
        color: '#FFF',
        fontFamily: 'Roboto-Bold',
        fontSize: dw(5),
        // textShadowColor: 'rgba(1, 1, 1, 1.0)',
        // textShadowOffset: {width: -5, height: 0},
        // textShadowRadius: 4,
        margin: 5
    },

    CategoryListView: {
        flex: 1,
        // width: '100%',
        height: 170,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: dh(1.5),
    },

    CategoryListImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },

    BusinessListImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    TopViewContent: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        height: 40,
    },

    CategoryListiconviewtop: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ListIconuser: {
        height: dh(4),
        width: dw(4),
        resizeMode: 'contain',
        tintColor: '#ff5f18'
    },

    ListTopText: {
        fontFamily: 'Roboto-Medium',
        color: '#ff5f18',
        paddingHorizontal: dh(1)
    },

    ListTitleBottom: {
        backgroundColor: '#00000030',
        alignSelf: 'flex-start',
        height: 'auto',
        bottom: dh(-12),
        left: dw(5),
        justifyContent: 'center',
        padding: 5
    },

    TitleList: {
        color: '#FFF',
        fontFamily: 'Roboto-Bold',
        fontSize: dw(4.5)
    },

    BusinessSearchView: {
        height: 60,
        width: '100%',
        paddingHorizontal: dw(5),
        paddingVertical: dh(1.5)
    },

    SearchView: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        borderColor: '#F3F3F3',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#ededed25',
        alignSelf: 'center'
    },

    SearchIconView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    SearchTextView: {
        flex: 3,
        justifyContent: 'center'
    },

    BusinessGridListView: {
        width:'100%',
        height: 170,
        //margin: 5,
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },

    BusinessListTitleBottom: {
        backgroundColor: '#00000030',
        height: 'auto',
        width: '100%',
        flexDirection: 'row',
    },

    BusinessContentViewMain: {
        width: '70%',
        padding:3,
    },

    BusinessContentViewLike: {
        width: '35%',
        flexDirection:'row',
        alignItems:'flex-start'
    },

    BusinessListiconviewtop: {
        flexDirection:'row',
        // paddingRight:10, 
        // justifyContent:'center',
        alignItems:'center'
    },

    BusinessListIconlike: {
        height: dh(4),
        width: dw(4),
        resizeMode: 'contain',
    },

    BusinessListTopText: {
        fontFamily: 'Roboto-Medium',
        color: '#FFF',
        fontSize:dw(2.5),
        paddingHorizontal: dh(0.5)
    },

    BusinessListTopTextMain:{
        fontFamily: 'Roboto-Medium',
        color: '#FFF',
        fontSize:dw(3.7),
        paddingHorizontal: dh(1)
    },

    BusinessListIconstar:{
        height:15,
        marginVertical:dh(0.5),
        width: dw(25),
        resizeMode: 'contain',
        marginLeft:dw(-0.5)
    },

    BusinessUserProfileImage: {
        width:'100%',
        height: 300,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },

    ProfileUserName:{
        color:'#FFF',
        textAlign:'center',
        fontSize:dw(7),
        fontFamily:'Roboto-Medium'
    },


    ProfileCallingInfo:{
        flexDirection:'row',
        height:50,
        width:'100%',
        paddingHorizontal:dw(5),
        marginVertical:dh(0.5),
        alignItems:'center'
    },

    CallingButton:{
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:40,
        backgroundColor:'#FFF',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        elevation: 5,
    },

    CallingText:{
        marginLeft:dw(2.5),
        color:'#000',
        fontSize:dw(5),
        fontFamily:'Roboto'
    },

    CallingSquareButton:{
        paddingHorizontal:dw(2),
        paddingVertical:dh(0.5),
        height:'85%',
        backgroundColor:'#ff5f18',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },

    CallingSquareButtonText:{
        color:'#FFF',
        fontSize:dw(5),
        fontFamily:'Roboto'
    },

    AboutMyService:{
        paddingHorizontal:dw(1),
        width:'100%'
    },

    ServiceProfileTitles:{
        color:'#ff5f18',
        fontSize:dw(5),
        fontFamily:'Roboto',
        marginLeft:dw(1.5)
    },

    UserProfileRound:{
        height:50,
        width:50,
        borderRadius:25,
        overflow:'hidden'
    },

    UserProfileImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:25
    },

    ProfileNameText:{
        fontFamily:'Roboto-Bold',
        fontSize:dw(5),
        color:'#000000'
    },

    ProfileNamesubText:{
        fontFamily:'Roboto-Medium',
        fontSize:dw(4),
        color:'#a59f9f'
    },

    ReplyButton:{
        fontFamily:'Roboto-Bold',
        fontSize:dw(4),
        color:'#00000050'
    },

    BottomCalling:{
        flexDirection:'row',
        paddingHorizontal:dw(15),
        height:'auto',
        width:'100%',
        bottom:dh(-40),
        alignItems:'center', 
        justifyContent:'space-around'
    },

    ChatViewLeft:{
        padding:dw(3), width: '100%', backgroundColor:'#fdfa8970',
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20
    },

    ChatViewRight:{
        padding:dw(3), width: '100%', backgroundColor:'#ff5f18',
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },

    badge:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:'#ff5f18',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        marginRight:dw(5)
    },

    ProfileView:{
        height:90,
        marginVertical:dh(5),
        borderRadius:50,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:dw(5),
        paddingVertical:dh(2)
    },

    CardView:{
        borderRadius:20,
        alignSelf:'center',
        height:'auto',
        width:'95%',
        backgroundColor:'#FFF',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        elevation: 5,
        paddingHorizontal:dw(5),
        paddingVertical:dh(3)
    },

    SettingsView:{
        flexDirection:'row',
        height:'auto',
        width:'100%',
        alignItems:'center',
        marginVertical:dh(0.2)
    },

    settingleft:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },

    settingmid:{
        width:'70%',
        justifyContent:'center'
    },

    settingright:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },

    SettingsText:{
        color:'#66666670',
        fontFamily:'Roboto-Medium',
        fontSize:dw(4)
    },

    ClientProfileView:{
        height:150,
        width:150,
        borderRadius:75,
        justifyContent:'center'
        // overflow:'hidden'
    },

    ClientProfilePicture:{
        width:150,
        height:150,
        borderRadius:75,
        resizeMode:'cover'
    },

    UserNameClient:{
        fontSize:dw(8),
        color:'#FFF',
        marginVertical:dh(1.5),
        textAlign:'center',
        fontFamily:'Roboto-Medium'
    },

    EditClientProfilePic:{
        backgroundColor:'#ff5f1890',
        height:50,
        width:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:1,
        right:-25
    },

    EditPicture:{
        height:dh(6),
        width:dw(6),
        resizeMode:'contain',
        tintColor:'#FFF'
    },

    EditProfileFields:{
        width:'100%',
        flexDirection:'row',
        height:70,
    },

    EditFieldsLeft:{
        justifyContent:'space-around',
        width:'85%',
        height:'100%', 
    },

    EditFieldsRight:{
        width:'15%',
        height:'100%', 
        justifyContent:'center',
        alignContent:'center',
    },

    EditText:{
        color:'#ff5f18',
        fontSize:dw(4),
        fontFamily:'Roboto-Medium'
    },

    DialougeHeaderText:{
        
    }








})