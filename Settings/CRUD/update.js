import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';


export default class update extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        categories: [],
    };
  }


  componentDidMount() {
    axios.get('https://adi0711.000webhostapp.com/api/getBukuAll.php')
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      .catch(function (error){
        console.log(error);
    })
  }

  render() {
    return (
        <View style={styles.container} >
          
          <FlatList 
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.categories}
              renderItem = {({ item }) => (
                <View >
                <ListItem 
                  onPress=
                  {()=>
                    this.props.navigation.navigate('detailUpdate', { 
                      buku_kode : item.buku_kode,
                      buku_judul : item.buku_judul,
                      penulis_buku : item.penulis,
                      penerbit_buku : item.penerbit,
                      sinopsis_buku : item.sinopsis,
                      sampul_buku : item.sampul,
                      stok_buku : item.stok,
                      harga_buku : item.harga

                      })
                  }
                  
                  title={item.buku_judul}
                  leftAvatar={{ source: { uri: 'https://adi0711.000webhostapp.com/api/uploads/'+item.sampul } }}
                />
                </View>
              )}
          />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});
