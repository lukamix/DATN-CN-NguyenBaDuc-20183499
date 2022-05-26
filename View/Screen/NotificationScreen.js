import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,
  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../Styles/NotificationScreenStyles.js")

const DATA = [
    {
      id: '0xaabc129324981b9f82fe8a2f',
      image_source: require("../../Resources/Images/Icon/blackboard.png"),
      notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp 1",
    },
    {
        id: '0xaabc129324981b9f82fe8a2e',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },
    {
        id: '0xaabc129324981b9f82fe8a2d',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },
    {
        id: '0xaabc129324981b9f82fe8a2c',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },
    {
        id: '0xaabc129324981b9f82fe8a2b',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },
    {
        id: '0xaabc129324981b9f82fe8a2a',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },
    {
        id: '0xaabc129324981b9f82fe8a29',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },
    {
        id: '0xaabc129324981b9f82fe8a28',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        notification:"Bạn đã bỏ lỡ lớp học - Đồ Án Tốt Nghiệp",
    },

  ];

class NotificationScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    };
    renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.item_horizontal}>
                <View style={styles.class_image_view}>
                    <Image style={styles.class_image} source={item.image_source}/>
                </View>
                <View style={styles.item_vertical_not_align}>
                    <Text style={styles.notification_text}>Thông báo : {item.notification}</Text>
                </View>
            </View>
        </View>
      );
    render(){
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
                    <FlatList
                        style={styles.flatlist}
                        data={DATA}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default NotificationScreen;