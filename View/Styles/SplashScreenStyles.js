"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container:{
        width:100+"%",
        height:100+"%",
        justifyContent:'center',
        alignItems:'center',
    },
    linearGradient:{
        width:100+"%",
        height:100+"%",
        justifyContent:'center',
        alignItems:'center',
    },
    logo_group:{
        width:100+"%",
        height:100+"%",
        justifyContent:'center',
        alignItems:'center',
    },
    logo :{
        borderRadius:10,
        width:150,
        height:150,
    },
    splash_text:{
        fontFamily:'VNI-Disney',
        color:'#000000',
        paddingTop:5,
        fontSize: 24,
    },
    powered_by:{
        fontFamily:'VNI-Disney',
        position:'absolute',
        color:'black',
        fontSize: 16,
        bottom:10,
    },
    version_text:{
        fontFamily:'VNI-Disney',
        position:'absolute',
        bottom:8,
        right:10,
        fontSize:14,
    }
});