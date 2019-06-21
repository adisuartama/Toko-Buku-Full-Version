import React from 'react';
import { StyleSheet,Alert,Button, Text, ScrollView, View, TextInput, Image,Modal,ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Pilih Gambar',
    takePhotoButtonTitle:'Ambil Dari Kamera Hp',
    chooseFromLibraryButtonTitle:'Ambil Dari Gallery',
}


export default class detailUpdate extends React.Component {
    constructor(props){
        super(props);
        this.state={
            buku_kode:'',
            buku_judul:'',
            penulis_buku:'',
            penerbit_buku:'',
            sinopsis_buku:'',
            sampul_buku:'',
            stok_buku:'',
            harga_buku:'',
            
            //sampul:this.props.navigation.state.params.sampul,
            avatarSource:null,
            uri:'',
            fileName:'',

            loading:false,
        };
    }

    componentDidMount() {
      this.setState({ 
        buku_kode : this.props.navigation.state.params.buku_kode,
        buku_judul : this.props.navigation.state.params.buku_judul,
        penulis_buku: this.props.navigation.state.params.penulis_buku,
        penerbit_buku: this.props.navigation.state.params.penerbit_buku,
        sinopsis_buku: this.props.navigation.state.params.sinopsis_buku,
        sampul_buku: this.props.navigation.state.params.sampul_buku,
        stok_buku: this.props.navigation.state.params.stok_buku,
        harga_buku: this.props.navigation.state.params.harga_buku
      })
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
                sampul_buku: response.fileName
              });
    
              
            }
          });
    }
    uploadGambar=()=>{
      if(this.state.avatarSource != null){
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
            this.props.navigation.navigate('detailUpdate');
            
        });

        const url2="https://adi0711.000webhostapp.com/api/updateBuku.php"
        fetch(url2, {
          method:'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            buku_kode : this.state.buku_kode,
            buku_judul : this.state.buku_judul,
            penulis : this.state.penulis_buku,
            penerbit : this.state.penerbit_buku,
            sinopsis : this.state.sinopsis_buku,
            sampul : this.state.sampul_buku,
            stok : this.state.stok_buku,
            harga: this.state.harga_buku
          })
        })
        .then((response) => response.json())
        .then((responseJson) =>
        {
            Alert.alert(responseJson);
            console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }else{
        const url2="https://adi0711.000webhostapp.com/api/updateBuku.php"
        fetch(url2, {
          method:'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            buku_kode : this.state.buku_kode,
            buku_judul : this.state.buku_judul,
            penulis : this.state.penulis_buku,
            penerbit : this.state.penerbit_buku,
            sinopsis : this.state.sinopsis_buku,
            sampul : this.state.sampul_buku,
            stok : this.state.stok_buku,
            harga: this.state.harga_buku
          })
        })
        .then((response) => response.json())
        .then((responseJson) =>
        {
            console.log(responseJson);            
        })
        .catch((error) => {
          console.error(error);
        });
        
      }
            
    }
  render() {
    return (
    
            <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent: 'space-between'}}>



                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Judul Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Judul Buku"
                    value={this.state.buku_judul}
                    onChangeText = { (buku_judul) => { this.setState({buku_judul}) } }  
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Penulis</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Nama Penulis" 
                    value={this.state.penulis_buku}
                    onChangeText = { (penulis_buku) => { this.setState({penulis_buku}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Penerbit</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Nama Penerbit" 
                    value={this.state.penerbit_buku}
                    onChangeText = { (penerbit_buku) => { this.setState({penerbit_buku}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Sinopsis</Text>
                <TextInput style={styles.input}
                    placeholder="Masukkan Sinopsis Buku" 
                    editable = {true}
                    maxLength = {40}
                    value={this.state.sinopsis_buku}
                    onChangeText = { (sinopsis_buku) => { this.setState({sinopsis_buku}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Stok Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Stok Buku" 
                    keyboardType={'numeric'}
                    value={this.state.stok_buku}
                    onChangeText = { (stok_buku) => { this.setState({stok_buku}) } } 
                />
                </View>

                <View style={styles.inputData}>
                <Text style={styles.textMenu}>Harga Buku</Text>
                <TextInput style={styles.input} 
                    placeholder="Masukkan Harga Buku" 
                    keyboardType={'numeric'}
                    value={this.state.harga_buku}
                    onChangeText = { (harga_buku) => { this.setState({harga_buku}) } } 
                />
                </View>


                <View style={styles.button}>
                    <Button onPress={this.pilihGambar} color="#1E90FF" title="Ambil Foto Buku Baru"/>
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


                <View style={styles.gambar}>
                    <Image 
                      source= {this.state.avatarSource}
                      style={{height:200,width:180}}
                  />
                    
                </View>
                
                <View style={styles.button1}>
                    <Button onPress={this.uploadGambar} color="#1E90FF" title="Update Data"/>
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
    color:'black',      
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
