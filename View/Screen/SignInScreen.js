import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
  } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../Styles/SignInScreenStyles.js")
class SignInScreen extends Component{
    constructor(props){
        super(props)
        this.state={
          email:"",
          password:"",
          passwordVisibility:true,
          rightIcon:"eye",
          rightRole:this.props.route.params?.role,
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
    render() {
        return(
            <SafeAreaView style={styles.container}>
                {
                    this.state.rightRole==="student"?
                    <View style={styles.logo_container}>
                            <Image style={styles.logo_role_image} source={require("../../Resources/Images/ChooseRole/student.jpg")}/>
                            <Text style={styles.role_text}>Sign In As Student</Text>
                    </View>
                    :
                    <View style={styles.logo_container}>
                    <Image style={styles.logo_role_image} source={require("../../Resources/Images/ChooseRole/teacher.jpg")}/>
                    <Text style={styles.role_text}>Sign In As Teacher</Text>
                    </View>
                }
                <View style={styles.login_info_input_container}>
                    <TextInput
                     style={styles.email_input}
                     placeholder="Email"
                     onChangeText={newText => this.setState({email:newText})}
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
                </View>
                <View style={styles.signin_button_container}>
                    <TouchableOpacity style={styles.signin_button}
                    onPress={
                        ()=>{
                            //TODO: Call API Login here !
                            this.props.navigation.navigate("HomeScreen");
                        }
                    }>
                        <Text style={styles.signin_button_text}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.rightRole==="student"?
                    <View style={styles.recommend_container}>
                        <Text style={styles.recommend_text}>Are you a teacher?</Text>
                        <TouchableOpacity onPress={
                            ()=>{
                                this.setState({
                                    rightRole:"teacher"
                                })
                            }
                        }>
                            <Text style={styles.recommend_text_clickable}>Click here</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.recommend_container}>
                        <View style={styles.donot_have_account}>
                            <Text style={styles.recommend_text}>Don't have an account? 
                            </Text>
                            <TouchableOpacity onPress={
                            ()=>{
                                this.props.navigation.navigate("SignUpScreen");
                            }
                            }>
                                <Text style={styles.recommend_text_clickable}> Register</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.recommend_text}>Are you a student?</Text>
                        <TouchableOpacity onPress={
                            ()=>{
                                this.setState({
                                    rightRole:"student"
                                })
                            }
                        }>
                            <Text style={styles.recommend_text_clickable}>Click here</Text>
                        </TouchableOpacity>
                    </View>
                }
            </SafeAreaView>
        )
    };
}
export default SignInScreen;
