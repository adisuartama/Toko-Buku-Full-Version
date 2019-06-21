import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,TouchableHighlight,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

class Menu extends Component {

    render() {
        return (
        <View style={styles.containerMain}>

            <View style={styles.Mainmenu}>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menu1} onPress={() => this.props.navigation.navigate("TambahKategori")}>
                        <Image
                            source={require("./img/addKat.png")} style={{width: 100, height: 100}}
                        />
                        <Text style={styles.textMenu}>Tambah Kategori Buku</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menu1} onPress={() => this.props.navigation.navigate("Tambah")}>
                        <Image
                            source={require("./img/addBook.png")} style={{width: 100, height: 100}}
                        />
                    <Text style={styles.textMenu}>Tambah Data Buku</Text>
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
