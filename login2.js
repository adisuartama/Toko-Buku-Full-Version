import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
const axios = require('axios');

export default class login2 extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {username: '',password: '',};
  }

render(){
    const { navigation } = this.props;
      Login = event => {
        axios
          .post("https://adi0711.000webhostapp.com/api/login.php", {
            username: this.state.username,
            password: this.state.password
          })
          .then(function(response) {
            console.log(response);
            if (response.data.username == "admin" ) {
               navigation.navigate("Utama", {
               });
            } else {
              Alert.alert(response.data.pesan);
            }
          });
      };

    return(
<View style={styles.container}>
    <Image  style={{width:230, height: 170,marginTop:-100}} source={require('./Settings/CRUD/img/logo.png')}/>
        
    <View style={styles.form}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='#1E90FF' placeholder="Email" 
        placeholderTextColor = "grey" selectionColor="black"
        keyboardType="email-address"
        onSubmitEditing={()=> this.password.focus()}
        onChangeText={(username) => this.setState({ username })}/>
        
        <TextInput style={styles.inputBox}
        underlineColorAndroid='#1E90FF' placeholder="Password"
        secureTextEntry={true}placeholderTextColor = "grey"
        ref={(input) => this.password = input}  
        onChangeText={(password) => this.setState({ password })}/>

        <TouchableOpacity onPress={Login.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
        
    
</View>)

    }

}



const styles = StyleSheet.create({
container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
},
        
form : {
marginVertical:40,
justifyContent:'center',
alignItems: 'center'
},

inputBox: {
marginVertical:10,
width:300,
backgroundColor:'rgba(255, 255,255,0.2)',
borderRadius: 25,
paddingHorizontal:16,
fontSize:16,
color:'black',

},

button: {
width:300,
backgroundColor:'#1E90FF',
borderRadius: 25,
marginVertical: 10,
paddingVertical: 13
},

buttonText: {
fontSize:16,
fontWeight:'500',
color:'#ffffff',
textAlign:'center'

},
signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
    
    },
    
    signupText: {
    marginVertical:10,
    color:'rgba(255,255,255,0.6)',
    fontSize:16
    },
    
    signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
    },
    container2 : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
        },
        logoText : {
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
        }

});