import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

  const styles = require("../Styles/SelectRoleScreenStyles.js")
  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  }
class SelectRoleScreen extends Component{
    render() {
        generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717');
        return (
      <SafeAreaView style={styles.container}>
        <View style={styles.choose_role_textview}>
            <Text style= {styles.choose_role_text}>Choose Your Role</Text>
        </View>
        <View style={styles.choose_role_buttonview}>
            <TouchableOpacity style={[styles.choose_role_button,styles.boxShadow]}
              onPress={
                ()=>{
                    this.props.navigation.navigate("SignInScreen",{role:"teacher"})
                }
              }
            >
                <Image style={styles.choose_role_button_image} source={require("../../Resources/Images/ChooseRole/teacher.jpg")}/>
                <Text style={styles.choose_role_button_text}>Teacher</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choose_role_button,styles.boxShadow]}
              onPress={
                ()=>{
                  this.props.navigation.navigate("SignInScreen",{role:"student"})
                }
              }
            >
              <Image style={styles.choose_role_button_image} source={require("../../Resources/Images/ChooseRole/student.jpg")}/>
              <Text style={styles.choose_role_button_text}>Student</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
      )};
}
export default SelectRoleScreen;