import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import {ListItem, Card, Image } from 'react-native-elements'

class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Home",
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
            <View style={Styles.container}>
                <Card title="Selamat Datang Di">
                <Image
                    source={require("../CRUD/img/logo.png")} style={{width: 230, height: 170}}
                />
                </Card>
                

            </View>
        );
    }
}

export default Home;
