"use strict";
import { StyleSheet } from "react-native";
const { MAIN_COLOR } = require("../../Constants/Constants.js");

module.exports = StyleSheet.create({
    container:{
        width:100+"%",
        height:100+"%",
        alignItems:'center',
        backgroundColor:"#F0F5F5",
    },
    header:{
        width:"100%",
        height:60,
        backgroundColor:MAIN_COLOR,
        flexDirection:'row',
        borderColor:MAIN_COLOR,
        borderWidth:0.5,
        alignItems:'center',
    },
    header_icon:{
        width:24,
        height:36,
    },
    header_menu:{
        width:24,
        height:36,
        position:'absolute',
        zIndex:999,
        top:30,
        left:20,
        borderWidth:1,
        borderColor:'#F81C00',
    },
    header_info:{
        position:'absolute',
        right:5,
        flexDirection:'row',
        alignItems:'center',
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:25,
    },
    user:{
        marginLeft:15,
    },
    header_text_name:{
        color:"#F81C00",
        fontSize:17,
        fontWeight:'bold',
    },
    header_text_MSSV:{
        color:"#F81C00",
        fontSize:14,
    },
});