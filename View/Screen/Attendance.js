import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,
    Modal,
    TouchableOpacity
} from 'react-native';
import GPSTracking from "../../Utils/GPSTracking.js";
const styles = require("../Styles/AttendanceStyles.js");

class Attendance extends Component{
    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            location:"",
        }
    };
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_container}>
                        <View style={styles.header_info}>
                            <Text style={styles.header_title}>Điểm danh sinh viên</Text>
                        </View>
                        <TouchableOpacity style={styles.header_button}
                        onPress={() => this.setModalVisible(true)}>
                            <Image style={styles.header_button_icon} source={require("../../Resources/Images/Icon/options.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.header_menu}>
                    <Image style={styles.header_icon} source={require("../../Resources/Images/hust_logo.png")}/>
                </View>
                <View style={styles.body}>
                    <View style={styles.class_header}>
                        <Text style={styles.class_header_text}>Lớp đang diễn ra</Text>
                    </View>
                    <View style={styles.class_info_view}>
                        <View style={styles.item_info}>
                            <Text style={styles.item_name_title}>Tên lớp: </Text>
                            <Text style={styles.item_name}>Đồ Án Tốt Nghiệp</Text>
                        </View>
                        <View style={styles.horizontal_item_container}>
                            <View style={styles.horizontal_item}>
                                <Text style={styles.item_name_title}>Mã lớp:</Text>
                                <Text style={styles.item_name}>IT4495</Text>
                            </View>
                            <View style={styles.horizontal_item}>
                                <Text style={styles.item_name_title}>Sĩ số:</Text>
                                <Text style={styles.item_name}>150</Text>
                            </View>
                        </View>
                        <View style={styles.item_info}>
                            <Text style={styles.item_name_title}>Giảng viên: </Text>
                            <Text style={styles.item_name}>Bùi Quốc Trung</Text>
                        </View>
                        <View style={styles.item_info}>
                            <Text style={styles.item_name_title}>Thời gian: </Text>
                            <Text style={styles.item_name}>12h30 - 14h00</Text>
                        </View>
                        <View style={styles.item_info}>
                            <Text style={styles.item_name_title}>Trạng thái: </Text>
                            <Text style={styles.item_name}>Chưa điểm danh</Text>
                        </View>
                    </View>
                    <View style={styles.button_view}>
                        <View style={styles.location_title}>
                            <Text style={styles.location_title_text}>Vị trí:</Text>
                            <Text style={styles.location_text}>{this.state.location}</Text>
                        </View>
                        <TouchableOpacity style={styles.button_touchable}
                        onPress={
                            ()=>{
                                var tracking = GPSTracking.Instance();
                                tracking.requestLocationPermission();
                                //Điểm danh
                            }
                        }>
                            <Text style={styles.button_text}>Điểm danh</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default Attendance;