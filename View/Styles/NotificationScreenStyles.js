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
        justifyContent:'space-between',
        alignItems:'center',
    },
    header_icon:{
        width:24,
        height:36,
    },
    header_menu:{
        borderWidth:1,
        borderColor:'#F81C00',
        marginLeft:20,
        marginTop:30,
    },
    header_info:{
        marginRight:5,
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
    },
    
    body:{
        width:"100%",
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    flatlist:{
        marginTop:10,
        width:"100%",
    },
    item:{
        borderWidth:0.5,
        borderColor:"#CCCCCC",
        borderRadius:30,
        width:"100%",
        height:90,
        backgroundColor: '#EFEFFF',
        padding: 20,
        justifyContent:'center',
        marginBottom:5,
    },
    item_horizontal:{
        flexDirection:'row',
        alignItems:'center',
    },
    class_image_view:{
        backgroundColor:'#FFFFFF',
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
    class_image:{
        width:45,
        height:45,
        borderRadius:25,
    },
    item_vertical_not_align:{
        marginLeft:10,
        height:60,
        flex:1,
    },
    notification_text:{
        fontSize:15,
        color:'#777777',
        fontWeight:'bold',
    },  
});