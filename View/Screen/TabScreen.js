import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { MAIN_COLOR } = require("../../Constants/Constants.js");
import HomeScreen from "./HomeScreen.js";
import ExtensionScreen from "./ExtensionScreen.js";
import NotificationScreen from "./NotificationScreen.js";

const Tab = createBottomTabNavigator();

const styles = require("../Styles/TabScreenStyles.js")
class TabScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    };
    render() {
        return(
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: MAIN_COLOR,
                    tabBarInactiveTintColor: "#000000",
                    tabBarOptions: {
                        showLabel: false,
                    },
                    initialRouteName:"Home",
                }}
            >
                <Tab.Screen name="Extension"
                    options={{
                        tabBarLabel: 'Extension',
                        tabBarIcon: ({ tintColor }) => (
                        <Image
                            source={require('../../Resources/Images/Icon/extension.png')}
                            style={{width: 30, height: 30, tintColor: tintColor}}
                        />
                        )
                    }}
                 component={ExtensionScreen}/>
                <Tab.Screen name="Home" 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ tintColor }) => (
                        <Image
                            source={require('../../Resources/Images/Icon/home.png')}
                            style={{width: 30, height: 30, tintColor: tintColor}}
                        />
                        )
                    }}
                component={HomeScreen}/>
                <Tab.Screen name="Notification"
                    options={{
                        tabBarLabel: 'Notification',
                        tabBarIcon: ({ tintColor }) => (
                        <Image
                            source={require('../../Resources/Images/Icon/notification.png')}
                            style={{width: 30, height: 30, tintColor: tintColor}}
                        />
                        )
                    }}
                component={NotificationScreen}/>
            </Tab.Navigator>
        )
    }
}
export default TabScreen;