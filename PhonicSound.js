import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View , Text , StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

export default class PhonicSound extends React.Component {
    playSound = async (soundChunk) => {
        console.log(soundChunk)
        var soundUrl = 'https://s3-whitehatjrcontent.whjr.online/phones/'  +  soundChunk + '.mp3'
        await Audio.Sound.createAsync(
            {
                uri: soundUrl
            },
            {
                shouldPlay: true
            }
        )
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.opacity_text} onPress={() => this.playSound(this.props.soundChunk)}><Text style={styles.text2}>{this.props.wordChunk}</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    opacity_text: {
        width: '500px',
        height: '30px',
        margin: '40px',
        borderRadius: '49px',
backgroundColor: 'white',
boxShadow:  '2px 2px 14px #b5b5b5,-2px -2px 8px rgba( 0 ,0 ,0 , 0.4)',
textAlign: 'center'
    
       },
    
       text2: {
         fontWeight: 'bold',
         color: 'balck',
         marginTop :'5px'
    
       }
}) 