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
const styles = require("../Styles/ProfileStyles.js");
const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
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
        shadowColor: shadowColorAndroid,
      };
    }
  };

class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
        }
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    render(){
        const { modalVisible } = this.state;
        generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717');
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_container}>
                        <View style={styles.header_info}>
                            <Text style={styles.header_title}>Thông tin sinh viên</Text>
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
                    <Image style={[styles.student_info_bg,styles.boxShadow]} source={require("../../Resources/Images/BK.jpg")}/>
                    <View style={styles.student_info_header}>
                        <Image style={styles.student_avatar} source={require("../../Resources/Images/ChooseRole/student.jpg")}/>                   
                        <View style={styles.student_basic_info}>
                            <Text style={styles.student_name}>Nguyễn Bá Đức</Text>
                            <Text style={styles.student_phone}>Sđt: 0365182504</Text>
                            <Text style={styles.student_email}>Email : duc.nb183499@sis.hust.edu.vn</Text>
                        </View>
                    </View>
                    <View style={styles.student_properties}>
                        <View style={styles.row_properties}>
                            <View style={styles.student_property_element}>
                                <Text style={styles.property_name}>Mã số sinh viên:</Text>
                                <Text style={styles.property_value}>20183499</Text>
                            </View>
                            <View style={styles.student_property_element}>
                                <Text style={styles.property_name}>Ngày sinh:</Text>
                                <Text style={styles.property_value}>02/05/2000</Text>
                            </View>
                        </View>
                        <View style={styles.row_properties}>
                            <View style={styles.student_property_element}>
                                <Text style={styles.property_name}>Email:</Text>
                                <TouchableOpacity>
                                <Text style={[styles.property_value,styles.email]}>kassadin2k@gm...</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.student_property_element}>
                                <Text style={styles.property_name}>Số điện thoại:</Text>
                                <Text style={styles.property_value}>0365182504</Text>
                            </View>
                        </View>
                        <View style={styles.row_one_properties}>
                            <Text style={styles.property_name}>Khoa/Viện:</Text>
                            <Text style={styles.property_value}>Viện Công nghệ Thông tin và Truyền thông</Text>
                        </View>
                        <View style={styles.row_one_properties}>
                            <Text style={styles.property_name}>Hệ:</Text>
                            <Text style={styles.property_value}>Kỹ sư chính quy - K63</Text>
                        </View>
                        <View style={styles.row_one_properties}>
                            <Text style={styles.property_name}>Lớp:</Text>
                            <Text style={styles.property_value}>Khoa học máy tính 01 - K63</Text>
                        </View>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.exit_touch_area}
                        onPress={
                            () => {
                                this.setState({ modalVisible: false });
                            }
                        }>
                        </TouchableOpacity>
                       <View style={styles.main_view}>
                           <TouchableOpacity>
                               <Text>Đăng xuất</Text>
                           </TouchableOpacity>
                       </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}
export default Profile;