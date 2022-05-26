import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,TouchableOpacity,
  } from 'react-native';
import { TextInput} from "react-native-gesture-handler";
const styles = require("../Styles/ClassInfoScreenStyles.js");

class ClassInfoScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    };
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_info}>
                        <Image style={styles.avatar} source={require("../../Resources/Images/ChooseRole/student.jpg")}/>
                        <View style={styles.user}>
                            <Text style={styles.header_text_name}>Nguyễn Bá Đức</Text>
                            <Text style={styles.header_text_MSSV}>MSSV: 20183499</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header_menu}>
                    <Image style={styles.header_icon} source={require("../../Resources/Images/hust_logo.png")}/>
                </View>
            </SafeAreaView>
        )
    }
}
export default ClassInfoScreen;