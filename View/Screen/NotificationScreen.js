import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../Styles/NotificationScreenStyles.js")
class NotificationScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    };
    render(){
        return(
            <SafeAreaView style={styles.container}>
                
            </SafeAreaView>
        )
    }
}
export default NotificationScreen;