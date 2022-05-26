import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,
    Modal,
    TouchableOpacity,
    PermissionsAndroid,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const styles = require("../Styles/AttendanceStyles.js");
const FetchAPI = require("../../Service/FetchAPI");

class Attendance extends Component{
    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            location:"",
            currentLongitude:'',
            currentLatitude:'',
            currentStatus:'Lấy vị trí',
        }
    };
    async requestLocationPermission () {
        if (Platform.OS === 'ios') {
            this.getOneTimeLocation();
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Location Access Required',
                message: 'This App needs to Access your location',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              //To Check, If Permission is granted
              this.getOneTimeLocation();
              
            } else {
               
            }
          } catch (err) {
            console.warn(err);
          }
        }
    };
    getOneTimeLocation(){
        Geolocation.getCurrentPosition(
            
          //Will give you the current location
          (position) => {
            console.log(position);
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
            //Setting Longitude state
            this.setState({currentLongitude:currentLongitude});
            
            //Setting Latitude state
            this.setState({currentLatitude:currentLatitude});
            FetchAPI.get("https://api.bigdatacloud.net/data/reverse-geocode-client"+
                "?latitude="+currentLatitude+"&longitude="+currentLongitude+"&localityLanguage=vi"
            ).then((response) => {
                if (response[0] == 200) {
                  this.setState({
                      location:response[1].latitude+":"+response[1].longitude+"\n"+response[1].locality+", "+response[1].city+", "
                      +response[1].countryName,
                      currentStatus:"Điểm danh"
                  })
                } else {

                }
              })
              .catch((error) => {
                console.error(error);
              });;
          },
          (error) => {

          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
    };
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_container}>
                        <View style={styles.header_info}>
                            <Text style={styles.header_title}>Điểm danh sinh viên</Text>
                        </View>
                        <TouchableOpacity style={styles.header_button}>
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
                        <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button_touchable}
                        onPress={
                            ()=>{
                                //Điểm danh
                                if(this.state.currentStatus==="Lấy vị trí"){
                                    this.requestLocationPermission();
                                }
                                else{
                                    //Gửi vị trí đến server

                                }
                            }
                        }>
                            <Text style={styles.button_text}>{this.state.currentStatus}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button_touchable_long}
                        onPress={
                            ()=>{
                                //Face detect here
                                
                            }
                        }>
                            <Text style={styles.button_text}>Xác thực khuôn mặt</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default Attendance;