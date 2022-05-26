import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

//Screen Require :
import SplashScreen from "./View/Screen/SplashScreen.js";
import SelectRoleScreen from './View/Screen/SelectRoleScreen.js';
import SignInScreen from './View/Screen/SignInScreen.js';
import SignUpScreen from './View/Screen/SignUpScreen.js';
import TabScreen from './View/Screen/TabScreen.js';
import Profile from './View/Screen/Profile.js';
import Attendance from './View/Screen/Attendance.js';
import QRCodeScreen from './View/Screen/QRCodeScreen.js';
import ClassListScreen from './View/Screen/ClassListScreen.js';
import ClassInfoScreen from './View/Screen/ClassInfoScreen.js';
import QuizzScreen from './View/Screen/QuizzScreen.js';

const Stack = createStackNavigator();

function App(){
  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="TabScreen" component={TabScreen}/>
        <Stack.Screen name="ProfileScreen" component={Profile}/>
        <Stack.Screen name="AttendanceScreen" component={Attendance}/>
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen}/>
        <Stack.Screen name="ClassListScreen" component={ClassListScreen}/>
        <Stack.Screen name="ClassInfoScreen" component={ClassInfoScreen}/>
        <Stack.Screen name='QuizzScreen' component={QuizzScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
