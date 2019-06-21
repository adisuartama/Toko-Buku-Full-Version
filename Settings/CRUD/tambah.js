import React from 'react';
import { StyleSheet,Alert,Button, Text, ScrollView, View, TextInput, Image,Modal,ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Pilih Gambar',
    takePhotoButtonTitle:'Ambil Dari Kamera Hp',
    chooseFromLibraryButtonTitle:'Ambil Dari Gallery',
}

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            avatarSource:null,
            uri:'',
            fileName:'',
            kode:'',
            judul:'',
            penulis:'',
            penerbit:'',
            sinopsis:'',
            stok:'',
            harga:'',
            idKat:'',
            loading:false,
        };
    }

    pilihGambar=()=>{
        //alert('clicked');
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }else {      
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: { uri: response.uri },
                uri:response.uri,
                fileName: response.fileName,
                sampul: response.fileName
              });
    
              
            }
          });
    }
    uploadGambar=()=>{
        console.log('mulai upload');
        this.setState({loading:true})
        
        const data = new FormData();
        data.append('fileToUpload', {
            uri: this.state.uri,
            type: 'images/jpeg',
            name: this.state.fileName

        });
        const url="https://adi0711.000webhostapp.com/api/upload.php"
        fetch(url, {
            method:'POST',
            body:data
        })
        .then((response) => response.json())
        .then((responseJson) =>
        {
            console.log(responseJson);
            this.setState({loading:false})
            
        });
        

        const url2="https://adi0711.000webhostapp.com/api/tambahBuku.php"
        fetch(url2, {
          method:'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            buku_kode : this.state.kode,
            buku_judul : this.state.judul,
            penulis : this.state.penulis,
            penerbit : this.state.penerbit,
            sinopsis : this.state.sinopsis,
            stok : this.state.stok,
            harga : this.state.harga,
            idKat : this.state.idKat,
            sampul : this.state.sampul
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
  render() {
    return (
    
        
      
            <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent: 'space-between'}}>
           
                <View style={styles.gambar}>
                    <Image source={this.state.avatarSource}
                    style={{height:200,width:180}}
                    />
                </View>
                
                <View style={styles.button}>
                    <Button onPress={this.pilihGambar} color="#1E90FF" title="Ambil Foto Buku"/>
                </View>
                <View style = {styles.lineStyle} />
            
                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Kode Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Kode Buku" 
                    onChangeText = { (kode) => { this.setState({kode}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Judul Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Judul Buku"
                    onChangeText = { (judul) => { this.setState({judul}) } }  
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Penulis</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Nama Penulis" 
                    onChangeText = { (penulis) => { this.setState({penulis}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Penerbit</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Nama Penerbit" 
                    onChangeText = { (penerbit) => { this.setState({penerbit}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Sinopsis</Text>
                <TextInput style={styles.input}
                    placeholder="Masukkan Sinopsis Buku" 
                    editable = {true}
                    maxLength = {40}
                    onChangeText = { (sinopsis) => { this.setState({sinopsis}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Stok Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Stok Buku" 
                    keyboardType={'numeric'}
                    onChangeText = { (stok) => { this.setState({stok}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Harga Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Harga Buku" 
                    keyboardType={'numeric'}
                    onChangeText = { (harga) => { this.setState({harga}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Id Kategori Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Id Kategori Buku" 
                    onChangeText = { (idKat) => { this.setState({idKat}) } } 
                />
                </View>

                {
                (this.state.loading==true)&&
                (
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.loading}
                    onRequestClose={()=>{
                        alert('Modal has been closed.');
                    }}
                >
                    <ActivityIndicator
                        animating={true}
                        style={styles.indicator}
                        size="large"
                    />
                </Modal>
            
                )
            }
                
                <View style={styles.button1}>
                    <Button onPress={this.uploadGambar} color="#1E90FF" title="Simpan Data"/>
                </View>

            </ScrollView>     
    
    
    );
  }
}
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
    color:'white',      
    alignItems:'center',
    justifyContent:'center',

  },

  textMenu1:{
    color:'white',      
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
