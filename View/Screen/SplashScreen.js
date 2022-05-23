import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  Text,
  Image,
  View,
} from 'react-native';

const styles = require("../Styles/SplashScreenStyles.js");
const { MAIN_COLOR } = require("../../Constants/Constants.js");
class LoadingText extends Component{
 
  constructor(props){
    super(props)
    this.state={
      dotText:0,
      
    }
    setInterval(()=>{
      this.setState(previousState=>{
          if(previousState.dotText<3){
            return{dotText:previousState.dotText+1}
          }
          else return {dotText:0}
      })
    },500);
  }
  componentWillUnmount(){
    this.setState = (state,callback)=>{
      return;
    };
  }
  render(){
    var string = "please wait";
    for(var i=0;i<this.state.dotText;i++){
      string=string+".";
    }
    return(
      <Text style={styles.splash_text}>{string}</Text>
    )
  }
}
class SplashScreen extends Component {
    render() {
      return (
    <SafeAreaView style = {styles.container}>
      <LinearGradient colors={[MAIN_COLOR, MAIN_COLOR]} style={styles.linearGradient}>
        <View style={styles.logo_group}>
          <Image style={styles.logo} source={require("../../Resources/Images/logo.jpeg")}/>
          <Text style={styles.splash_text}>App is currently running,</Text>
          <LoadingText></LoadingText>
        </View>
        <Text style={styles.powered_by}>*Paduck .co</Text>
        <Text style={styles.version_text}>v0.0.1</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}
};

export default SplashScreen;