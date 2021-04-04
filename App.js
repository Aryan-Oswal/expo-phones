import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View , Image } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './local_db'
import PhonicSound from './PhonicSound';
export default class App extends React.Component {
  constructor() {
    super()
    this.state= {
      text: "",
      chunks: [],
      phonic_sounds: []
      
    }
  }
  render() {
    return (
    <SafeAreaProvider>
      <View style={styles.flex1}>
        <Header  centerComponent={{text: "Monkey Chunky"}} style={styles.header}/>
      <View class="container" style={styles.container}>
        
        <Image  style={styles.image} source={{ uri: "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}}  />
        <TextInput  placeholder="Paste or Type Your Text" style={styles.input} onChangeText={text2 => this.setState({text: text2})} />
        <Text>{this.state.text}</Text>
        <TouchableOpacity style={styles.opacity} onPress={() => [this.setState({chunks: db[this.state.text].chunks}) , this.setState({phonic_sounds: db[this.state.text].phones})]}><Text style={styles.text}>Display Text</Text></TouchableOpacity>
        <View>
         {this.state.chunks.map((chunk , index) =>  (
               <PhonicSound  wordChunk={this.state.chunks[index]} soundChunk={this.state.phonic_sounds[index]} />
          ))}
        </View>
        </View>
</View>
      
    </SafeAreaProvider>
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
   alignItems: 'center',
   backgroundImage: 'linear-gradient(to right,rgba(255, 255, 255, 0.3), rgba(255,255,255 , 0.4))',
   width: '80%',
   height: '80%',
    borderRadius: '20px',
    'backdrop-filter': 'blur(12px)',
   marginTop: '20px'
  },
  flex1 :{
    alignItems:'center'
,    flex: 1,
    backgroundImage: 'linear-gradient(to right, #59c173, #a17fe0, #5d26c1)'
  },
  header: {

    backgroundColor:' #EBECF0',
    width : '100%',
    position: 'absolute'
  },
  input: {
    backgroundColor: 'white',
    fontSize: '20px',
    height: '50px',
    width: '50%',
    borderRadius: "20000000px",
    boxShadow: 
        'inset  2px  2px  5px #BABECC,inset -5px -5px 10px #FFF',
    margin : '30px',
    outline:' none !important',
    textAlign: 'center',

  },
   opacity: {
    width: '200px',
    height: '30px',
    boxShadow: 
        'inset  2px  2px  5px #BABECC,inset -5px -5px 10px #FFF',
    borderRadius : '300px',
    textAlign: 'center',
    margin: '30px',

   }, 
   text : {
     marginTop: '5px',
   },
  
   image : {
     width : '100px',
     height: '100px'
   },
   opacity_text: {
    width: '500px',
    height: '30px',
    backgroundImage: 'linear-gradient(to right, #654ea3, #eaafc8)',
    borderRadius : '5px',
    textAlign: 'center',
    margin: '30px',

   },

   text2: {
     fontWeight: 'bold',
     color: 'white',
     marginTop :'5px'

   }


});
