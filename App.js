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

const Stack = createStackNavigator();

function App(){
  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TabScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="TabScreen" component={TabScreen}/>
        <Stack.Screen name="ProfileScreen" component={Profile}/>
        <Stack.Screen name="AttendanceScreen" component={Attendance}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
