import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,TouchableHighlight,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

class Menu extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Menu",
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
        <View style={styles.containerMain}>

            <View style={styles.header}>
                <Image
                    source={require("./img/logo.png")} style={{width: 230, height: 170}}
                />
            </View>

            <View style={styles.Mainmenu}>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menu1} onPress={() => this.props.navigation.navigate("pilihTambah")}>
                        <Image
                            source={require("./img/add.png")} style={{width: 100, height: 100}}
                        />
                        <Text style={styles.textMenu}>Tambah Buku</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menu1} onPress={() => this.props.navigation.navigate("pilihUpdate")}>
                    <Image
                        source={require("./img/edit.png")} style={{width: 100, height: 100}}
                    />
                    <Text style={styles.textMenu}>Update Buku</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Mainmenu}>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menu1} onPress={() => this.props.navigation.navigate("findQr")}>
                    <Image
                        source={require("./img/findbook.png")} style={{width: 100, height: 100}}
                    />
                    <Text style={styles.textMenu}>Cari Buku</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menu1} onPress={() => this.props.navigation.navigate("hapusBuku")}>
                    <Image
                        source={require("./img/del.png")} style={{width: 100, height: 100}}
                    />
                    <Text style={styles.textMenu}>Pembelian Buku</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
  },

  textMenu:{
      color:'white',
  },

  header:{
    alignItems:'center',
    flex:1,
  },

  menu1:{
      alignItems:'center'
  },
  Mainmenu :{
    flex:1,
    flexDirection:'row'
  },
  menu:{
    backgroundColor:'#1E90FF',
    borderRadius:5,
    borderWidth:1,
    margin:3,
    borderColor:'#1E90FF',
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    flexDirection:'column',
  }
  
});


export default Menu;
