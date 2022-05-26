import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../Styles/ExtensionScreenStyles.js");
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
  };

class ExtensionScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    };
    render(){
        generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717');
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.header_menu}>
                        <Image style={styles.header_icon} source={require("../../Resources/Images/hust_logo.png")}/>
                    </TouchableOpacity>
                    <View style={styles.header_info}>
                        <Image style={styles.avatar} source={require("../../Resources/Images/ChooseRole/student.jpg")}/>
                        <View style={styles.user}>
                            <Text style={styles.header_text_name}>Nguyễn Bá Đức</Text>
                            <Text style={styles.header_text_MSSV}>MSSV: 20183499</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.box}>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area,styles.boxShadow]}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("QuizzScreen");
                                }
                            }>
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/quiz.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Quizz!</Text>
                            <Text style={styles.item_name_info}>Hỏi đáp nhanh tương tác trực tiếp</Text>
                        </View>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area_comingsoon,styles.boxShadow]}>
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/coming-soon.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Coming soon...</Text>
                            <Text style={styles.item_name_info}></Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area_comingsoon,styles.boxShadow]}>
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/coming-soon.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Coming soon...</Text>
                            <Text style={styles.item_name_info}></Text>
                        </View>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area_comingsoon,styles.boxShadow]}>
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/coming-soon.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Coming soon...</Text>
                            <Text style={styles.item_name_info}></Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default ExtensionScreen;