import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView,Alert,Image,Button,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';

class Payment extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Shopping",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),

    })

    constructor(props) {
        super(props)
        this.state = {
          buku_kode: '',
          pembeli: '',
          jumlah_beli: '',
          dataqr: '',
          status: 'Ready'
        };
      }

      pembelian=() => {
        const url2="https://adi0711.000webhostapp.com/api/tambahPembelian.php"
        fetch(url2, {
          method:'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            buku_kode : this.state.dataqr,
            nama_pembeli : this.state.pembeli,
            jumlah_beli : this.state.jumlah_beli,
          })
        })
        .then((response) => response.json())
        .then((responseJson) =>
        {
            console.log(responseJson);
            Alert.alert(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }

      onSuccess(e) {
        this.setState({
          dataqr:this.state.dataqr+''+e.data,
          status: 'Coba Lagi'
        });
       
      }

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent: 'space-between'}}>

            <QRCodeScanner
            style={{height:50}}
            onRead={this.onSuccess.bind(this)}
            ref={(node)=> {this.scanner = node}}
            topContent={
              <View>
              <Button 
                onPress={()=>{
                  this.scanner.reactivate()
                  this.setState({status:'Ready'})
                  this.setState({dataqr:''})
                  this.setState({pembeli:''})
                  this.setState({jumlah_beli:''})
                }}
                title={this.state.status}
              />
            </View>
            }
          />    
          <View style={{marginTop:50}}>
            <View style={styles.inputData}>
            <Text style={styles.textMenu}>Kode Buku</Text>
            <TextInput style={styles.input} 
                placeholder="Masukkan Kode Buku" 
                value={this.state.dataqr}
                onChangeText = { (buku_kode) => { this.setState({buku_kode}) } } 
            />
            </View>

            <View style={styles.inputData}>
            <Text style={styles.textMenu}>Nama Pembeli</Text>
            <TextInput style={styles.input} 
                placeholder="Masukkan Nama Pembeli"
                value={this.state.pembeli}
                onChangeText = { (pembeli) => { this.setState({pembeli}) } }  
            />
            </View>

            <View style={styles.inputData}>
            <Text style={styles.textMenu}>Jumlah Beli</Text>
            <TextInput style={styles.input} 
                keyboardType={'numeric'}
                value={this.state.jumlah_beli}
                placeholder="Masukkan Jumlah Beli" 
                onChangeText = { (jumlah_beli) => { this.setState({jumlah_beli}) } } 
            />
            </View>

            

            
            <View style={styles.button1}>
                <Button onPress={this.pembelian} color="#1E90FF" title="Simpan Data"/>
            </View>
            </View> 
        </ScrollView>     
        );
    }
}

export default Payment;

const styles = StyleSheet.create({
    containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },

  input:{
    borderColor:'#1E90FF',
    borderWidth:1,
    marginHorizontal:30,
    borderRadius:8,
    height:40,
    width:250,
    textAlign:'center',
  },

  inputData:{
      alignItems:'center',
      justifyContent:'center',
  },

  simpan:{
    width:150,
    marginLeft:100,
    marginTop:20,
    marginBottom:20,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    borderRadius:5,
    
  },

  input2:{
    backgroundColor:'white',
    marginHorizontal:30,
    height:120,
  },

  textMenu:{
    marginTop:30,
    color:'black',      
    alignItems:'center',
    justifyContent:'center',

  },

  textMenu1:{
    color:'black',      
    alignItems:'center',
    justifyContent:'center',

  },

  gambar: {
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    }, 

  lineStyle:{
    borderWidth: 0.5,
    borderColor:'white',
    margin:10,
},
button:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    color:'black',
    marginTop:10,
    },

    button1:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        marginTop:30,
        marginBottom:30,
        },
  
});
