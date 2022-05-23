"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container:{
        width:100+"%",
        height:100+"%",
        alignItems:'center',
        backgroundColor:"#FFFFFF",
    },
    logo_container:{
        width:100+"%",
        height:270,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    logo_role_image:{
        width:120,
        height:120,
        borderRadius:100,
    },
    role_text:{
        fontFamily:'mainfont',
        fontSize:24,
        color:'black',
    },
    login_info_input_container:{
        width:100+"%",
        height:150,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    email_input:{
        fontFamily:'mainfont',
        fontSize:22,
        width:80+"%",
        height:50,
        padding: 14,
        borderBottomColor:'#696969',
        borderBottomWidth:0.5,
    },
    password_container:{
        width: 80+"%",
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor:'#696969',
        borderBottomWidth:0.5,
    },
    password_input:{
        fontFamily:'mainfont',
        width:90+"%",
        height:50,
        padding: 14,
        fontSize: 22,
    },
    eye_icon_container:{
        width:22,
        height:22,
    },
    eye_icon:{
        width:22,
        height:22,
    },
    signin_button_container:{
        width:100+"%",
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    signin_button:{
        width:120,
        height:40,
        backgroundColor:'#FF5C00',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    signin_button_text:{
        fontFamily:'mainfont',
        color:'white',
        fontSize:18,
    },
    recommend_container:{
        width:100+"%",
        flex:1.5,
        alignItems:'center',
        justifyContent:'center',
    },
    recommend_text:{
        fontFamily:'mainfont',
        color:"black",
        fontSize:18,
    },
    recommend_text_clickable:{
        fontFamily:'mainfont',
        color:"#FF5C00",
        fontSize:18,
    },
    donot_have_account:{
        flexDirection:'row',
        marginBottom:10,
    },  
});