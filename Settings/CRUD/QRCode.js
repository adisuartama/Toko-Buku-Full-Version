'use strict';
import React, {Component} from 'react';

import {AppRegistry, StyleSheet, Text, Alert, View, Button, TextInput
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataqr: '',
      status: 'Ready'
    };
  }

  onSuccess(e) {
    this.setState({
      dataqr:this.state.dataqr+''+e.data,
      status: 'Coba Lagi'
    })
    Alert.alert(
      'QR Code',
      'Code : '+e.data,
      [
        {text: 'Cek Buku', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }


  render() {
    return (
      <View style={styles.conMain}>
        <View style={styles.conQR}>
          <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
            ref={(node)=> {this.scanner = node}}
            bottomContent={
              <View>
              <Button 
                style={{width:100}}
                onPress={()=>{
                  this.scanner.reactivate()
                  this.setState({status:'Ready'})
                  this.setState({dataqr:''})
                }}
                title={this.state.status}
              />
            </View>
            }
          />
        </View>

        <View style={styles.conHeader}>
        <Text>Kode</Text>
        <TextInput style={styles.input}
                    value={this.state.dataqr}
                    onChangeText={ (dataqr) => this.setState({ dataqr }) }
                />
        <View style={styles.button1}>
        <Button onPress={() => this.props.navigation.navigate("detailBuku",{
                buku_kode : this.state.dataqr
                })} 
                color="#1E90FF" title="Cek Buku"
        />    
        </View>        
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  conMain : {
    flex:1
  },
  conHeader : {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader : {
    fontSize: 18,
    color :'white'
  },
  conQR : {
    flex:3,
  },
  centerText: {
    fontSize: 12,
    color: '#777',
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
});
