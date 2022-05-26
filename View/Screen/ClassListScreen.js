import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,TouchableOpacity,
  } from 'react-native';
import { TextInput} from "react-native-gesture-handler";
const styles = require("../Styles/ClassListScreenStyles.js");

const DATA = [
    {
      id: '0xaabc129324981b9f82fe8a2f',
      image_source: require("../../Resources/Images/Icon/blackboard.png"),
      class_name:'Đồ Án Tốt Nghiệp',
      class_id:'IT4995',
      count_attended:15,
      miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a2e',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a2d',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a2c',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a2b',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a2a',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a29',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },
    {
        id: '0xaabc129324981b9f82fe8a28',
        image_source: require("../../Resources/Images/Icon/blackboard.png"),
        class_name:'Đồ Án Tốt Nghiệp',
        class_id:'IT4995',
        count_attended:15,
        miss_attended:0,
    },

  ];
  
  
class ClassListScreen extends Component{
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
                <Text style={styles.class_name}>Tên lớp: {item.class_name}</Text>
                <Text style={styles.class_id}>Mã lớp: {item.class_id}</Text>
            </View>
            <View style={styles.item_vertical}>
                <Text style={styles.count_attended_title}>Đã điểm danh</Text>
                <TouchableOpacity onPress={()=>{

                }}>
                <Text style={styles.count_attended_text}>{item.count_attended}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item_vertical}>
                <Text style={styles.miss_attended_title}>Vắng</Text>
                <TouchableOpacity onPress={()=>{

                }}>
                    <Text style={styles.miss_attended_text}>{item.miss_attended}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.view_detail_class}
        onPress={
            ()=>{
                this.props.navigation.navigate("ClassInfoScreen");
            }
        }
        >
            <Text style={styles.view_detail_text}>Xem chi tiết lớp</Text>
        </TouchableOpacity>
    </View>
  );
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
    };
}
export default ClassListScreen;