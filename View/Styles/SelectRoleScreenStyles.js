"use strict";
import { StyleSheet } from "react-native";
const { MAIN_COLOR } = require("../../Constants/Constants.js");

module.exports = StyleSheet.create({
    container:{
        width:100+"%",
        height:100+"%",
        alignItems:'center',
        backgroundColor:"#FFFFFF",
    },
    choose_role_textview:{
        width:100+"%",
        height:100,
        alignItems:'center',
        justifyContent:'center',
    },
    choose_role_text:{
        fontFamily:'mainfont',
        fontSize :36,
        color:'#000000',
    },
    choose_role_buttonview:{
        width:100+"%",
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
     },
    choose_role_button:{
        borderRadius:20,
        width:160,
        height:160,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor : "#FFFFFF",
        justifyContent:'space-evenly',
    },
    choose_role_button_image:{
        width:100,
        height:100,
        borderRadius:120,
    },
    choose_role_button_text:{
        fontFamily:'mainfont',
        fontSize :22,
        color:'#000000',
    },
});