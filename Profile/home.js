import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles';
import {ListItem, Card, Image } from 'react-native-elements'

class ProfileHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Profile",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),

    })
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Text>Profile</Text>
                <Icon name="user-circle" size={48} />
                <Card title="I Komang Adi Suartama" style={{alignItems:'center',justifyContent:'center'}}>
                <Image
                    source={require("../Settings/CRUD/img/pakmang.jpg")} style={{width: 230, height: 300}}
                />
                </Card>
                <TouchableOpacity style={{
                    backgroundColor:'#1E90FF',width:150,height:40,marginTop:30,borderRadius:10,
                    alignItems:'center',justifyContent:'center'
                    }} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color:'white'}}>Logout</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default ProfileHome;
