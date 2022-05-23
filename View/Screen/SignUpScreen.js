import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import CheckBox from '@react-native-community/checkbox';

const styles = require("../Styles/SignUpScreenStyles.js")
class SignUpScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            retypepassword:"",
            isStudent:true,
            rightIcon:"eye",
            rightIcon2:"eye",
            passwordVisibility:true,
            retyprepasswordVisibility:true,
            alerttext:"",
        }
    };
    handlePasswordVisibility = () => {
        if (this.state.rightIcon === "eye") {
          this.setState({
              rightIcon:"eye-off",
              passwordVisibility:!this.state.passwordVisibility,
          })
          
        } else if (this.state.rightIcon === "eye-off") {
            this.setState({
                rightIcon:"eye",
                passwordVisibility:!this.state.passwordVisibility,
            })
        }
    };
    handleRetypePasswordVisibility = () => {
        if (this.state.rightIcon2 === "eye") {
          this.setState({
            rightIcon2:"eye-off",
            retyprepasswordVisibility:!this.state.retyprepasswordVisibility,
          })
          
        } else if (this.state.rightIcon2 === "eye-off") {
            this.setState({
                rightIcon2:"eye",
                retyprepasswordVisibility:!this.state.retyprepasswordVisibility,
            })
        }
    };
    handleInput = ()=>{
        if(this.state.email.length<=0&&this.state.password.length<=0&&this.state.retypepassword.length<=0){
            this.setState({
                alerttext:"*Please fill all the input field !",
            }) 
        }else if(this.state.password!=this.state.retypepassword){
            console.log(this.state.password);
            console.log(this.state.retypepassword)
            this.setState({
                alerttext:"*Your retype password is mismatch !",
            })
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
        {
            var minNumberofChars = 6;
            var maxNumberofChars = 100;
            var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
            if(this.state.password.length < minNumberofChars || this.state.password.length > maxNumberofChars){
                this.setState({
                    alerttext:"*Your password must has length in 6-16 character",
                })
            }
            else if(!regularExpression.test(this.state.password)) {
                this.setState({
                    alerttext:"*Your password must contains at least 1 special character and 1 number",
                })
            }
            else {
                this.setState({
                    alerttext:"",
                })
            }
        }
        else{
            this.setState({
                alerttext:"*Your email is invalid !",
            })
        }
    };
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.logo_container}>
                    <Image style={styles.logo_image} source={require("../../Resources/Images/logo.jpeg")}/>
                    <Text style={styles.signup_text}>Sign Up Your New Account</Text>
                </View>
                <View style={styles.input_container}>
                <TextInput
                     style={styles.email_input}
                     placeholder="Email"
                     onChangeText={(newText) => this.setState({email:newText})}
                    />
                    <View style={styles.password_container}>
                        <TextInput
                        style={styles.password_input}
                        placeholder="Password"
                        secureTextEntry={this.state.passwordVisibility}
                        onChangeText={newText => this.setState({password:newText})}
                        />
                        <TouchableOpacity onPress={this.handlePasswordVisibility}
                        style={styles.eye_icon_container}>
                            {
                                this.state.rightIcon=="eye"?<Image source={require("../../Resources/Images/Icon/eye.png")}
                                style={styles.eye_icon}/>: <Image source={require("../../Resources/Images/Icon/eye-off.png")}
                                style={styles.eye_icon}/> 
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.password_container}>
                        <TextInput
                        style={styles.password_input}
                        placeholder="Retype Password"
                        secureTextEntry={this.state.retyprepasswordVisibility}
                        onChangeText={newText => this.setState({retypepassword:newText})}
                        />
                        <TouchableOpacity onPress={this.handleRetypePasswordVisibility}
                        style={styles.eye_icon_container}>
                            {
                                this.state.rightIcon2=="eye"?<Image source={require("../../Resources/Images/Icon/eye.png")}
                                style={styles.eye_icon}/>: <Image source={require("../../Resources/Images/Icon/eye-off.png")}
                                style={styles.eye_icon}/> 
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.alert_box}>
                    <Text style={styles.alert_text}>{this.state.alerttext}</Text>
                </View>
                <View style={styles.choose_role_checkbox}>
                    <View style={styles.role_checkbox}>
                        <CheckBox
                            value={this.state.isStudent}
                            onValueChange={()=>{
                                this.setState({isStudent:true})
                        }}
                            style={styles.checkbox}
                        />
                        <Text style={styles.checkbox_text}>Student</Text>
                    </View>
                    <View style={styles.role_checkbox}>
                        <CheckBox
                            value={!this.state.isStudent}
                            onValueChange={()=>{this.setState({
                                isStudent:false,
                            })}}
                            style={styles.checkbox}
                        />
                        <Text style={styles.checkbox_text}>Teacher</Text>
                    </View>
                </View>
                <View style={styles.signup_button_container}>
                    <TouchableOpacity style={styles.signup_button}
                    onPress={
                        ()=>{
                            this.handleInput();
                            if(this.state.alerttext===""){
                            //TODO: Call API SignUp here !
                            }
                        }
                    }>
                        <Text style={styles.signup_button_text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.recommend_container}>
                    <Text style={styles.recommend_text}>Already have an account?</Text>
                    <TouchableOpacity onPress={
                        ()=>{
                            this.props.navigation.navigate("SignInScreen");
                        }
                    }>
                        <Text style={styles.recommend_text_clickable}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>)}

}
export default SignUpScreen;