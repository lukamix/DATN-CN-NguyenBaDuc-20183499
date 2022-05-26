import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,
  } from 'react-native';
import {TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../Styles/HomeScreenStyles.js");
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

class HomeScreen extends Component{
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
                                    this.props.navigation.navigate("ProfileScreen");
                                }
                            }>
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/user.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Thông tin cá nhân</Text>
                            <Text style={styles.item_name_info}>Các thông tin về sinh viên</Text>
                        </View>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area,styles.boxShadow]}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("AttendanceScreen");
                                }
                            }>
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/presentation.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Điểm danh</Text>
                            <Text style={styles.item_name_info}>Điểm danh sinh viên theo lớp</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area,styles.boxShadow]}
                             onPress={
                                ()=>{
                                    this.props.navigation.navigate("QRCodeScreen");
                                }}
                            >
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/qr-code.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>QR Code</Text>
                            <Text style={styles.item_name_info}>Quét mã QR để điểm danh</Text>
                        </View>
                        <View style={styles.box_item}>
                            <TouchableOpacity style={[styles.touch_area,styles.boxShadow]}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("ClassListScreen");
                                }}
                            >
                                <Image style={styles.icon_item} source={require("../../Resources/Images/Icon/class.png")}/>
                            </TouchableOpacity>
                            <Text style={styles.item_name_text}>Danh sách lớp học</Text>
                            <Text style={styles.item_name_info}>Danh sách lớp học của sv theo kì</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default HomeScreen;